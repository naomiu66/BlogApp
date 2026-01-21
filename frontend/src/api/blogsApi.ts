import type { BlogApiResponse } from "../types/api/BlogApiResponse";
import type { CreateOrUpdateBlog } from "../types/api/CreateOrUpdateBlogRequest";
import { API_BASE_URL, apiCall } from "./http";

export const blogsApi = {
    async createBlog(blogData: CreateOrUpdateBlog) {
        return await apiCall(`${API_BASE_URL}/blogs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blogData)
        })
    },

    async getAllBlogs() : Promise<BlogApiResponse[]> {
        return await apiCall(`${API_BASE_URL}/blogs`);
    },

    async getBlogById(blogId: string) : Promise<BlogApiResponse | null> {
        return await apiCall(`${API_BASE_URL}/blogs/${blogId}`);
    },

    async updateBlog(blogId: string, blogData: CreateOrUpdateBlog) {
        return await apiCall(`${API_BASE_URL}/blogs/${blogId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blogData)
        });
    },

    async deleteBlog(blogId: string) {
        return await apiCall(`${API_BASE_URL}/blogs/${blogId}`, {
            method: "DELETE"
        });
    },
}