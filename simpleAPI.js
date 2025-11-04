const http=require('http');

const userData = [
    {
        name: "Suneel Kumar",
        age: 23,
        email:"suneel@gmail.com",
    },
    {
        name: "Rajat Kumar",
        age: 23,
        email:"rajat@gmail.com",
    },
    {
        name: "Happy suryavanshi",
        age: 23,
        email:"rajat@gmail.com",
    },
]

http.createServer((req,res)  =>{
res.setHeader("Content-Type","application/json")
res.write(JSON.stringify(userData))
res.end('');

}).listen(8080)