import styled from "styled-components";

export const StyledCarousel = styled.div`
  .carousel-container {
    width: 100%;
    height: 5.75rem;
    border-radius: 1.25rem;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orange-container {
    background-color: #ffd0b3;
  }

  .green-container {
    background-color: #e2f5cb;
  }

  .blue-container {
    background-color: #c2ebff;
  }

  .carousel-paragraph {
    font-family: "Bebas Neue", cursive;
    font-size: 1.25rem;
    text-align: center;
  }

  .alice-carousel__dots {
    margin: 0.5rem 0.188rem 0.313rem;
  }

  @media (min-width: 768.1px) {
    .carousel-paragraph {
      font-size: 1.875rem;
    }
  }
`;
