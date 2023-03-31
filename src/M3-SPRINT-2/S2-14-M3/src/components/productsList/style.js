import styled from "styled-components";

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .search-result-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-result-container > button {
    width: 8.563rem;
    font-weight: 500;
  }

  .search-result-container > p {
    font-size: 1.625rem;
    font-weight: 700;
    color: var(--color-gray-1);
  }

  .search-result-container > p > span {
    font-size: 1.625rem;
    font-weight: 700;
    color: var(--color-gray-2);
    text-transform: capitalize;
  }

  @media (max-width: 1023px) {
    .search-result-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.625rem;
    }
  }
`;

export const StyledProductsList = styled.ul`
  display: flex;
  gap: 1.25rem;
  width: 58.75rem;
  flex-wrap: wrap;
  align-content: flex-start;

  @media (max-width: 1023px) {
    width: 100%;
    flex-wrap: nowrap;
    overflow-y: auto;
    padding-bottom: 0.313rem;
  }
`;
