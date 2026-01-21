const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 18,
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: String,
        default: "Anonymous",
        maxLength: 18,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: null
    },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;