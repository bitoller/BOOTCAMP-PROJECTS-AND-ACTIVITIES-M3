import styled from "styled-components";

export const StyledForm = styled.section`
  width: 90%;
  min-width: 18.75rem;
  max-width: 27.625rem;
  height: fit-content;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  background-color: var(--grey-0);
  border: solid 1px var(--grey-2);
  border-radius: var(--radius-30);

  .formHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.625rem;

    h2 {
      font-size: 1.75rem;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
  }

  .formFooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p,
    a {
      font-size: 0.875rem;
      color: inherit;
    }

    a:hover {
      text-decoration: underline;
      color: var(--secondary);
    }
  }
`;
