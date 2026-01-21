const Blog = require('../models/blog');

const createBlog = async (title, content, author) => {
    const blog = new Blog ({
        title,
        content,
        author
    });
    return await blog.save();
}

const getAllBlogs = async () => {
    return await Blog.find();
}

const getBlogById = async (id) => {
    return await Blog.findById(id);
}

const updateBlog = async (id, title, content, author) => {
    return await Blog.findByIdAndUpdate(id, { title, content, author, updatedAt: Date.now() }, { new: true });
}

const deleteBlog = async (id) => {
    return await Blog.findByIdAndDelete(id);
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}