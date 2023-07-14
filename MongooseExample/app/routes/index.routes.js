import express from "express";
import usersRouter from "./users.routes.js";
import taskRouter from "./task.routes.js";
import productRouter from "./product.routes.js";
const routes = express();

routes.use("/users", usersRouter);
routes.use("/task", taskRouter);
routes.use("/product", productRouter);

export default routes;