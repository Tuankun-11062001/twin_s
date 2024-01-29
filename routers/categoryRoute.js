const categoryRouter = require("express").Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/", categoryController.getAllCategory);
categoryRouter.post("/add", categoryController.addOneCategory);
categoryRouter.put("/edit/:id", categoryController.updateCategory);
categoryRouter.delete("/delete/:id", categoryController.deleteCategory);

module.exports = categoryRouter;
