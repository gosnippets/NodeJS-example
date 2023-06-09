import * as dotenv from "dotenv";
import express, { json } from "express";
import { createPool } from "mysql2";
import chalk from "chalk";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(json())
app.use((req, res, next) => {
    console.log(chalk.green(req.method), chalk.blue(req.url))
    next();
});

const pool = createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

pool.getConnection((error, connection) => {
    if (error) {
        console.log(chalk.red("Error connecting to the Database"));
        return;
    }
    console.log(chalk.green("Connected to Database..."))
    connection.release();
});

app.get("/api/v1/students", (req, res, next) => {
    pool.query("SELECT * from students", (error, results) => {
        if (error) { next(error); return; }
        res.status(200).json({ status: "Students returned successfully", students: results })
    })
})

// Error handling middleware
app.use((error, req, res, next) => {
    console.log("Error", error);
    res.status(500).json({ status: "Internal Server Error", error: error })
})

app.listen(PORT, () => {
    console.log(chalk.blue("Server is running on PORT:") + chalk.red(PORT))
})

export default app