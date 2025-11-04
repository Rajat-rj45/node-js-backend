const http= require('http');

http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.write("<h2>Yo yo yo, 1-4-8-3 to the 3 to the 6 to the 9! Representina the ABQ! What up, biatch?!</h2>")
    res.end("Hello");
}).listen(3000);