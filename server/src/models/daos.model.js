const mongoose = require("mongoose");

const daosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    contributors: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Daos = mongoose.model("daos", daosSchema);
module.exports = Daos;
