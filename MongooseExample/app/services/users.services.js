import bcrypt from "bcrypt";
import msg from "../utils/response.js";
import User from "../models/user.model.js";

const _createUser = async (req, res) => {
    try {
        let user = req.body;

        const existingUser = await User.findOne({email:user.email});
        if(existingUser) return msg.errorMsg(res, 500, "Email already exist!");

        const hashPassword = bcrypt.hashSync(user.password, 10);
        user.password = hashPassword;

        const data = await User.create(user);
        data.password = undefined;
        data.__v = undefined;

        if (!data._id) {
            return msg.errorMsg(res, 500, error.message || "Error creating the record");
        }

        return msg.successMsg(res, 201, data, "User register successfully!!")
    } catch (error) {
        console.log(error);
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _loginUser = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getAllUsers = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getUserById = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getUserByEmail = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _updateUser = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _deleteUser = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

export default { _createUser, _loginUser, _getAllUsers, _getUserById, _getUserByEmail, _updateUser, _deleteUser }