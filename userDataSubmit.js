const fs = require("fs");
const queryString=require('querystring')

function userDataSubmit(req,res){
        res.write('<H1>DATA SUBMITTED</H1>');      
}

module.exports=userDataSubmit;