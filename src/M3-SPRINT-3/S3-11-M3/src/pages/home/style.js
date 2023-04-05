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
    margin: 0 240px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar > button {
    width: 55.49px;
    height: 32px;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    color: var(--color-gray-0);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  header {
    width: 100vw;
    height: 118px;
    border-bottom: 1px solid var(--color-gray-3);
  }

  .header {
    height: 100%;
    margin: 0 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header > h2 {
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
  }

  .header > p {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-gray-1);
  }

  main {
    width: 100vw;
    height: auto;
    margin: 37px 240px;
    display: flex;
    flex-direction: column;
    gap: 23px;
  }

  main p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 700;
  }

  main p:nth-of-type(2) {
    font-size: 16px;
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
      gap: 20px;
      padding-left: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    main {
      margin: 37px 0;
      padding-left: 10px;
    }
  }
`;
