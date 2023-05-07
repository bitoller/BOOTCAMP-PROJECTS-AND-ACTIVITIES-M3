import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  width: 17.5rem;
  height: 4.125rem;
  border-radius: var(--radius-20);
  color: var(--white);
  font-weight: 600;
  font-size: 1.375rem;

  :hover {
    background-color: var(--secondary);
  }

  :disabled {
    background-color: var(--disabled);
  }

  @media (min-width: 768.1px) {
    width: 23.125rem;
    height: 5rem;
    font-size: 1.75rem;
  }
`;
