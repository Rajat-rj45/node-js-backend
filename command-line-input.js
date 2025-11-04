const http=require('http')

const arg=process.argv;
const port=arg[2];
console.log(arg[2])
http.createServer((req,res)=>{
    
    res.write("testing input from cmd on port - ")
    res.end();

}).listen(arg[2]);

