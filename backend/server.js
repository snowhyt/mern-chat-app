import express from "express";

const app = express();

app.get("/", (req, res) => {    
    res.send("Hello World");
});

app.listen(5000, () =>{
    console.log("Server started on http://localhost:3000");
});
