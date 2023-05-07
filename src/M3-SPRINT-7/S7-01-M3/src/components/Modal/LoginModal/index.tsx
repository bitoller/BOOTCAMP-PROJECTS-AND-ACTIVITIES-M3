import { Link } from "react-router-dom";
import { StyledForm } from "../../Form/style";
import { FormButton } from "../../Buttons/FormButton";
import { Input } from "../../Form/Input";
import Eye from "../../../assets/Eye.svg";
import { useContext } from "react";
import { ILoginFormData, UserContext } from "../../../providers/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../Form/LoginForm/loginFormSchema";
import { StyledLoginModal } from "./style";
import CloseIcon from "../../../assets/CloseIconWT.svg";
import { IconButton } from "../../Buttons/IconButton";

export function LoginModal() {
  const { logInModal } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<ILoginFormData>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const emptyInputs = Object.values(dirtyFields).length < 2 ? true : false;

  return (
    <StyledLoginModal>
      <StyledForm className="formContainer form-container-margin">
        <span className="formHeader">
          <h2>Login</h2>
          <IconButton
            img={CloseIcon}
            alt={"Fechar login"}
            size={"2.5rem"}
            button={true}
            id={"closeIcon"}
            tooltipText="Fechar"
          />
        </span>
        <form onSubmit={handleSubmit(logInModal)}>
          <Input
            id="email"
            label="E-mail"
            type="text"
            placeholder="Digite seu e-mail..."
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            placeholder="Digite sua senha..."
            Eye={Eye}
            {...register("password")}
            error={errors.password?.message}
          />
          <FormButton text="Login" disabled={isSubmitting || emptyInputs} />
        </form>
        <span className="formFooter">
          <p>Ainda não tem conta?</p>
          <Link to="/register">Cadastre-se aqui!</Link>
        </span>
      </StyledForm>
    </StyledLoginModal>
  );
}
