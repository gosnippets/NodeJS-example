import express from "express";
import taskServices from "../services/task.services.js";

const taskRouter = express.Router();

taskRouter.post("/", taskServices._createTask);
taskRouter.post("/addtasktouser", taskServices._addTaskToUser);
taskRouter.get("/", taskServices._getAllTask);
taskRouter.get("/:id", taskServices._getTaskById);

export default taskRouter