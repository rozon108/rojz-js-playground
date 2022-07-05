const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoDB_API = require('../connections')



const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    userName:{
        type:String
    }
},{ timestamps: true});

const Blog = mongoDB_API.weeklyBlogDB.model('Blog', blogSchema);

module.exports = Blog;
