const http = require("http");
const fs = require("fs");
const queryString=require('querystring')

http.createServer((req, res) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      if (req.url == "/") {
        res.write(data);
      } else if (req.url == "/submit") {
        let dataBody = [];
        let submit=[];
        req.on('data',(chunk) => {
            dataBody.push(chunk);
        })
        req.on('end', ()=>{
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = queryString.parse(rawData);
            let dataString= "User Name is "+ readableData.full_name +"\nEmail is "+ readableData.email +"\nPassword : "+ readableData.password + "\nRole is "+ readableData.role + "\n Bio: \n"+ readableData.bio;
            console.log(dataString);
           fs.writeFileSync("text/"+readableData.full_name+".txt",dataString);
        })
        res.write("<h1>Data Submitted and new file created in text folder</h1>");
      }
      res.end();
    });
  }).listen(3200);

// http.createServer((req, res)=>{
//     res.writeHead(200,{"Content-Type" : "text/html" })
//     console.log(req.url);
//     if(req.url=='/'){
//         res.write(`
//            <form action='/submit' method="post">
//            <input type="text" placeholder = "enter name" name="name">
//            <input type="text" placeholder = "enter email" name="email">
//            <button>Submit</button>
//            </form>
//             `);
//     }
//     else if(req.url=='/submit'){
//         res.write('<h1>Data Submitted</h1>')
//     }
//     res.end()
// }).listen(3200)
