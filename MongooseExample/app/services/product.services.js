import msg from "../utils/response.js";
import productModel from "../models/product.model.js";
import userModel from "../models/user.model.js";

const _createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body)
        return msg.successMsg(res, 201, product, "Product added successfully!!");
    } catch (error) {
        console.log(error);
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

const _addProductToUser = async (req, res) => {
    try {
        const { userid, product } = req.body;
        console.log({ userid, product })
        const updatedUser = await userModel.findByIdAndUpdate(userid, { product });
        if (!updatedUser) return msg.errorMsg(res, 404, "No user found with this ID!");

        return msg.successMsg(res, 200, {}, "Product added successfully to User");
    } catch (error) {
        console.log(error);
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

const _getAllProduct = async (req, res) => {
    try {
        const allProduct = await productModel.find();
        return msg.successMsg(res, 200, allProduct, "Products return successfully!")
    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

const _getProductById = async (req, res) => {
    try {

    } catch (error) {
        return msg.errorMsg(res, 500, error.message || "Something went wrong!")
    }
}

export default { _createProduct, _getAllProduct, _getProductById, _addProductToUser }