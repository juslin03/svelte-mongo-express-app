let mongoose = require("mongoose");
const Blog = require("../models/Blog");

exports.allBlogPost = async (req, res) => {
  try {
    let posts = await Blog.find();
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.oneBlogPost = async (req, res) => {
    try{
        const id = req.params.blogId;
        let post = await Blog.findById(id);
        res.status(200).json(post);
    }catch(err) {
        res.status(500).json(err);
    }
}

exports.addBlogPost = async (req, res) => {
    try {
        const post = new Blog({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            author: req.body.author
        });
        let newPost = await post.save();
        res.status(200).json({ data: newPost });
    }catch(err) {
        res.status(500).json({ error: err });
    }
}

exports.updateBlogPost = async (req, res) => {
    try{
        const id = req.params.blogId;
        let result = await Blog.findOneAndUpdate(id, req.body);
        res.status(200).json(result);
    }catch(e) {
        res.status(500).json(e);
    }
}


exports.deleteBlogPost = async (req, res) => {
    try {
        const id = req.params.blogId;
        let result = await Blog.deleteOne({ _id: id });
        res.status(200).json(result);
    }catch(e) {
        res.status(500).json(e);
    }
}