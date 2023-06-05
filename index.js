const http = require("http");
const { add, sub, name } = require("./AddSubExample")
const PORT = 3000;

console.log("Hello World!")

console.log(add(10, 30));
console.log(sub(20, 10));
console.log(name);


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === "/") {
        console.log("Home Page")
        res.write("<h2>Home Page</h2>")
    }
    else if (req.url === "/about") {
        console.log("About Page")
        res.write("<h2>About Page</h2>")
    } else if (req.url === "/contact-us") {
        console.log("Contact Page")
        res.write("<h2>Contact Page</h2>")
    } else {
        console.log("Other pages")
        res.write("<h2>Page not Found</h2>")
    }
    res.end();
})

server.listen(PORT, () => {
    console.log("Server is running on Port:" + PORT)
})