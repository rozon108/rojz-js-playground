const router = require("express").Router();
const Blog = require("../model/blog");

router
  .route("/")
  .get((req, res) => {
    Blog.find((err, data) => {
      if (!err) {
        res.render("index", { blogData: data });
      } else {
        console.log("Failed to retrieve the Course List: " + err);
      }
    });
  })
  .post((req, res) => {
    res.send("POST Method THIS??");
  });







module.exports= router;