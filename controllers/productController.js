const ProductModel = require("../models/productModel");

const productController = {
  //   =================================================================
  //   search all paroduct
  // =================================================================
  getAllProduct: async (req, res) => {
    try {
      const products = await ProductModel.find()
        .populate("category", "title")
        .populate("partner", "title");

      return res.status(200).json({
        message: "success",
        status: 200,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't get all Products",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   latest Products
  // =================================================================
  getLatestProduct: async (req, res) => {
    try {
      const products = await ProductModel.find()
        .sort("-date")
        .limit(4)
        .populate("category", "title")
        .populate("partner", "title");
      return res.status(200).json({
        message: "success",
        status: 200,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't get all Products",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   search product
  // =================================================================

  searchProduct: async (req, res) => {
    try {
      let query = {};

      if (req.query.category) {
        query.category = req.query.category;
      }
      if (req.query.partner) {
        query.partner = req.query.partner;
      }

      if (req.query.season) {
        query.season = req.query.season;
      }

      if (req.query.hotProduct) {
        query.hotProduct = req.query.hotProduct;
      }

      if (req.query.saleProduct) {
        query.saleProduct = req.query.saleProduct;
      }

      const product = await ProductModel.find(query)
        .populate("category", "title")
        .populate("partner", "title");

      return res.status(200).json({
        message: "success",
        status: 200,
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't find product",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   search product
  // =================================================================
  getProductyById: async (req, res) => {
    try {
      const category = await ProductModel.findById(req.params.id)
        .populate("category", "title")
        .populate("partner", "title");
      return res.status(200).json({
        message: "success",
        status: 200,
        data: category,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't find product",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   add one product
  // =================================================================

  addOneProduct: async (req, res) => {
    try {
      const body = req.body;
      // check product code id
      const product = await ProductModel.findOne({
        code: body.code,
      });
      if (product) {
        return res.status(400).json({
          message: "Product already exist",
          status: 400,
          data: product,
        });
      }

      const productNew = new ProductModel(body);
      await productNew.save();

      const products = await ProductModel.find()
        .populate("category", "title")
        .populate("partner", "title");

      return res.status(200).json({
        message: "success",
        status: 200,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't add Product",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   update one product
  // =================================================================

  updateProduct: async (req, res) => {
    try {
      const body = req.body;
      const product = await ProductModel.findByIdAndUpdate(req.params.id, body);
      const products = await ProductModel.find()
        .populate("category", "title")
        .populate("partner", "title");

      return res.status(200).json({
        message: "success",
        status: 200,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't update product",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   delete one product
  // =================================================================

  deleteProduct: async (req, res) => {
    try {
      const product = await ProductModel.findByIdAndDelete(req.params.id);
      const allProduct = await ProductModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: allProduct,
        dataRemoved: product,
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

module.exports = productController;
