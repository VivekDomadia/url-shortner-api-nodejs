const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    longUrl: {
      type: "String",
      required: true,
    },
    code: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
