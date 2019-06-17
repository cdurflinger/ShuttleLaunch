const HTTP = require("http");
const FS = require("fs");
let port = process.env.PORT;
if(port === null || port == "" || port === undefined){
    port = 5000;
}
const SERVER_URL = "localhost";

const APP = HTTP.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    FS.readFile("./views/index.html", (err, text) => {
        if(err) {
            res.writeHead(404);
            res.write("File not found");
        } else {
            res.end(text);
        }
        res.end();
    });
});


console.log("Listening at " + SERVER_URL + ": " + port);
APP.listen(port, SERVER_URL);
