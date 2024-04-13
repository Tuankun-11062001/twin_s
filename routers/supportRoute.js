const supportRouter = require("express").Router();
const supportController = require("../controllers/supportController");

supportRouter.get("/", supportController.getAllSupport);
supportRouter.get("/:id", supportController.readSupport);
supportRouter.post("/create", supportController.createSupport);
supportRouter.delete("/:id", supportController.deleteSupport);

module.exports = supportRouter;
