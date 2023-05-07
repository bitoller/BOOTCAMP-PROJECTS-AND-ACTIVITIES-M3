import styled from "styled-components";

export const StyledLoginModal = styled.div`
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
`;
