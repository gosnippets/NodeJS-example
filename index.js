const http = require("http");
const express = require("express");
const app = express();
const PORT = 3001;

const students = [{
    id: 1,
    name: "John",
    email: "john@gmail.com",
    contact: 9898989898
},
{
    id: 2,
    name: "Ravi",
    email: "ravi@gmail.com",
    contact: 9898989898
},
{
    id: 3,
    name: "Surya",
    email: "surya@gmail.com",
    contact: 9898989898
}];

app.use(express.json())


app.get("/api/v1/students", (req, res) => {
    res.json({ status: "Students returned successfully", students: students })
})

app.get("/api/v1/students/:studentId", (req, res) => {
    console.log(req.params)
    const { studentId } = req.params;
    const student = students.find((student)=>student.id==studentId);
    res.json({status:"Student returned successfully", student:student})
})

// app.get("/", (req,res)=>{
//     console.log("Home Page...")
//     res.send("Home Page.")
// })

// app.get("/about", (req,res)=>{
//     console.log("About Page...")
//     res.send("About Page.")
// })

// app.get("/contact", (req,res)=>{
//     console.log("Contact Page...")
//     res.send("Contact Page.")
// })



app.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT)
})






// const { add, sub, name } = require("./AddSubExample")

// console.log("Hello World!")

// console.log(add(10, 30));
// console.log(sub(20, 10));
// console.log(name);


// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     if (req.url === "/") {
//         console.log("Home Page")
//         res.write("<h2>Home Page</h2>")
//     }
//     else if (req.url === "/about") {
//         console.log("About Page")
//         res.write("<h2>About Page</h2>")
//     } else if (req.url === "/contact-us") {
//         console.log("Contact Page")
//         res.write("<h2>Contact Page</h2>")
//     } else {
//         console.log("Other pages")
//         res.write("<h2>Page not Found</h2>")
//     }
//     res.end();
// })

// server.listen(PORT, () => {
//     console.log("Server is running on Port:" + PORT)
// })