import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;

  .label {
    font-size: 0.875rem;
    padding-left: 0.625rem;
  }

  .inputError {
    color: var(--error);
    font-size: 0.75rem;
    padding-left: 0.625rem;
  }

  .regularInput,
  .passwordInput {
    width: 100%;
    height: 3.125rem;
    background-color: var(--white);
    border: 1px solid var(--white);
    border-radius: var(--radius-20);
    color: var(--grey-6);
    padding: 0.875rem;
    display: flex;
    align-items: center;

    ::placeholder,
    input::placeholder {
      color: var(--grey-3);
    }

    :focus-within {
      border: 1px solid var(--grey-4);

      ::placeholder,
      input::placeholder {
        color: var(--grey-6);
      }
    }

    input {
      background-color: inherit;
      color: var(--grey-6);
      height: 100%;
      width: 100%;
    }

    img:hover {
      filter: brightness(0.6);
      cursor: pointer;
    }
  }

  @media (min-width: 768.1px) {
    gap: 0.5rem;

    .label {
      font-size: 1rem;
      padding-left: 0.75rem;
    }

    .inputError {
      font-size: 0.875rem;
      padding-left: 0.75rem;
    }

    .regularInput,
    .passwordInput {
      height: 3.75rem;
      font-size: 1rem;
      padding: 1.125rem;
    }
  }
`;
