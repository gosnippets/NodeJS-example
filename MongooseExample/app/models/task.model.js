import { Schema, model } from "mongoose";

const taskSchma = new Schema({
    title: String
});

export default model("Task", taskSchma);

