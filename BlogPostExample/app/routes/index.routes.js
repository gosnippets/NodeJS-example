import express from "express";
import userRouter from "./users.routes.js";
import postsRouter from "./post.routes.js";
import categoryRouter from "./category.routes.js";
const routes = express();

routes.use("/users", userRouter);
routes.use("/post", postsRouter);
routes.use("/category", categoryRouter);

export default routes;