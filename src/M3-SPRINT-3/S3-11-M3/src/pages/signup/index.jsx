import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import { signupSchema } from "../../formsSchema/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledSignupMain } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { PinkButton } from "../../components/button";
import { UserContext } from "../../providers/userProvider";


export function Signup() {
  const { signUp } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  return (
    <StyledSignupMain>
      <div className="logo-button-container">
        <img src={logo} alt="logo" />
        <Link to={"/"}>Voltar</Link>
      </div>
      <form
        className="signup-form-container"
        onSubmit={handleSubmit(signUp)}
        noValidate
      >
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <label htmlFor="signup-name-input">Nome</label>
        <input
          type="text"
          id="signup-name-input"
          name="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        ></input>
        {errors.name ? <p>{errors.name.message}</p> : null}
        <label htmlFor="signup-email-input">Email</label>
        <input
          type="email"
          id="signup-email-input"
          name="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        ></input>
        {errors.email ? <p>{errors.email.message}</p> : null}
        <label htmlFor="signup-password-input">Senha</label>
        <input
          type="password"
          id="signup-password-input"
          name="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        ></input>
        {errors.password ? <p>{errors.password.message}</p> : null}
        {errors.message ? <p>{errors.message}</p> : null}
        <label htmlFor="signup-confirm-password-input">Confirmar Senha</label>
        <input
          type="password"
          id="signup-confirm-password-input"
          name="confirm-password"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        ></input>
        {errors.confirmPassword ? (
          <p>{errors.confirmPassword.message}</p>
        ) : null}
        <label htmlFor="signup-bio-input">Bio</label>
        <input
          type="text"
          id="signup-bio-input"
          name="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        ></input>
        {errors.bio ? <p>{errors.bio.message}</p> : null}
        <label htmlFor="signup-contact-input">Contato</label>
        <input
          type="text"
          id="signup-contact-input"
          name="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        ></input>
        {errors.contact ? <p>{errors.contact.message}</p> : null}
        <label htmlFor="signup-select-input">Selecionar módulo</label>
        <select
          id="signup-select-input"
          name="select-module"
          {...register("course_module")}
        >
          <option value="">Selecionar módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        {errors.course_module ? <p>{errors.course_module.message}</p> : null}
        <PinkButton name="Cadastrar" />
      </form>
    </StyledSignupMain>
  );
}
