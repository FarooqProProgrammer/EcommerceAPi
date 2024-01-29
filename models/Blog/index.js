const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        Author: {
            type: String,
            required: true,
        },
        BlogImage: {
            type: String,
            required: true,
        },
        BlogDesc: {
            type: String,
            required: true,
        },
        Tags: {
            type: Array,
            required: true,
        },
        Comment: {
            type: Array,
            required: true,
        },
        Category: {
            type: Array,
            required: true,
        }
    },
    { timestamps: true }
);


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;