import RegisterDesktopImg from "../../assets/Register.svg";
import MobileImg from "../../assets/Paws.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledRegisterPage } from "../Register/style";

export function Register() {
  return (
    <StyledRegisterPage>
      <RegisterForm />
      <section className="registerSection">
        <p className="pageTitle">
          <big>Furever</big>Homes
        </p>
        <img
          className="desktopImg"
          src={RegisterDesktopImg}
          alt="Ilustração de pessoa com pet adotado na nova casa"
        />
        <img className="mobileImg" src={MobileImg} alt="Ilustração de patas" />
        <h1 className="loginPhrase">Adopting a pet is a pawsome decision!</h1>
      </section>
    </StyledRegisterPage>
  );
}
