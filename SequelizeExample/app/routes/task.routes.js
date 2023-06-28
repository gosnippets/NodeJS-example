import express from "express";
import taskServices from "../services/task.services.js";
const taskRouter = express.Router();

taskRouter.post("/", taskServices._createTask);
taskRouter.get("/", taskServices._getAllTasks);

export default taskRouter