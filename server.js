const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 3001;

app.use(express.json())

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
})

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
    console.log("Server is running on PORT:" + PORT)
})

