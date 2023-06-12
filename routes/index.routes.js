import express from "express";
import studentsRouter from "./students.routes.js";
const routes = express();

routes.use("/students", studentsRouter)

export default routes;