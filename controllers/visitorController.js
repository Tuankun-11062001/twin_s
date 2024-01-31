const VisitorModel = require("../models/visitor");

const visitorController = {
  //   =================================================================
  //   search all paroduct
  // =================================================================
  getAllVisitor: async (req, res) => {
    try {
      const visitors = await VisitorModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: visitors,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't get all visitor",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   add one product
  // =================================================================

  addOneVisitor: async (req, res) => {
    try {
      const body = req.body;

      const visitorNew = new VisitorModel(body);
      await visitorNew.save();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: visitorNew,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't add visitor",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   delete one visitor
  // =================================================================

  deleteVistor: async (req, res) => {
    try {
      const visitor = await VisitorModel.findByIdAndDelete(req.params.id);
      const visitors = await VisitorModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: visitors,
        dataRemoved: visitor,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't delete visitor",
        status: 500,
        data: error.message,
      });
    }
  },
};

module.exports = visitorController;
