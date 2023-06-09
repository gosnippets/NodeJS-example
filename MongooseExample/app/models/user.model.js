import { Schema, model } from "mongoose";

const userSchma = new Schema({
    name: {
        firstname: String,
        lastname: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    task:[{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

export default model("User", userSchma);

