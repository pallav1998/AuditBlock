const mongoose = require("mongoose");

const contributorsSchema = new mongoose.Schema(
  {
    contributorId: { type: String, required: true },
    name: { type: String, required: true },
    organization: { type: String, required: true },
    avatar: { type: String, required: true },
    intro: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Contributors = mongoose.model("contributors", contributorsSchema);
module.exports = Contributors;
