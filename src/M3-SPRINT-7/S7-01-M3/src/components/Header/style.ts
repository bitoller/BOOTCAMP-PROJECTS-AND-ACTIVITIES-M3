import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.125rem;
  width: 100%;
  height: 9rem;
  top: 0;

  .headerNavbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.625rem;
    background-color: var(--grey-0);
    width: 100%;
    height: 50%;
    padding: 0 8%;
    box-shadow: 0px 4px 4px 0px #00000040;

    .pageTitle,
    .pageTitle > big {
      font-family: "Fredericka the Great", cursive;
      font-size: 2rem;

      big {
        color: var(--secondary);
      }
    }

    .desktopSearchContainer {
      display: none;
    }

    .dropdownMenuOptions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 0.1875rem;
      width: fit-content;
      height: 2.5rem;
      position: relative;

      .menuButtonOptions {
        display: none;
      }

      &:focus-within > .menuButtonOptions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 0.1875rem;
      }
    }
  }

  .mobileSearchContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    min-width: 16.25rem;
    height: 3rem;
    padding: 0 1.125rem;
    margin: 0 8%;
    background-color: var(--grey-0);
    border: 1px solid var(--grey-2);
    border-radius: var(--radius-20);

    :focus-within {
      border: 1px solid var(--grey-4);

      input::placeholder {
        color: var(--grey-6);
      }
    }

    input {
      background-color: inherit;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      ::placeholder {
        color: var(--grey-3);
        font-size: 0.75rem;
      }
    }

    button,
    img {
      background-color: inherit;
      width: 1.3125rem;
      height: auto;
    }
  }

  .search-icon-button {
    width: 1.5625rem;
    height: auto;
  }

  @media (min-width: 768.1px) {
    height: 6rem;

    .headerNavbar {
      height: 100%;

      .pageTitle,
      .pageTitle > big {
        font-size: 2.5rem;
      }

      .navbarButtons {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: fit-content;
        height: 100%;

        .desktopSearchContainer {
          display: flex;

          .inputSearchContainer {
            display: none;

            input {
              background-color: inherit;
              height: 100%;
              width: 100%;
              display: flex;
              align-items: center;

              ::placeholder {
                color: var(--grey-3);
              }
            }

            button {
              background-color: inherit;
            }
          }

          :focus-within,
          :hover {
            .inputSearchContainer {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 23rem;
              height: 4rem;
              padding: 1.375rem;
              background-color: var(--white);
              border: 1px solid var(--white);
              border-radius: var(--radius-20);

              :focus-within {
                border: 1px solid var(--grey-4);

                input::placeholder {
                  color: var(--grey-6);
                }
              }
            }

            #searchIcon {
              display: none;
            }
          }
        }
      }

      .dropdownMenuOptions {
        #menuButton {
          display: none;
        }

        flex-direction: row;
        justify-content: center;
        gap: 0;
        width: fit-content;
        height: fit-content;

        .menuButtonOptions,
        &:focus-within > .menuButtonOptions {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
        }
      }
    }

    .mobileSearchContainer {
      display: none;
    }
  }
`;
