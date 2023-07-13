import { Schema, model } from "mongoose";

const profileSchma = new Schema({
    bio: String
});

export default model("Profile", profileSchma);

