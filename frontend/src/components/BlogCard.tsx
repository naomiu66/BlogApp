import "../styles/components/BlogCard.css";
import type { BlogCardProps } from "../types/components/BlogCardProps";

const BlogCard = ({
  title,
  content,
  author,
  createdAt,
  updatedAt,

  onEdit,
  onDelete,
}: BlogCardProps) => {
  return (
    <>
      <div className="card-container">
        <div
          className="comic-card"
          role="article"
          aria-labelledby="card-username"
        >
          <div className="card-header">
            <div className="card-avatar"></div>
            <div className="card-user-info">
              <p className="card-username" id="card-username">
                {title}
              </p>
              <p className="card-handle">{author}</p>
            </div>
            <div className="buttons-container">
              <button onClick={onEdit} className="action-button">
                Edit
              </button>
              <button onClick={onDelete} className="action-button">
                Delete
              </button>
            </div>
          </div>

          <div className="card-content">
            <div className="card-image-container">
              <p className="card-text">{content}</p>
            </div>
            <p className="card-caption">
              Created At: {createdAt}
              <br />
              {updatedAt && <>Updated At: {updatedAt}</>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
