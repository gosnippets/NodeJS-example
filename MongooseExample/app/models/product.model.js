import { Schema, model } from "mongoose";

const productSchma = new Schema({
    name: String
});

export default model("Product", productSchma);

