const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.get("/", userController.getAllUser);
userRouter.post("/add", userController.addOneUser);
userRouter.post("/login", userController.loginUser);
// userRouter.get("/find/:id", userController.getBlogById);
// userRouter.put("/edit/:id", userController.updateBlog);
// userRouter.delete("/delete/:id", userController.deleteBlog);

module.exports = userRouter;
