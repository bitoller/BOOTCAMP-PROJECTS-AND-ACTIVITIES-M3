import { StyledFooter } from "./style";
import HeartIcon from "../../assets/Heart.svg";

export function Footer() {
  return (
    <StyledFooter>
      <p className="footer-paragraph">
        Made with
        <img src={HeartIcon} alt={"Coração"} className="footer-heart" /> by
        <a href="https://www.linkedin.com/in/amandadolcifigueiredo/">Amanda,</a>
        <a href="https://www.linkedin.com/in/bianca-toller/">Bianca,</a>
        <a href="https://www.linkedin.com/in/bruno-cruz-46418425b/">Bruno</a> e
        <a href="https://www.linkedin.com/in/mateus-joao-feldhaus/">Mateus</a>
      </p>
    </StyledFooter>
  );
}
