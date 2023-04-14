import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 23.063rem;
  height: auto;
  border-radius: 4px;
  background-color: var(--color-gray-3);

  .modal-top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background-color: var(--color-gray-2);
  }

  .modal-top-container > p {
    font-size: 0.875rem;
    font-weight: 700;
  }

  .modal-top-container > button {
    background: none;
    font-weight: 600;
    color: var(--color-gray-1);
    font-family: "Nunito", sans-serif;
    cursor: pointer;
  }

  .modal-form {
    padding: 1.5rem 1.375rem;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
  }

  .modal-content > label {
    font-size: 1.375rem;
    font-weight: 400;
  }

  .buttons-container {
    display: flex;
    gap: 1.375rem;
  }

  .buttons-container > button:nth-of-type(1) {
    width: 12.75rem;
  }

  .buttons-container > button:nth-of-type(2) {
    width: 6.125rem;
  }

  @media (max-width: 1023px) {
    width: 18.438rem;
  }
`;
