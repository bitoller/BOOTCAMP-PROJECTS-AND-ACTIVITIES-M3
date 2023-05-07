import styled from "styled-components";

export const StyledPetList = styled.ul`
  overflow-y: hidden;
  overflow-x: auto;
  height: auto;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;

  li {
    transition: transform 0.25s ease-in-out;
  }

  li:hover {
    border: 2px solid var(--color-gray-1);
    transform: translate3d(0, -0.3125rem, 0);
  }

  ::-webkit-scrollbar {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 0.875rem;
    min-width: 5rem;
    border-radius: var(--radius-20);
    background-color: var(--primary);
  }

  ::-webkit-scrollbar-track {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  @media (min-width: 768.1px) {
    height: 31.25rem;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding-right: 2.75rem;
    padding-bottom: 0;

    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;

    ::-webkit-scrollbar-track {
      margin-right: 0;
    }
  }

  @media (min-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2.25rem;
    grid-row-gap: 2.75rem;
  }

  @media (min-width: 1580px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
