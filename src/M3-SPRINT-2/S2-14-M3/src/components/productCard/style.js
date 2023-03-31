import styled from "styled-components";

export const StyledProductCard = styled.li`
  width: 18.75rem;
  height: 21.625rem;
  background-color: #ffffff;
  border: 2px solid var(--color-gray-3);
  border-radius: 5px;
  cursor: pointer;

  :hover {
    border: 2px solid var(--color-gray-1);
    transform: scale(1.1);
    transition: 0.9s;
  }

  .img-big-container {
    width: 100%;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-gray-4);
    margin-bottom: 0.688rem;
  }

  .img-big-container > img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .info-container {
    padding: 0.938rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .info-container > h1 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .info-container p:nth-of-type(1) {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-2);
  }

  .info-container p:nth-of-type(2) {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary-1);
  }

  @media (max-width: 1023px) {
    min-width: 18.75rem;
    min-height: 21.625rem;

    :hover {
      border: 2px solid var(--color-gray-3);
      transform: none;
      transition: none;
    }
  }
`;
