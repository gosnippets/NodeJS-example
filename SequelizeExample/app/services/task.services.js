import db from "../models/index.js";
import msg from "../utils/response.js";
const Task = db.task

const _createTask = async (req, res) => {
    try {
        const { userId, title } = req.body;
        const task = await Task.create({ userId, title });

        return msg.successMsg(res, 201, task, "Task created successfully...")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}


const _getAllTasks = async (req, res) => {
    try {
        const allTask = await Task.findAll();

        return msg.successMsg(res, 201, allTask, "All task returned successfully...")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}


export default { _createTask, _getAllTasks }