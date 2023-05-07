import styled from "styled-components";

export const StyledTextareaContainer = styled.div`
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

  .regularInput {
    width: calc(100% - 1.75rem);
    width: 100%;
    height: 4.75rem;
    font-family: inherit;
    background-color: var(--white);
    border: 1px solid var(--white);
    border-radius: var(--radius-20);
    color: var(--grey-6);
    padding: 0.875rem;
    overflow-y: auto;
    scroll-behavior: smooth;
    resize: none;
    outline: none;

    ::placeholder {
      color: var(--grey-3);
    }

    :focus-within {
      border: 1px solid var(--grey-4);

      ::placeholder {
        color: var(--grey-6);
      }
    }

    ::-webkit-scrollbar {
      display: none;
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

    .regularInput {
      font-size: 1rem;
      padding: 1.125rem;
      height: 6.875rem;

      ::-webkit-scrollbar {
        display: block;
        background: transparent;
        width: 0.25rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--grey-2);
        border-radius: 0.125rem;
      }

      ::-webkit-scrollbar-track {
        margin: 1.125rem 0;
      }
    }
  }
`;
