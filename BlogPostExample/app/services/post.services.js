import * as dotenv from "dotenv";
import db from "../models/index.js";
import msg from "../utils/response.js"
dotenv.config();
const Post = db.post
const User = db.user
const Category = db.category

async function _createPost(req, res) {
    try {
        const { title, description, UserId, categories } = req.body;
        const postData = await Post.create({ title, description, UserId });

        for (var categoryId of categories) {
            const category = await Category.findByPk(categoryId);
            postData.addCategory(category);
        }

        return msg.successMsg(res, 201, postData, "Post created successfully...")
    } catch (error) {
        console.log("error", error);
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getAllPosts = async (req, res) => {
    try {
        const data = await Post.findAll({ include: [{ model: User, attributes: { exclude: ['password'] } }, { model: Category, attributes: ['title'] }] })
        return msg.successMsg(res, 200, data, "Post returned successfully...");
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

async function _getPostById(req, res) {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id, { include: [{ model: User, attributes: { exclude: ['password'] } }, { model: Category, attributes: ['title'] }] });

        return msg.successMsg(res, 200, post, "Post returned successfully...");
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

async function _updatePost(req, res) {

}

async function _deletePost(req, res) {

}

export default { _createPost, _getAllPosts, _getPostById, _updatePost, _deletePost }