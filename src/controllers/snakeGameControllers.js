import mongoose from "mongoose";
import ServerError from "../common/errors/ServerError.js";
import ServerResponse from "../common/utils/ServerResponse.js";
import SnakeGame from "../models/snakeGameModel.js";

export const newGameScore = async (req, res) => {
  const { u_id: userId } = req.params;
  const { score } = req.query;

  const numericScore = Number(score);
  if (!Number.isFinite(numericScore)) {
    throw new ServerError(400, "Invalid score");
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new ServerError(400, "Invalid user id");
  }

  const [topScoreRecord] = await SnakeGame.aggregate([
    { $match: { playerId: new mongoose.Types.ObjectId(userId) } },
    { $project: { _id: 0, scoreNum: { $toDouble: "$score" } } },
    { $group: { _id: null, topScore: { $max: "$scoreNum" } } },
  ]);

  const game = await SnakeGame.create({
    playerId: userId,
    score: String(score),
  });

  const isNewTopScore =
    !topScoreRecord || numericScore > Number(topScoreRecord.topScore);

  return res.status(201).json(
    new ServerResponse(
      201,
      {
        game,
        isNewTopScore,
      },
      isNewTopScore ? "New top score" : "Score saved",
    ),
  );
};

export const topTenScorers = async (req, res) => {
  const topScorers = await SnakeGame.aggregate([
    { $match: { playerId: { $ne: null } } },
    {
      $project: {
        playerId: 1,
        scoreNum: {
          $convert: {
            input: "$score",
            to: "double",
            onError: null,
            onNull: null,
          },
        },
      },
    },
    { $match: { scoreNum: { $ne: null } } },
    { $group: { _id: "$playerId", topScore: { $max: "$scoreNum" } } },
    { $sort: { topScore: -1, _id: 1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user",
        pipeline: [{ $project: { _id: 0, username: 1 } }],
      },
    },
    { $unwind: "$user" },
    { $project: { _id: 0, username: "$user.username", score: "$topScore" } },
  ]);

  return res.status(200).json(
    new ServerResponse(
      200,
      {
        topTenScorers: topScorers.map(({ username, score }) => ({
          username,
          score,
        })),
      },
      "Top scorers fetched successfully",
    ),
  );
};
