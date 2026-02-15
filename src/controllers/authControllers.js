import { hashPassword } from "../common/utils/authHelper.js";
import { generateAccessAndRefreshTokens } from "../common/utils/jwtHelper.js";
import logger from "../common/utils/logger.js";
import { cookieOptions } from "../constant.js";
import User from "../models/userModel.js";
import { userControllersText } from "../responseTexts.js";

export const userSignup = async (req, res) => {
  logger.http(
    `userSignup - POST ${req.originalUrl} payload=${JSON.stringify(req.body)}`,
  );
  const { username, email, password, gender } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    logger.warn(`userSignup - email already exists: ${email}`);
    throw new ServerError(409, userControllersText.userSignup.alreadyExists);
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    username,
    email,
    gender,
    password: hashedPassword,
  });
  await user.save();
  logger.info(`userSignup - user ${user._id} created`);

  return res
    .status(201)
    .json(
      new ServerResponse(201, user, userControllersText.userSignup.success),
    );
};

export const userLogin = async (req, res) => {
  logger.http(
    `userLogin - POST ${req.originalUrl} payload=${JSON.stringify(req.body.email)}`,
  );

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    logger.warn(`userLogin - login attempt with non-existent email: ${email}`);
    throw new ServerError(404, userControllersText.userLogin.notFound);
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    logger.error(`userLogin - invalid password for user ${user._id}`);
    throw new ServerError(402, userControllersText.userLogin.invalid);
  }

  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user);

  logger.info(`userLogin - user ${user._id} logged in successfully`);

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ServerResponse(
        200,
        {
          user,
          // accessToken, refreshToken
        },
        userControllersText.userLogin.success,
      ),
    );
};

export const userLogout = async (req, res) => {
  logger.http(`userLogout - POST ${req.originalUrl} for user ${req.user._id}`);

  const result = await User.findOneAndUpdate(
    { _id: req.user?._id, isRegisteredAsAdmin: false },
    {
      $unset: {
        refreshToken: "",
      },
    },
    {
      new: true,
    },
  );
  if (!result) {
    logger.warn(
      `userLogout - attempted logout, but user not found ${req.user?._id}`,
    );
    throw new ServerError(404, userControllersText.userLogout.notFound);
  }
  logger.info(`userLogout - user ${req.user?._id} logged out successfully`);

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .clearCookie("resetToken", cookieOptions)
    .json(new ServerResponse(200, {}, userControllersText.userLogout.success));
};
