import styled from "styled-components";

export const StyledAdoptedModal = styled.div`
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

  .adoptedModal {
    margin: 0 auto;
    width: 90%;
    min-width: 18.75rem;
    max-width: 37.5rem;
    height: auto;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-0);
    border: solid 1px var(--grey-2);
    border-radius: var(--radius-30);

    img {
      object-fit: cover;
      object-position: center;
      height: auto;
      width: 100%;
    }

    p {
      font-family: "Fredericka the Great", cursive;
      color: var(--secondary);
      font-size: 2.5rem;
      text-align: center;
    }
  }
`;
