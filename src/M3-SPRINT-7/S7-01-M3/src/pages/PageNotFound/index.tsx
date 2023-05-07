import { Link } from "react-router-dom";
import PageNotFoundDesktopImg from "../../assets/PageNotFound.svg";
import MobileImg from "../../assets/Paws.svg";
import { StyledPageNotFound } from "./style";

export function PageNotFound() {
  return (
    <StyledPageNotFound className="pageNotFound">
      <figure className="pageNotFoundImages">
        <img
          className="desktopImg"
          src={PageNotFoundDesktopImg}
          alt="Ilustração de gato no espaço"
        />
        <img className="mobileImg" src={MobileImg} alt="Ilustração de patas" />
      </figure>
      <section className="pageNotFoundMessages">
        <big>404</big>
        <h1>Página não encontrada!</h1>
        <Link to="/">Retornar para a home</Link>
      </section>
    </StyledPageNotFound>
  );
}
