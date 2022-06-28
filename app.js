require("dotenv").config();

const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    const ourKey = process.env.THEAPP_API_KEY;
    res.send(`<h1>Using process.env to hide our API KEY. <br> Hidden API KEY: ${ourKey}</h1>`)
});







app.listen(5000, ()=>{
    console.log("Running on 5000");
});
