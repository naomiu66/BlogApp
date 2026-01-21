import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogContainerCard from "../components/BlogContainerCard";
import "../styles/pages/BlogPage.css";
import { blogsApi } from "../api/blogsApi";
import { formatDateTime } from "../utils/DateTimeFormatter";
import type { BlogApiResponse } from "../types/api/BlogApiResponse";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogApiResponse[]>([]);

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

  return (
    <>
      <div>
        <h1>Open Blogs for everyone</h1>
      </div>
      <BlogContainerCard title="Blog Posts" variant="black">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            createdAt={formatDateTime(blog.createdAt) || ""}
            updatedAt={formatDateTime(blog.updatedAt) || ""}
          />
        ))}
        <BlogCard
          title="Title"
          content="Content"
          author="Author"
          createdAt="2023-01-01"
          updatedAt="2023-01-01"
        />
      </BlogContainerCard>
    </>
  );
};

export default BlogPage;
