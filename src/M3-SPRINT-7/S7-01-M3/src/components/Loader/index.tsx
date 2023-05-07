import Spinner from "../../assets/Spinner.svg";
import { StyledLoaderContainer } from "./style";

export function Loader() {
  return (
    <StyledLoaderContainer className="loaderContainer">
      <img src={Spinner} alt="Carregando..." />
    </StyledLoaderContainer>
  );
}
