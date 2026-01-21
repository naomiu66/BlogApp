const blogsService = require("../services/blogsService");

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content)
      res.status(400).json({ message: "Title and Content are required" });
    if (title.length > 18 || (author && author.length > 18)) {
      return res
        .status(400)
        .json({
          message: "Title and Author must be at most 18 characters long",
        });
    }
    const blog = await blogsService.createBlog(title, content, author);
    res.status(201).json(blog);
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ message: "Failed to create blog" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogsService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await blogsService.getBlogById(req.params.id);

    if (!blog) res.status(404).json({ message: "Blog not found" });
    else res.status(200).json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title && !content)
      res
        .status(400)
        .json({ message: "Title or Content are required for updating" });
    if (title.length > 18 || (author && author.length > 18)) {
      return res
        .status(400)
        .json({
          message: "Title and Author must be at most 18 characters long",
        });
    }
    const blog = await blogsService.updateBlog(
      req.params.id,
      title,
      content,
      author
    );

    if (!blog) res.status(404).json({ message: "Blog not found" });
    else res.status(200).json(blog);
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ message: "Failed to update blog" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await blogsService.deleteBlog(req.params.id);

    if (!blog) res.status(404).json({ message: "Blog not found" });
    else res.status(204).json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ message: "Failed to delete blog" });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
