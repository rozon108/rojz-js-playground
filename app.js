const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;

require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Custome Middleware
const Blog = require("./model/blog");
const ToDoList = require("./model/toDoList");

//Connecting to MONODB ATLAS
const mongoDB_WeeklyBlog_API = process.env.MONGODB_WEEKLY_BLOG_API_KEY;
const mongoDB_TODOLIST_API = process.env.MONGODB_TODOLIST_API_KEY;

//Routes
app.use(require("./routes/blog"));
// app.use(require("./routes/home"))
app.use(require("./routes/home"));
app.use(require("./routes/toDoList"));

app.get("/ourApiKey", (req, res) => {
  const ourKey = process.env.THEAPP_API_KEY;
  res.send(
    `<h1>Using process.env to hide our API KEY. <br> Hidden API KEY: ${ourKey}</h1>`
  );
});

app.listen(5000 || port, () => {
  console.log("Running on 5000 \n");
});
