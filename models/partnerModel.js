const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const PartnerModel =
  mongoose.models.partners || mongoose.model("partners", PartnerSchema);

module.exports = PartnerModel;
