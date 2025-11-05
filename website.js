const http = require('http');
const fs = require("fs");

http.createServer((req, res)=>{
    fs.readFile("html/index.html",'utf-8',(err, data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"})
            res.end("internal server error");
            return false
        }
        res.write(data);
        res.end();

    })


}).listen(3200);