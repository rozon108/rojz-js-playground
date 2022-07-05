const router = require("express").Router();
const Blog = require("../model/blog");

router
  .get("/WeeklyBlog", (req, res) => {
    Blog.find((err, data) => {
      if (!err) {
        res.render("WeeklyBlog/blogs.ejs", { blogData: data });
      } else {
        console.log("Failed to retrieve the Course List: " + err);
      }
    });
  })
  .post("/NewBlog", (req, res) => {
    res.send("POST Method from NewBlog");
  });

router
  .get("/NewBlog", (req, res) => {
    res.render("createNewBlog");
  })
  .post("/NewBlog", (req, res) => {
    res.send("POST Method from NewBlog");
  });


  module.exports= router;