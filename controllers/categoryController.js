const CategoryModel = require("../models/categoryModel");

const categoryController = {
  //   =================================================================
  //   search all category
  // =================================================================
  getAllCategory: async (req, res) => {
    try {
      const categories = await CategoryModel.find();
      return res.status(200).json({
        message: "success",
        status: 200,
        data: categories,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't get all category",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   search category
  // =================================================================

  getCategoryById: async (req, res) => {
    try {
      const category = await CategoryModel.findById(req.params.id);
      return res.status(200).json({
        message: "success",
        status: 200,
        data: category,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't find category",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   add one category
  // =================================================================

  addOneCategory: async (req, res) => {
    try {
      const body = req.body;
      // check category code
      const category = await CategoryModel.findOne({
        categoryCode: body.categoryCode,
      });
      if (category) {
        return res.status(400).json({
          message: "category code already exist",
          status: 400,
          data: category,
        });
      }

      const categoryNew = new CategoryModel(body);
      await categoryNew.save();

      const categories = await CategoryModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: categories,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't add category",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   update one category
  // =================================================================

  updateCategory: async (req, res) => {
    try {
      const body = req.body;
      const category = await CategoryModel.findByIdAndUpdate(
        req.params.id,
        body
      );
      return res.status(200).json({
        message: "success",
        status: 200,
        data: category,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't update category",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   delete one category
  // =================================================================

  deleteCategory: async (req, res) => {
    try {
      const category = await CategoryModel.findByIdAndDelete(req.params.id);
      const allCategory = await CategoryModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: allCategory,
        dataRemoved: category,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't delete category",
        status: 500,
        data: error.message,
      });
    }
  },
};

module.exports = categoryController;
