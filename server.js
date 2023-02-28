

const fs = require("fs")

const {response}=require("express")

const http=require("http")

const message = fs.readFileSync("./welcome.txt")
console.log(message.toString())
http.createServer=((request,response)=>{
    response.end("<h1>Hello Node!!!!</h1>")
}).listen(3000)