export type BlogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string; author: string; }) => void;
  initialTitle?: string;
  initialContent?: string;
  initialAuthor?: string;
  mode?: "create" | "edit";
};