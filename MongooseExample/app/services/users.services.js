import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import msg from "../utils/response.js";
import User from "../models/user.model.js";
import Profile from "../models/profile.model.js";

const _createUser = async (req, res) => {
    try {
        let user = req.body;

        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) return msg.errorMsg(res, 500, "Email already exist!");

        const hashPassword = bcrypt.hashSync(user.password, 10);
        user.password = hashPassword;

        const profile = await Profile.create({ bio: '' });
        user.profile = profile._id;

        const data = await User.create(user);
        data.password = undefined;
        data.__v = undefined;

        if (!data._id) {
            return msg.errorMsg(res, 500, "Error creating the record");
        }

        return msg.successMsg(res, 201, data, "User register successfully!!")
    } catch (error) {
        console.log(error);
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).populate('profile', '-__v');

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return msg.errorMsg(res, 401, "Invalid Email or Password");
        }
        // Generate JWT token and send it back to client as response
        const accessToken = jwt.sign({ userId: user._id, email: user.email }, process.env.ACCESS_KEY);
        console.log(accessToken);

        const userObject = user.toObject();
        delete userObject["password"];
        delete userObject["__v"];
        userObject['token'] = accessToken;

        return msg.successMsg(res, 200, userObject, "Logged in successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find().populate('profile', '-__v').populate('task', '-__v').select("-password -__v");
        return msg.successMsg(res, 200, allUsers, "Users returned successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await User.findById(id).populate('profile', '-__v').populate('task', '-__v').select("-password -__v");;
        return msg.successMsg(res, 200, data, "User returned successfully!!")

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const data = await User.findOne({ email }).populate('profile', '-__v').populate('task', '-__v').select("-password -__v");;
        return msg.successMsg(res, 200, data, "User returned successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { bio, ...user } = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true }).populate('profile', '-__v').select("-password -__v");
        if (!updatedUser) return msg.errorMsg(res, 404, "No user found with that ID!");

        const profile = await Profile.findByIdAndUpdate(updatedUser.profile, { bio }, { new: true }).select("-__v");
        updatedUser.profile = profile;

        return msg.successMsg(res, 200, updatedUser, "User updated successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id).populate('profile', '-__v').select("-password -__v");
        if (!deletedUser) return msg.errorMsg(res, 404, "No user found with that ID!");

        return msg.successMsg(res, 200, deletedUser, "User deleted successfully!!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

export default { _createUser, _loginUser, _getAllUsers, _getUserById, _getUserByEmail, _updateUser, _deleteUser }
