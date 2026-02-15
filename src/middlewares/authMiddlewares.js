import ServerError from "../common/errors/ServerError.js";
import wrapAsync from "../common/utils/wrapAsync.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import logger from "../common/utils/logger.js";

export const verifyAccessJWT = wrapAsync(async (req, _, next) => {
  logger.http(
    `verifyAccessJWT called - cookies: ${JSON.stringify(req.cookies)}`,
  );
  // logger.http("verifyAccessJWT called");
  // console.log("req.cookies:", req.cookies);

  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    logger.warn("verifyAccessJWT - no token provided");
    throw new ServerError(401, "Unauthorized request");
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(decodedToken?._id); // this _id is obtained because we sent the user._id in generateAccessToken()
  if (!user) {
    logger.error(
      `verifyAccessJWT - user not found for id - ${decodedToken._id}`,
    );
    throw new ServerError(401, "Invalid Access Token");
  }

  if (!user.isUserVerified) {
    logger.error(`verifyAccessJWT - not a verified user - ${user._id}`);
    throw new ServerError(
      401,
      "Not a verified user, Verify first before accessing resources",
    );
  }

  if (user.isBlocked) {
    logger.error(`verifyAccessJWT - User id blocked, access denied`);
    throw new ServerError(401, "User Id blocked, access denied");
  }

  logger.info(`verifyAccessJWT - user ${user._id} authenticated for resources`);
  req.user = user;
  next();
});

export const verifyResetJWT = wrapAsync(async (req, _, next) => {
  logger.http(
    `verifyResetJWT called - cookies: ${JSON.stringify(req.cookies)}`,
  );
  // logger.http("verifyResetJWT called");
  // console.log("req.cookies:", req.cookies);
  const token = req.cookies?.resetToken;
  if (!token) {
    logger.warn("verifyResetJWT - no reset token provided");
    throw new ServerError(401, "Unauthorized request");
  }

  const decodedToken = jwt.verify(token, process.env.RESET_TOKEN_SECRET);

  const user = await User.findById(decodedToken?._id);
  if (!user) {
    logger.error(
      `verifyResetJWT - no user for reset token id ${decodedToken._id}`,
    );
    throw new ServerError(401, "Invalid OTP Token");
  }

  logger.info(`verifyResetJWT - user ${user._id} reset token validated`);
  req.user = user;
  next();
});
