import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  background-color: var(--color-gray-4);

  .header-container {
    display: flex;
    margin: 0 7.188rem;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .header-container > form {
    height: 3.75rem;
    width: 22.813rem;
  }

  .input-container {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    border: 2px solid var(--color-gray-3);
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .input-container > input {
    width: 55%;
    outline: none;
    font-weight: 400;
    color: var(--color-gray-2);
  }

  .input-container > input::placeholder {
    color: var(--color-gray-3);
  }

  .input-container > input:focus::placeholder {
    color: var(--color-gray-2);
  }

  .input-container:focus-within {
    border: 2px solid var(--color-gray-1);
  }

  .input-container > button {
    width: 6.688rem;
    font-weight: 500;
  }

  @media (max-width: 1023px) {
    max-width: 100vw;
    height: 8.688rem;

    .header-container {
      width: 100%;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      margin: 0;
    }

    .header-container > form {
      width: 90%;
    }
  }
`;
