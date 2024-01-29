const blogRouter = require("express").Router();
const blogController = require("../controllers/blogController");

blogRouter.get("/", blogController.getAllBlog);
blogRouter.post("/add", blogController.addOneBlog);
blogRouter.get("/find/:id", blogController.getBlogById);
blogRouter.put("/edit/:id", blogController.updateBlog);
blogRouter.delete("/delete/:id", blogController.deleteBlog);

module.exports = blogRouter;
