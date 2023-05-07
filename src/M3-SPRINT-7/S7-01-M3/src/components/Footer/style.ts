import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 3.125rem;
  background-color: var(--grey-0);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  .footer-paragraph {
    font-size: 0.75rem;
    color: var(--grey-6);
    display: flex;
    align-items: center;
    gap: 0.313rem;
  }

  .footer-paragraph > a {
    text-decoration: none;
    color: var(--grey-6);

    :hover {
      color: var(--secondary);
    }
  }

  .footer-heart {
    height: 0.75rem;
    width: auto;
  }

  @media (min-width: 768.1px) {
    height: 4.563rem;

    .footer-paragraph {
      font-size: 1.125rem;
    }

    .footer-heart {
      height: 1.25rem;
      width: auto;
    }
  }
`;
