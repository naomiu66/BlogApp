import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogContainerCard from "../components/BlogContainerCard";
import "../styles/pages/BlogPage.css";
import { blogsApi } from "../api/blogsApi";
import { formatDateTime } from "../utils/DateTimeFormatter";
import type { BlogApiResponse } from "../types/api/BlogApiResponse";
import GitHubButton from "../components/GitHubButton";
import { BlogModal } from "../components/BlogModal";
import type { CreateOrUpdateBlog } from "../types/api/CreateOrUpdateBlogRequest";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogApiResponse[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [mode, setMode] = useState<"main" | "create" | "edit">("main");
  const [selectedBlog, setSelectedBlog] = useState<BlogApiResponse | null>(
    null,
  );

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogsApi.getAllBlogs();
        setBlogs(response);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  const onGitHubButtonClick = () => {
    window.open("https://github.com/naomiu66/BlogApp");
  };

  const handleCreate = () => {
    setSelectedBlog(null);
    setIsModalVisible(true);
    setMode("create");
  };

  const handleEdit = (blog: BlogApiResponse) => {
    setSelectedBlog(blog);
    setIsModalVisible(true);
    setMode("edit");
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async (blogId: string) => {
    try {
      const deletedBlog = await blogsApi.deleteBlog(blogId);
      if(deletedBlog){
        setBlogs((prev) =>
      prev.filter((blog) => blog._id !== blogId)
    );
      }

    }
    catch (err) {
      console.error("Failed to delete blog", err)
      return;
    }
  };

  const createOrUpdateBlog = async (data: CreateOrUpdateBlog) => {
    try {
      if (mode === "create") {
        const newBlog = await blogsApi.createBlog(data);
        if (!newBlog) return;
        setBlogs((prev) => [newBlog, ...prev]);
      } else if (mode === "edit" && selectedBlog) {
        const updatedBlog = await blogsApi.updateBlog(selectedBlog?._id, data);
        if (!updatedBlog) return;
        setBlogs((prev) =>
          prev.map((b) => (b._id === updatedBlog._id ? updatedBlog : b)),
        );
      }

      setIsModalVisible(false);
      setSelectedBlog(null);
    } catch (err) {
      console.error("Error creating or updating blog", err);
      return;
    }
  };

  return (
    <>
      <div className="header-container">
        <h1>Open Blogs for everyone</h1>
        <GitHubButton onClick={onGitHubButtonClick} />
      </div>

      <hr className="divider" />

      <BlogContainerCard
        title="Blog Posts"
        variant="black"
        actionLabel="Create"
        onActionClick={handleCreate}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            createdAt={formatDateTime(blog.createdAt) || ""}
            updatedAt={formatDateTime(blog.updatedAt) || ""}
            onEdit={() => handleEdit(blog)}
            onDelete={() => handleDelete(blog._id)}
          />
        ))}
      </BlogContainerCard>

      <BlogModal
        key={selectedBlog?._id ?? "create"}
        isOpen={isModalVisible}
        onClose={onModalClose}
        onSubmit={createOrUpdateBlog}
        initialTitle={selectedBlog?.title || ""}
        initialContent={selectedBlog?.content || ""}
        initialAuthor={selectedBlog?.author || ""}
        mode={mode as "create" | "edit"}
      />
    </>
  );
};

export default BlogPage;
