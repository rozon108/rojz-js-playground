const mongoose = require("mongoose");

const mongoDB_API = process.env.MONGODB_API_KEY;
const mongoDB_WeeklyBlog_API = process.env.MONGODB_WEEKLY_BLOG_API_KEY;
const mongoDB_TODOLIST_API = process.env.MONGODB_TODOLIST_API_KEY;

// const weeklyBlogDB = mongoose.createConnection(mongoDB_WeeklyBlog_API);
// const toDoDB = mongoose.createConnection(mongoDB_TODOLIST_API);

const weeklyBlogDB = mongoose.createConnection(mongoDB_API).useDb("WeeklyBlog");
const toDoDB = mongoose.createConnection(mongoDB_API).useDb("ToDoList");



module.exports={
    weeklyBlogDB :weeklyBlogDB,
    toDoListDB: toDoDB

};
