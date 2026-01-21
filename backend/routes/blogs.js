const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogs')


router
    .post("", blogsController.createBlog)
    .get("", blogsController.getAllBlogs)
    .get("/:id", blogsController.getBlogById)
    .put("/:id", blogsController.updateBlog)
    .delete("/:id", blogsController.deleteBlog)

module.exports = router;
