import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StyledSigninMain } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../formsSchema/signinSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { PinkButton } from "../../components/button";

export function Signin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  async function submit(formData) {
    try {
      const response = await api.post("sessions", formData);
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.user.id));
        toast.success("Usuário logado com sucesso");
        navigate("/home");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <StyledSigninMain>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <form
        className="signin-form-container"
        onSubmit={handleSubmit(submit)}
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
