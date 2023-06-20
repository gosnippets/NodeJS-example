import db from "../models/index.js";
import msg from "../utils/response.js"

const User = db.users

const _createUser = async (req, res) => {
    const user = req.body;
    try {
        const createdUser = await User.create(user);
        delete createdUser.dataValues.password;
        
        return msg.successMsg(res, 201, createdUser, "User created successfully...")
    } catch (error) {
        console.log(error)
        return msg.errorMsg(res, 500, "Something went wrong");
    }
}

const _getAllUsers = async (req, res) => {
    console.log("_getAllUsers")
}

const _getUserById = async (req, res) => {
    console.log("_getUserById")
}

const _updateUser = async (req, res) => {
    console.log("_updateUser")
}

const _deleteUser = async (req, res) => {
    console.log("_deleteUser")
}

export default { _createUser, _getAllUsers, _getUserById, _updateUser, _deleteUser }