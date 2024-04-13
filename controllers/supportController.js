const SupportModel = require("../models/supportModel");

const supportController = {
  getAllSupport: async (req, res) => {
    const allSupport = await SupportModel.find();
    res.send(allSupport);
  },
  createSupport: async (req, res) => {
    try {
      const body = req.body;
      const supportNew = new SupportModel(body);
      await supportNew.save();
      return res.status(200).json({
        message: "success",
        status: 200,
        data: body,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't create  Support",
        status: 500,
        data: error.message,
      });
    }
  },
  readSupport: async (req, res) => {
    try {
      const support = await SupportModel.findById(req.params.id);

      return res.status(200).json({
        message: "success",
        status: 200,
        data: support,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't read  Support",
        status: 500,
        data: error.message,
      });
    }
  },
  deleteSupport: async (req, res) => {
    try {
      const support = await SupportModel.deleteOne({ _id: req.params.id });
      return res.status(200).json({
        message: "success",
        status: 200,
        data: support,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't delete  Support",
        status: 500,
        data: error.message,
      });
    }
  },
};

module.exports = supportController;
