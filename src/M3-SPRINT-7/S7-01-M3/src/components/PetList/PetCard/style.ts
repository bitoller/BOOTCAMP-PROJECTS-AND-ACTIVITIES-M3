import styled from "styled-components";

export const StyledPetCard = styled.div`
  height: 21.25rem;
  width: 14.375rem;
  border-radius: var(--radius-30);
  overflow: hidden;
  cursor: pointer;

  .pet-img-container {
    height: 80%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .adopted-icon {
    width: 6.25rem;
    height: auto;
    position: absolute;
    top: 0.3125rem;
    right: 0.3125rem;
    transform: rotate(25deg);
  }

  .pet-description-container {
    height: 20%;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
  }

  .pet-description {
    font-weight: 600;
    font-size: 1.125rem;
    color: var(--white);
    text-transform: capitalize;
  }

  .grey-scale {
    background-color: #fff;
    background-blend-mode: luminosity;
    cursor: default;
  }

  .grey-scale-description {
    background-color: grey;
    cursor: default;
  }

  @media (min-width: 880px) {
    height: 21.875rem;
    width: 17.5rem;
  }
`;
