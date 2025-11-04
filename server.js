const http= require('http');

http.createServer((req,res)=>{
    res.write("<h1>Yo yo yo, 1-4-8-3 to the 3 to the 6 to the 9! Representina the ABQ! What up, biatch?!</h1>")
    res.end("Hello");
}).listen(1100);

http.createServer((req,res)=>{
    res.write("<h1>this is second server</h1>")
    res.end("Hello");
}).listen(1200);