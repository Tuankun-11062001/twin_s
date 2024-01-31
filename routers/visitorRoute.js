const visitorRouter = require("express").Router();
const visitorController = require("../controllers/visitorController");

visitorRouter.get("/", visitorController.getAllVisitor);
visitorRouter.post("/add", visitorController.addOneVisitor);
visitorRouter.delete("/delete/:id", visitorController.deleteVistor);

module.exports = visitorRouter;
