const BlogModel = require("../models/blogModel");

const blogController = {
  //   =================================================================
  //   search all blogs
  // =================================================================
  getAllBlog: async (req, res) => {
    try {
      const blogs = await BlogModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: blogs,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't get all blogs",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   search blog
  // =================================================================

  getBlogById: async (req, res) => {
    try {
      const blog = await BlogModel.findById(req.params.id);
      return res.status(200).json({
        message: "success",
        status: 200,
        data: blog,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't find blog",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   add one blog
  // =================================================================

  addOneBlog: async (req, res) => {
    try {
      const body = req.body;

      const blogNew = new BlogModel(body);
      await blogNew.save();

      const blogs = await BlogModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: blogs,
        blogCreate: body,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't add blog",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   update one blog
  // =================================================================

  updateBlog: async (req, res) => {
    try {
      const body = req.body;
      console.log(body);
      const blog = await BlogModel.findByIdAndUpdate(req.params.id, body);
      const blogs = await BlogModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: blogs,
        blogUpdate: blog,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't update blog",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   delete one blog
  // =================================================================

  deleteBlog: async (req, res) => {
    try {
      const blog = await BlogModel.findByIdAndDelete(req.params.id);
      const allBlog = await BlogModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: allBlog,
        dataRemoved: blog,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't delete product",
        status: 500,
        data: error.message,
      });
    }
  },
};

module.exports = blogController;
