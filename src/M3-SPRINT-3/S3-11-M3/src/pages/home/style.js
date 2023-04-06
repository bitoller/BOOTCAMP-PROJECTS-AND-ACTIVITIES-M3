import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100vw;

  nav {
    width: 100vw;
    position: sticky;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid var(--color-gray-3);
    background-color: var(--color-gray-4);
  }

  .navbar {
    margin: 0 15rem;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar > button {
    width: 3.468rem;
    height: 2rem;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    color: var(--color-gray-0);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
  }

  header {
    width: 100vw;
    height: 7.375rem;
    border-bottom: 1px solid var(--color-gray-3);
  }

  .header {
    height: 100%;
    margin: 0 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  .header > p {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-gray-1);
  }

  main {
    width: 100vw;
    height: auto;
    margin: 2.313rem 15rem;
    display: flex;
    flex-direction: column;
    gap: 1.438rem;
  }

  main p:nth-of-type(1) {
    font-size: 1.125rem;
    font-weight: 700;
  }

  main p:nth-of-type(2) {
    font-size: 1rem;
    font-weight: 400;
    color: #ffffff;
  }

  @media (max-width: 1023px) {
    width: 100vw;

    nav {
      width: 100%;
    }

    .navbar {
      width: 100%;
      margin: 0;
      justify-content: space-around;
    }

    .header {
      margin: 0;
      gap: 1.25rem;
      padding-left: 0.625rem;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    main {
      margin: 2.313rem 0;
      padding-left: 0.625rem;
    }
  }
`;
