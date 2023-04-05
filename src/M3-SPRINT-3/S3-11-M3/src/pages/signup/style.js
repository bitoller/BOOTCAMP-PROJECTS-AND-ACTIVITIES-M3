import styled from "styled-components";

export const StyledSignupMain = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  .logo-button-container {
    margin-top: 48px;
    width: 370px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-button-container > a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 67px;
    height: 40px;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    color: var(--color-gray-0);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  .logo-button-container > button:hover {
    background-color: var(--color-gray-2);
  }

  .signup-form-container {
    width: 370px;
    height: auto;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 42px 22px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .signup-form-container > h2 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .signup-form-container > p {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: var(--color-gray-1);
    margin-bottom: 10px;
  }

  .signup-form-container > label {
    font-size: 12px;
    font-weight: 400;
  }

  @media (max-width: 1023px) {
    .logo-button-container {
      width: 90%;
    }

    .logo-button-container > button {
      width: 79.54px;
      height: 31.95px;
      font-size: 9.59px;
    }

    .signup-form-container {
      width: 90%;
      height: auto;
      margin-bottom: 10px;
    }

    .signup-form-container > h2 {
      font-size: 14.39px;
    }

    .signup-form-container > p {
      font-size: 9.59px;
    }

    .signup-form-container > label {
      font-size: 9.74px;
    }

    .signup-form-container > input,
    select,
    button {
      height: 38.38px;
    }
  }
`;
