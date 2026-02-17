import mongoose from "mongoose";

const simonSaysGameSchema = new mongoose.Schema(
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

const SimonSaysGame = mongoose.model("SimonSaysGame", simonSaysGameSchema);
export default SimonSaysGame;
