import mongoose from "mongoose";
import chalk from "chalk";
import * as dotenv from "dotenv";
dotenv.config();

const dbURI = process.env.DBURI || 'mongodb://127.0.0.1:27017/nodejs';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(chalk.green("MongoDB connected..."));
    } catch (error) {
        console.log(chalk.red(`Error connecting to MongoDB ${error}`));
        process.exit(1);
    }
}

export default connectDB;