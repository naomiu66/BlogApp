import "../styles/components/BlogCard.css";
import type { BlogCardProps } from "../types/components/BlogCardProps";

const BlogCard = ({
  title,
  content,
  author,
  createdAt,
  updatedAt,
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
          </div>

          <div className="card-content">
            <div className="card-image-container">
              <p>{content}</p>
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
