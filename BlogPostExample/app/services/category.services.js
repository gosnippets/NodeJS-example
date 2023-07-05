import * as dotenv from "dotenv";
import db from "../models/index.js";
import msg from "../utils/response.js"
dotenv.config();
const Category = db.category

async function _createCategory(req, res) {
    try {
        const { title } = req.body;
        const data = await Category.create({ title });
        return msg.successMsg(res, 201, data, "Category created successfully...")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getAllCategorys = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

async function _getCategoryById(req, res) {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

async function _updateCategory(req, res) {

}

async function _deleteCategory(req, res) {

}

export default { _createCategory, _getAllCategorys, _getCategoryById, _updateCategory, _deleteCategory }