import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StyledSigninMain } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../formsSchema/signinSchema";
import { useContext } from "react";
import { PinkButton } from "../../components/button";
import { UserContext } from "../../providers/userProvider";

export function Signin() {
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  return (
    <StyledSigninMain>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <form
        className="signin-form-container"
        onSubmit={handleSubmit(signIn)}
        noValidate
      >
        <h2>Login</h2>
        <label htmlFor="signin-email-input">Email</label>
        <input
          type="email"
          id="signin-email-input"
          name="email"
          placeholder="Digite seu email"
          {...register("email")}
        ></input>
        {errors.email ? <p>{errors.email.message}</p> : null}
        <label htmlFor="signin-password-input">Senha</label>
        <input
          type="password"
          id="signin-password-input"
          name="password"
          placeholder="Digite sua senha"
          {...register("password")}
        ></input>
        {errors.password ? <p>{errors.password.message}</p> : null}
        <PinkButton name="Entrar" />
        <p>Ainda não possui uma conta?</p>
        <Link to={"/signup"} id="signin-signup-button" className="gray-button">
          Cadastre-se
        </Link>
      </form>
    </StyledSigninMain>
  );
}
