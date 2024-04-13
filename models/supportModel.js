const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const SupportModel =
  mongoose.models.supports || mongoose.model("supports", SupportSchema);

module.exports = SupportModel;
