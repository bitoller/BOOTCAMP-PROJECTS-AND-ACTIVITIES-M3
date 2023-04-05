import styled from "styled-components";

export const StyledSigninMain = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  .logo-container {
    margin-top: 77px;
  }

  .signin-form-container {
    width: 369px;
    height: auto;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 42px 22px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .signin-form-container > h2 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-gray-0);
  }

  .signin-form-container > label {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-gray-0);
  }

  .signin-form-container > p {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-gray-1);
  }

  .signin-form-container > a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1023px) {
    .signin-form-container {
      width: 90%;
      height: auto;
    }

    .signin-form-container > h2 {
      font-size: 14px;
    }

    .signin-form-container > label {
      font-size: 9.77px;
    }

    .signin-form-container > input,
    button {
      height: 38.5px;
    }
  }
`;
