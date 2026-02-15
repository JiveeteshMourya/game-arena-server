import mongoose from "mongoose";

const snakeGameSchema = new mongoose.Schema(
  {
    playerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    score: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const SnakeGame = mongoose.model("SnakeGame", snakeGameSchema);
export default SnakeGame;
