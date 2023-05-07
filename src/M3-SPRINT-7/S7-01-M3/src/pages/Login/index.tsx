import LoginDesktopImg from "../../assets/Login.svg";
import MobileImg from "../../assets/Paws.svg";
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledLoginPage } from "./style";

export function Login() {
  return (
    <StyledLoginPage>
      <section className="loginSection">
        <p className="pageTitle">
          <big>Furever</big>Homes
        </p>
        <img
          className="desktopImg"
          src={LoginDesktopImg}
          alt="Ilustração de casal com três pets disponíveis para adoção"
        />
        <img className="mobileImg" src={MobileImg} alt="Ilustração de patas" />
        <h1 className="loginPhrase">
          Adopting a pet is a purrfect way to add some extra fur to your family!
        </h1>
      </section>
      <LoginForm />
    </StyledLoginPage>
  );
}
