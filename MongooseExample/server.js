import * as dotenv from "dotenv";
import express, { json } from "express";
import chalk from "chalk";
import connectDB from "./app/models/connection.js";
import routes from "./app/routes/index.routes.js";
import { rateLimit } from "express-rate-limit";

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

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5 // Limit each IP to x requests per minute
});

app.use(limiter);

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
