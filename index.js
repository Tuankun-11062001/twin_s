const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./db/connect");

// import router
const categoryRouter = require("./routers/categoryRoute");
const partnerRouter = require("./routers/partnerRoute");
const productRouter = require("./routers/productRoute");
const blogRouter = require("./routers/blogRoute");
const userRouter = require("./routers/userRoute");

const app = express();
app.use(cors());
app.use(express.json());

// connect DB
connect();

// connect router
app.use("/category", categoryRouter);
app.use("/partner", partnerRouter);
app.use("/product", productRouter);
app.use("/blog", blogRouter);
app.use("/user", userRouter);

app.listen(3001, () => console.log("server listening on :3001"));
