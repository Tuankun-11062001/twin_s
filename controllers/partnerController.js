const PartnerModel = require("../models/partnerModel");

const partnerController = {
  //   =================================================================
  //   search all partner
  // =================================================================
  getAllPartner: async (req, res) => {
    try {
      const partners = await PartnerModel.find();
      return res.status(200).json({
        message: "success",
        status: 200,
        data: partners,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't get all partners",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   search partner
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
  //   add one partner
  // =================================================================

  addOnePartner: async (req, res) => {
    try {
      const body = req.body;
      // check partner
      const partner = await PartnerModel.findOne({
        title: body.title,
      });
      if (partner) {
        return res.status(400).json({
          message: "partner already exist",
          status: 400,
          data: partner,
        });
      }

      const partnerNew = new PartnerModel(body);
      await partnerNew.save();

      const partners = await PartnerModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: partners,
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
  //   update one partner
  // =================================================================

  updatePartner: async (req, res) => {
    try {
      const body = req.body;
      const partner = await PartnerModel.findByIdAndUpdate(req.params.id, body);
      return res.status(200).json({
        message: "success",
        status: 200,
        data: partner,
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

  deletePartner: async (req, res) => {
    try {
      const partner = await PartnerModel.findByIdAndDelete(req.params.id);
      const allPartner = await PartnerModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: allPartner,
        dataRemoved: partner,
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

module.exports = partnerController;
