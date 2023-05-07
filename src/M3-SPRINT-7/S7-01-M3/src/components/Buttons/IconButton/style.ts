import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IStyledIconButton {
  size?: string;
}

export interface IStyledLink {
  size?: string;
}

export const StyledIconButton = styled.div<IStyledIconButton>`
  .roundButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    width: 2.5rem;
    height: 2.5rem;
    aspect-ratio: 1;
    border-radius: 50%;

    :hover {
      background-color: var(--secondary);
    }
  }

  .iconBtnImg {
    width: 1.375rem;
    height: auto;
  }

  #dogIcon {
    background-color: #c2ebff;

    img {
      width: 2rem;
    }

    :hover {
      filter: brightness(0.95);
    }
  }

  #catIcon {
    background-color: #c2f4d0;

    img {
      width: 2rem;
    }

    :hover {
      filter: brightness(0.95);
    }
  }

  #rabbitIcon {
    background-color: #faa6ae;

    img {
      width: 2rem;
    }

    :hover {
      filter: brightness(0.95);
    }
  }

  #buttonReset > img {
    width: 1.5rem;
  }

  @media (min-width: 768.1px) {
    .roundButton {
      width: 2.8125rem;
      height: auto;
    }

    .iconBtnImg {
      width: 1.5625rem;
      height: auto;
    }

    #dogIcon > img,
    #catIcon > img,
    #rabbitIcon > img {
      width: 2.1875rem;
    }

    #buttonReset > img {
      width: 1.5625rem;
    }

    #closeIcon > img {
      width: 1.25rem;
    }
  }
`;

export const StyledLink = styled(Link)<IStyledLink>`
  @media (min-width: 768.1px) {
    .roundButton {
      width: ${({ size }) => size};
      height: ${({ size }) => size};
    }
  }
`;
