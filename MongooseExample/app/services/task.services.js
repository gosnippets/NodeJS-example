import msg from "../utils/response.js";
import taskModel from "../models/task.model.js";
import userModel from "../models/user.model.js";

const _createTask = async (req, res) => {
    try {
        const task = await taskModel.create(req.body)
        return msg.successMsg(res, 201, task, "Task added successfully!!");
    } catch (error) {
        console.log(error);
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

const _addTaskToUser = async (req, res) => {
    try {
        const { userid, task } = req.body;
        console.log({ userid, task })
        const updatedUser = await userModel.findByIdAndUpdate(userid, { task });
        if (!updatedUser) return msg.errorMsg(res, 404, "No user found with this ID!");

        return msg.successMsg(res, 200, {}, "Task added successfully to User");
    } catch (error) {
        console.log(error);
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

const _getAllTask = async (req, res) => {
    try {
        const allTask = await taskModel.find();
        return msg.successMsg(res, 200, allTask, "Tasks return successfully!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

const _getTaskById = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

export default { _createTask, _getAllTask, _getTaskById, _addTaskToUser }