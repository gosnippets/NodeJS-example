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
    }
});

export default model("User", userSchma);

