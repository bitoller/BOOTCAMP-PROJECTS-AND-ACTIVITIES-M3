import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 2% 8%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.125rem;

  .petListContainer {
    width: 100%;
    min-height: 25rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    background-color: var(--grey-0);
    border: 1px solid var(--grey-2);
    border-radius: var(--radius-30);
    padding: 1.25rem 0;
    overflow: hidden;

    .petListHeader {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 1.25rem;
      padding-left: 1.25rem;

      .petListFilters {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.625rem;
      }
    }
  }

  @media (min-width: 768.1px) {
    margin-bottom: 1.125rem;

    .petListContainer {
      min-height: 33.75rem;
      align-items: center;
      gap: 1.5rem;
      padding: 2.25rem 2.75rem;

      .petListHeader {
        padding-right: 0;
        padding-left: 0;
      }

      @media (max-width: 880px) {
        padding: 1.75rem 2.125rem;
      }

      .petListFilters {
        gap: 1rem;
      }
    }
  }
`;
