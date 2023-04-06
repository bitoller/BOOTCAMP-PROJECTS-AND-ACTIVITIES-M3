import styled from "styled-components";

export const StyledSignupMain = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.188rem;

  .logo-button-container {
    margin-top: 3rem;
    width: 23.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-button-container > a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 4.188rem;
    height: 2.5rem;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    color: var(--color-gray-0);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
  }

  .logo-button-container > button:hover {
    background-color: var(--color-gray-2);
  }

  .signup-form-container {
    width: 23.125rem;
    height: auto;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 2.625rem 1.375rem;
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }

  .signup-form-container > h2 {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .signup-form-container > p {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-1);
    margin-bottom: 0.625rem;
  }

  .signup-form-container > label {
    font-size: 0.75rem;
    font-weight: 400;
  }

  @media (max-width: 1023px) {
    .logo-button-container {
      width: 90%;
    }

    .logo-button-container > button {
      width: 4.971rem;
      height: 1.997rem;
      font-size: 0.599rem;
    }

    .signup-form-container {
      width: 90%;
      height: auto;
      margin-bottom: 0.625rem;
    }

    .signup-form-container > h2 {
      font-size: 0.899rem;
    }

    .signup-form-container > p {
      font-size: 0.599rem;
    }

    .signup-form-container > label {
      font-size: 0.609rem;
    }

    .signup-form-container > input,
    select,
    button {
      height: 2.399rem;
    }
  }
`;
