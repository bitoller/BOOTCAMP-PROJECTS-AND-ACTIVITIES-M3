import styled from "styled-components";

export const StyledRegisterPetModal = styled.div`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .form-container-margin {
    margin: 0 auto;
  }

  .formContainer {
    width: 90%;
    min-width: 18.75rem;
    max-width: 27.625rem;
    height: 90%;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    background-color: var(--grey-0);
    border: solid 1px var(--grey-2);
    border-radius: var(--radius-30);
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh - 10%);

    ::-webkit-scrollbar {
      background: transparent;
      width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 0.25rem;
    }

    ::-webkit-scrollbar-track {
      margin: 2rem 0;
    }

    .regularInput {
      font-size: 0.8125rem;
    }
  }

  @media (min-width: 761.1px) {
    .formContainer {
      .regularInput {
        font-size: 1rem;
      }
    }
  }
`;
