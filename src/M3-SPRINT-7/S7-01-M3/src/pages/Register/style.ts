import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  min-height: calc(100vh-1.25rem-1.25rem);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
  padding: 1.25rem 0;

  .registerSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.875rem;

    .pageTitle,
    .pageTitle > big {
      font-family: "Fredericka the Great", cursive;
      font-size: 2.5rem;

      big {
        color: var(--secondary);
      }
    }

    .desktopImg {
      display: none;
    }

    .loginPhrase {
      font-family: "Bebas Neue", cursive;
      width: 90%;
      font-size: 1.5rem;
      text-align: center;
    }
  }

  @media (min-width: 768.1px) {
    min-height: 100vh;
    flex-direction: row;
    justify-content: center;
    gap: 6.25rem;
    padding: 0 1.25rem;

    .registerSection {
      max-width: 36.25rem;
      gap: 0;

      .pageTitle,
      .pageTitle > big {
        font-size: 3rem;
      }

      .desktopImg {
        max-width: 34.375rem;
        display: block;
      }

      .mobileImg {
        display: none;
      }

      .loginPhrase {
        width: 100%;
        font-size: 2rem;
      }
    }
  }
`;
