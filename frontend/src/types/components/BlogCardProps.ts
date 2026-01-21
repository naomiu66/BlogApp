export type BlogCardProps = {
    title: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;

    onEdit: () => void;
    onDelete: () => void;
}