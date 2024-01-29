const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    publish: {
      type: Boolean,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    currentImage: {
      type: String,
    },
    image: [{ color: String, colorLink: String }],
    category: {
      type: mongoose.Types.ObjectId,
      ref: "categories",
    },
    partner: {
      type: mongoose.Types.ObjectId,
      ref: "partners",
    },
    price: {
      type: String,
    },
    views: {
      type: String,
      default: 0,
    },
    profit: {
      type: String,
    },
    buy: {
      type: String,
      default: 0,
    },
    description: {
      type: String,
    },
    linkProduct: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.products || mongoose.model("products", ProductSchema);

module.exports = ProductModel;
