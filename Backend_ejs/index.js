const express = require('express');
const app = express();
const path = require("path");

const port = 5050;

app.use(express.static("public"));

app.listen(port, () => {

    console.log("server has started..");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {

    res.send("you are in root page");
});

app.get("/hariom", (req, res) => {

    res.render("home.ejs");
});

app.get("/ritansh", (req, res) => {

    res.render("ritansh.ejs");
});


app.get("/shubham", (req, res) => {

    res.render("shubham.ejs");
});


app.get("/muskan", (req, res) => {

    res.render("muskan.ejs");
})

app.get("/ig/:username", (req, res) => {

    let {username} = req.params;


    let instaData = require("./views/data.json");
    console.log(instaData);
    const data = instaData[username];
    res.render("instagram.ejs",{data:data});
})
