import styled from "styled-components";

export interface IStyledPetModal {
  url?: string;
}

export const StyledPetModal = styled.div<IStyledPetModal>`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop);
  display: flex;
  justify-content: center;
  align-items: center;

  .petModal {
    position: relative;
    width: 90vw;
    border-radius: var(--radius-30);

    .closeModal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.875rem;
      height: 1.875rem;
      background-color: var(--white);
      border-radius: 50%;
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      z-index: 999;

      img {
        width: 0.75rem;
      }
    }

    .petImg {
      height: 50vh;
      width: 100%;
      border-radius: var(--radius-30) var(--radius-30) 0 0;
      background-image: url(${({ url }) => url});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .petDescriptionContainer {
      width: 100%;
      border-radius: 0 0 var(--radius-30) var(--radius-30);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      color: var(--white);

      .petInfo {
        display: flex;
        flex-direction: column;
        text-transform: capitalize;

        .petInfoOne,
        .petInfoTwo {
          display: flex;
          justify-content: space-between;
        }

        .petInfoOne {
          font-weight: 600;
          font-size: 1.375rem;
        }

        .petInfoTwo {
          font-size: 1rem;
        }
      }

      .petDescription {
        height: 4.5rem;
        overflow-y: scroll;
      }

      .petDescription::-webkit-scrollbar {
        background: transparent;
        width: 0.5rem;
        margin-left: 0.3125rem;
      }

      .petDescription::-webkit-scrollbar-thumb {
        border-radius: var(--radius-20);
        background-color: var(--grey-0);
        height: 1.5625rem;
      }

      .petDescription::-webkit-scrollbar-track {
        margin-right: 1.5rem;
        margin-left: 1.5rem;
      }

      .petAdopt {
        margin-top: 0.625rem;
        background-color: inherit;
        color: inherit;
        font-weight: bold;
        font-size: 1.125rem;

        :disabled {
          cursor: default;
        }

        :not(:disabled):hover {
          -webkit-animation: tracking-in-contract 0.8s
            cubic-bezier(0.215, 0.61, 0.355, 1) both;
          animation: tracking-in-contract 0.8s
            cubic-bezier(0.215, 0.61, 0.355, 1) both;
        }
      }
    }
  }

  @-webkit-keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }

  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }

  @media (min-width: 768.1px) {
    .petModal {
      width: 40%;
    }
  }
`;
