import * as dotenv from "dotenv";
import express, { json } from "express";
import chalk from "chalk";
import connectDB from "./app/models/connection.js";
import routes from "./app/routes/index.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

connectDB();

// Middleware
app.use(json())
app.use((req, res, next) => {
    console.log(chalk.green(req.method), chalk.blue(req.url))
    next();
});

app.use("/api/v1/", routes);

// Error handling middleware
app.use((error, req, res, next) => {
    console.log("Error", error);
    res.status(500).json({ status: "Internal Server Error", error: error })
})

app.listen(PORT, () => {
    console.log(chalk.blue("Server is running on PORT:") + chalk.red(PORT))
})

export default app
