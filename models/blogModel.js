const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    publish: {
      type: Boolean,
      required: true,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    description: {
      type: String,
    },
    views: {
      type: String,
      default: 0,
    },
    clickAds: {
      type: String,
      default: 0,
    },
    body: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.models.blogs || mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
