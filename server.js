const express  = require("express");

const app = express();
const port = 5000;

app.get("/" , function(req , res){
    // console.log(request);
    res.send("<h1>Hello world!</h1>");
})

app.get("/contact", function(req , res){
    res.send("contact me at :- wudw@3626.com")
})

app.get("/about" , function(req , res){
    res.send("Name - Superman , city = gowtham ")
})

app.listen(port , function(){
    console.log("server started on port 5000");
})


