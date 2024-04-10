const express = require("express");
const port = 8080;

const app = express();

const path = require("path");

app.listen(port,()=>{

    console.log("server has started");
})

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/num",(req,res)=>{

    let RandomNum = Math.floor(Math.random()*10)+1;
    res.render("randNum.ejs",{RandomNum});
});