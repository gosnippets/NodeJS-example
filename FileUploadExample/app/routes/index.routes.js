import express from "express";
import filesRouter from "./files.routes.js";
const routes = express();

routes.use("/files", filesRouter);

export default routes;