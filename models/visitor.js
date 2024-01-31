const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema(
  {
    country_code: {
      type: String,
    },
    city: {
      type: String,
    },
    IPv4: {
      type: String,
    },
    country_name: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const VisitorModel =
  mongoose.models.visitor || mongoose.model("visitor", VisitorSchema);

module.exports = VisitorModel;
