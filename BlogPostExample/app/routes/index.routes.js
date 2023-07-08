import express from "express";
import userRouter from "./users.routes.js";
import postsRouter from "./post.routes.js";
import categoryRouter from "./category.routes.js";
import tagRouter from "./tag.routes.js";
const routes = express();

routes.use("/users", userRouter);
routes.use("/post", postsRouter);
routes.use("/category", categoryRouter);
routes.use("/tag", tagRouter);

export default routes;