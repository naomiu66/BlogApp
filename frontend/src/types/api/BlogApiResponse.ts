export interface BlogApiResponse {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt?: string | null;
}