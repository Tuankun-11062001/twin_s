const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categoryCode: {
      type: String,
      required: true,
      unique: true,
    },
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
const CategoryModel =
  mongoose.models.categories || mongoose.model("categories", CategorySchema);

module.exports = CategoryModel;
