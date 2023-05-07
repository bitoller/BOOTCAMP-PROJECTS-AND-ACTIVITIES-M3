import styled from "styled-components";

export const StyledFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  width: 100%;
  height: 3.375rem;
  margin-top: 0.625rem;
  border-radius: var(--radius-20);
  color: var(--white);
  font-weight: 600;
  font-size: 1.375rem;

  .smallFormButton {
    font-size: 1rem;
  }

  :hover {
    background-color: var(--secondary);
  }

  :disabled {
    background-color: var(--primary);
    filter: brightness(0.85);
    cursor: default;
  }

  @media (min-width: 768.1px) {
    height: 4.125rem;
    font-size: 1.75rem;

    .smallFormButton {
      font-size: 1.125rem;
    }
  }
`;
