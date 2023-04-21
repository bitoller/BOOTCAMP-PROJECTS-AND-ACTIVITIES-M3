import { useContext } from "react";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { UserContext } from "../../../providers/userContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TLoginFormValues,
  loginSchema,
} from "../../../formsSchema/loginSchema";

function LoginForm() {
  const { logIn } = useContext(UserContext);

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    logIn(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        type="email"
        id="email"
        label="Email"
        error={errors.email ? errors.email.message : undefined}
        {...register("email")}
      />
      <Input
        type="password"
        id="password"
        label="Senha"
        error={errors.password ? errors.password.message : undefined}
        {...register("password")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
