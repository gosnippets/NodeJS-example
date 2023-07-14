import { Schema, model } from "mongoose";

const productSchma = new Schema({
    name: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

export default model("Product", productSchma);

