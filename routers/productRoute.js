const productRouter = require("express").Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController.getAllProduct);
productRouter.post("/add", productController.addOneProduct);
productRouter.get("/find/:id", productController.getProductyById);
productRouter.put("/edit/:id", productController.updateProduct);
productRouter.delete("/delete/:id", productController.deleteProduct);

module.exports = productRouter;
