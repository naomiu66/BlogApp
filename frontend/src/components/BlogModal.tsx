import { motion, AnimatePresence } from "framer-motion";
import { useState, type FC } from "react";
import "../styles/components/Modal.css";
import "../styles/components/BlogModal.css";
import type { BlogModalProps } from "../types/components/ModalProps";

export const BlogModal: FC<BlogModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialTitle = "",
  initialContent = "",
  initialAuthor = "",
  mode = "create",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [author, setAuthor] = useState<string>(initialAuthor);

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      onSubmit({ title, content, author });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="blog-modal comic-card"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">
              {mode === "create" ? "Create Blog" : "Edit Blog"}
            </h2>

            <input
              className="modal-input"
              type="text"
              placeholder="Title"
              value={title}
              maxLength={20}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="modal-input"
              type="text"
              placeholder="Author"
              value={author}
              maxLength={20}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <textarea
              className="modal-textarea"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="card-actions">
              <button
                className="action-button"
                onClick={() => {
                  handleSubmit();
                  setTitle("");
                  setContent("");
                  setAuthor("");
                }}
              >
                {mode === "create" ? "Create" : "Update"}
              </button>
              <button
                className="action-button"
                onClick={() => {
                  setTitle(initialTitle);
                  setContent(initialContent);
                  onClose();
                }}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
