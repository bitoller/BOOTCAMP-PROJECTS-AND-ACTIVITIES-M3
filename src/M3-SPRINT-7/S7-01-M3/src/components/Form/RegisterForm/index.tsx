import { Link } from "react-router-dom";
import { StyledForm } from "../style";
import { FormButton } from "../../Buttons/FormButton";
import { IconButton } from "../../Buttons/IconButton";
import { Input } from "../Input";
import Home from "../../../assets/Home.svg";
import Eye from "../../../assets/Eye.svg";
import { useContext } from "react";
import { IRegisterFormData, UserContext } from "../../../providers/userContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";

export function RegisterForm() {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<IRegisterFormData>({
    defaultValues: { name: "", email: "", password: "", confirm: "" },
    resolver: zodResolver(registerFormSchema),
  });

  const emptyInputs = Object.values(dirtyFields).length < 4 ? true : false;

  return (
    <StyledForm className="formContainer">
      <span className="formHeader">
        <h2>Registro</h2>
        <IconButton
          img={Home}
          alt="Botão da Homepage"
          size="3.125rem"
          button={false}
          id="1"
          tooltipText="Página inicial"
        />
      </span>
      <form onSubmit={handleSubmit(createUser)}>
        <Input
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome..."
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          label="E-mail"
          type="text"
          placeholder="Digite seu e-mail..."
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha..."
          Eye={Eye}
          error={errors.password?.message}
          {...register("password")}
        />
        <Input
          id="confirm"
          label="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha..."
          Eye={Eye}
          error={errors.confirm?.message}
          {...register("confirm")}
        />
        <FormButton disabled={emptyInputs || isSubmitting} text="Cadastre-se" />
      </form>
      <span className="formFooter">
        <p>Já tem uma conta?</p>
        <Link to="/login">Clique aqui para retornar ao login!</Link>
      </span>
    </StyledForm>
  );
}
