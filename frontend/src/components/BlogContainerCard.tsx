import styled from "styled-components";
import type { BlogContainer } from "../types/components/BlogContainerCardProps";

const BlogContainerCard = ({
  title,
  children,
  variant = "black",
}: BlogContainer) => {
  return (
    <StyledWrapper variant={variant}>
      <div className="container-card">
        <h2 className="section-title">{title}</h2>
        <div className="cards-container">{children}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ variant: "black" | "pink" }>`
  margin: 60px 0;

  .container-card {
    padding: 25px;

    max-width: 1200px;
    margin: 0 auto;
    padding: 25px;

    background: ${({ variant }) =>
      variant === "pink" ? "#c71175" : "#fefae8"};
    background-image: radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px);
    background-size: 14px 14px;
    border: 6px solid #000;
  }

  .section-title {
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 15px;
    border-bottom: 3px solid #212121;
    color: ${({ variant }) => (variant === "pink" ? "#000" : "#212121")};
    text-align: left;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    justify-items: center;
  }
`;

export default BlogContainerCard;
