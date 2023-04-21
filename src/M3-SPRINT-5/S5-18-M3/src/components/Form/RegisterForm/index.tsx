import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../providers/userContext";
import {
  TRegisterFormValues,
  registerSchema,
} from "../../../formsSchema/registerSchema";
import { IRegisterFormData } from "../../../interfaces/iRegisterFormData";

function RegisterForm() {
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    let newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    } as IRegisterFormData;
    userRegister(newUser);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        type="text"
        id="name"
        label="Nome"
        error={errors.name ? errors.name.message : undefined}
        {...register("name")}
      />
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
      <Input
        type="password"
        id="confirmPassword"
        label="Confirmar Senha"
        error={
          errors.confirmPassword ? errors.confirmPassword.message : undefined
        }
        {...register("confirmPassword")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
}

export default RegisterForm;
