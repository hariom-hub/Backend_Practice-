
const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");



app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname,"/public"));

const port = 9090;
app.listen(port, () => {

    console.log("Instagram server has started");
});

app.get("/ig/:username", (req, res) => {

    const followers = ["shreesha", "gaurisha", "shubhi", "amratansh", "harshu", "ayush"];
    let { username } = req.params;
    res.render("insta.ejs", { username },{followers});
});