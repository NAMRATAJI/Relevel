//import http liabrary
const http = require("http");
http.createServer ((req, res) =>{
    res.end("welcome to node js server");
}).listen(4000);