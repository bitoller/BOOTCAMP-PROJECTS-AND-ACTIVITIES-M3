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
    display: flex;
    flex-direction: column;
  }

  .tech-container {
    margin: 0.688rem 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .tech-container-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.313rem;
  }

  .tech-container-title > h3 {
    font-weight: 600;
  }

  .tech-container-title > button {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .tech-container-title > button:hover {
    background-color: var(--color-gray-2);
  }

  .techs-list {
    width: 100%;
    height: auto;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 1.438rem 1.375rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .techs-list > li {
    height: 3.063rem;
    background-color: var(--color-gray-4);
    border-radius: 4px;
  }

  .techs-list > li:hover {
    background-color: var(--color-gray-2);
    span:nth-of-type(2) {
      color: var(--color-gray-0);
    }
  }

  .techs-list > li > button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
  }

  .techs-list > li > button > span:nth-of-type(1) {
    font-size: 0.625rem;
    font-weight: 700;
    color: var(--color-gray-0);
    text-transform: capitalize;
  }

  .techs-list > li > button > span:nth-of-type(2) {
    font-size: 0.563rem;
    font-weight: 400;
    color: var(--color-gray-1);
  }

  @media (max-width: 1023px) {
    width: 100vw;

    nav {
      width: 100%;
    }

    .navbar {
      width: 100%;
      margin: 0;
      justify-content: space-between;
      padding-left: 0.625rem;
      padding-right: 0.625rem;
    }

    .header {
      margin: 0;
      gap: 1.25rem;
      padding-left: 0.625rem;
      padding-right: 0.625rem;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    main {
      margin: 0.938rem 0;
      padding-left: 0.625rem;
      padding-right: 0.625rem;
    }

    .tech-container {
      margin: 0.688rem 0rem;
    }

    .techs-list {
      padding: 1.375rem 0.531rem;
    }
  }
`;
