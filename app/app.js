const http = require("http");
const fs = require("fs");
const port = 3000;
const serverUrl = "localhost";

const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./index.html", (err, text) => {
        if(err) {
            res.writeHead(404);
            res.write("File not found");
        } else {
            res.end(text);
        }
        res.end();
    });
});

console.log("Listening at " + serverUrl + ": " + port);
app.listen(port, serverUrl);