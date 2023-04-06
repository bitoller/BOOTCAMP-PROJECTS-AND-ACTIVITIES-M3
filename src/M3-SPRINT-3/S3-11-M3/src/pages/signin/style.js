import styled from "styled-components";

export const StyledSigninMain = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.188rem;

  .logo-container {
    margin-top: 4.813rem;
  }

  .signin-form-container {
    width: 23.063rem;
    height: auto;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 2.625rem 1.375rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .signin-form-container > h2 {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-gray-0);
  }

  .signin-form-container > label {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-0);
  }

  .signin-form-container > p {
    text-align: center;
    font-size: 0.75rem;
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
      font-size: 0.875rem;
    }

    .signin-form-container > label {
      font-size: 0.611rem;
    }

    .signin-form-container > input,
    button {
      height: 2.406rem;
    }
  }
`;
