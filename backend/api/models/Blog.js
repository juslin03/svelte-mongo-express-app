let mongoose = require('mongoose');

let BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    created_At: {
        type: Date,
        default: Date.now()
    }
});

var Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;