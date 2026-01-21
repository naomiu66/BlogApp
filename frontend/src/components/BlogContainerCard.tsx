import styled from "styled-components";
import type { BlogContainer } from "../types/components/BlogContainerCardProps";

const BlogContainerCard = ({
  title,
  children,
  variant = "black",
  onActionClick,
}: BlogContainer) => {
  return (
    <StyledWrapper variant={variant}>
      <div className="container-card">
        <div className="header-section">
          <h2 className="section-title">{title}</h2>
          <button onClick={onActionClick} className="header-button">
            Create new blog
          </button>
        </div>
        <div className="cards-container">{children}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ variant: "black" | "pink" }>`
  margin: 60px 0;

  .container-card {
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px;

    background: ${({ variant }) =>
      variant === "pink" ? "#c71175" : "#fefae8"};
    background-image: radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px);
    background-size: 14px 14px;
    border: 6px solid #000;
  }

  .header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 16px;
  }

  .section-title {
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    border-bottom: 3px solid #212121;
    color: ${({ variant }) => (variant === "pink" ? "#000" : "#212121")};
  }

  .header-button {
    padding: 8px 14px;
    font-weight: 800;
    text-transform: uppercase;
    border: 4px solid #000;
    background: ${({ variant }) =>
      variant === "pink" ? "#ffd900" : "#ffd900"};
    cursor: pointer;

    box-shadow: 4px 4px 0 #000;
    transition:
      transform 0.1s ease,
      box-shadow 0.1s ease,
      background-color 0.15s ease;

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 7px 7px 0 #000;
      background-color: #d92b2b;
      color: #fff;
    }

    &:active {
      transform: translate(0);
      box-shadow: none;
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    justify-items: center;
  }
`;

export default BlogContainerCard;
