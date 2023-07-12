import bcrypt from "bcrypt";
import msg from "../utils/response.js";
import User from "../models/user.model.js";

const _createUser = async (req, res) => {
    try {
        let user = req.body;

        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) return msg.errorMsg(res, 500, "Email already exist!");

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
        const allUsers = await User.find().select("-password -__v");
        return msg.successMsg(res, 200, allUsers, "Users returned successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await User.findById(id).select("-password -__v");;
        return msg.successMsg(res, 200, data, "User returned successfully!!")

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const data = await User.findOne({ email }).select("-password -__v");;
        return msg.successMsg(res, 200, data, "User returned successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }).select("-password -__v");
        if (!updatedUser) return msg.errorMsg(res, 404, "No user found with that ID!");

        return msg.successMsg(res, 200, updatedUser, "User updated successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id).select("-password -__v");
        if (!deletedUser) return msg.errorMsg(res, 404, "No user found with that ID!");

        return msg.successMsg(res, 200, deletedUser, "User deleted successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

export default { _createUser, _loginUser, _getAllUsers, _getUserById, _getUserByEmail, _updateUser, _deleteUser }


// Student 
// name, email, contact 