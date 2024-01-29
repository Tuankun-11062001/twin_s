const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const userController = {
  //   =================================================================
  //   search all users
  // =================================================================
  getAllUser: async (req, res) => {
    try {
      const users = await UserModel.find();

      return res.status(200).json({
        message: "success",
        status: 200,
        data: users,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't get all users",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   search user
  // =================================================================

  getUserById: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      return res.status(200).json({
        message: "success",
        status: 200,
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't find user",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   lgoin user
  // =================================================================

  loginUser: async (req, res) => {
    try {
      const body = req.body;
      const user = await UserModel.find({ email: body.email });

      if (user.length < 1) {
        return res.status(400).json({
          message: "User not found",
          status: 400,
          data: {},
        });
      }
      const isMatch = await bcrypt.compare(body.password, user[0].password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Password not match",
          status: 400,
          data: {},
        });
      }

      if (req.body.secretCode !== process.env.KEY_APP) {
        return res.status(400).json({
          message: "Secret code not match",
          status: 400,
          data: {},
        });
      }

      return res.status(200).json({
        message: "success",
        status: 200,
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't login",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   add one user
  // =================================================================

  addOneUser: async (req, res) => {
    try {
      const body = req.body;

      // check user
      const user = await UserModel.findOne({
        email: body.email,
      });

      if (user) {
        return res.status(400).json({
          message: "User already exist",
          status: 400,
          data: user,
        });
      }
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);

      const userNew = new UserModel(body);
      await userNew.save();

      const { email } = userNew;

      return res.status(200).json({
        message: "success",
        status: 200,
        data: email,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't add user",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   update one user
  // =================================================================

  updateUser: async (req, res) => {
    try {
      const body = req.body;
      const user = await UserModel.findByIdAndUpdate(req.params.id, body);

      return res.status(200).json({
        message: "success",
        status: 200,
        data: body,
        userUpdate: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't update user",
        status: 500,
        data: error.message,
      });
    }
  },

  //   =================================================================
  //   delete one user
  // =================================================================

  deleteUser: async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        message: "success",
        status: 200,
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "can't delete User",
        status: 500,
        data: error.message,
      });
    }
  },
};

module.exports = userController;
