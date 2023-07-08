import * as dotenv from "dotenv";
import db from "../models/index.js";
import msg from "../utils/response.js"
dotenv.config();
const Tag = db.tag;
const Post = db.post;

async function _createTag(req, res) {
    try {
        const { title } = req.body;
        const data = await Tag.create({ title });
        return msg.successMsg(res, 201, data, "Tag created successfully...");
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

const _getAllTags = async (req, res) => {
    try {
        const data = await Tag.findAll({ include: Post })
        return msg.successMsg(res, 201, data, "Categories returned successfully...");
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

async function _getTagById(req, res) {
    try {
        const { id } = req.params;
        const tag = await Tag.findByPk(id, { include: Post })
        return msg.successMsg(res, 201, tag, "Tag returned successfully...");
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong");
    }
}

async function _updateTag(req, res) {

}

async function _deleteTag(req, res) {

}

export default { _createTag, _getAllTags, _getTagById, _updateTag, _deleteTag }