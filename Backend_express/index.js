const express = require('express');

const app = express();

const port = 8080;

console.log(app);

app.listen(port, () => {

    console.log("app is listening to ", port);
});

//listens request

// app.use((req,res)=>{

//     console.log("request received");
//     res.send("hello backend");
// })

// app.get("/hariom", (req, res) => {

//     res.send({
//         name: "hariom",
//         age: 20,
//         education: "B.tech cse 2nd year",
//         course: "Web development"
//     });
// });

// app.get("/ritansh", (req, res) => {

//     res.send({

//         name: "ritansh",
//         age: 20,
//         education: "B.tech cse(AI/DS) 2nd year",
//         course: "AI and Ml"
//     });
// });


// app.get("/shubham", (req, res) => {

//     res.send({

//         name: "shubham",
//         age: 20,
//         education: "B.tech cse(AI/DS) 2nd year",
//         course: "Data Science"
//     });
// });


// app.get("*",(req,res)=>{

//     res.send("<h1>Error 404! Page not found</h1>");
// })

// app.get("/:username/:id",(req,res)=>{

//     let {username,id} = req.params;
//     res.send(`Welcome to the page of : ${username}`);
// });

app.get("/search",(req,res)=>{

    let {q} = req.query;

    res.send(`searching results for : ${q}`);
});