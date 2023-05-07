import { forwardRef, ForwardedRef, SelectHTMLAttributes } from "react";
import { StyledSelectContainer } from "./style";

export interface ISelectComponentProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  error: string | undefined;
}

export function SelectComponent(
  { id, label, error, ...rest }: ISelectComponentProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return id === "type" ? (
    <StyledSelectContainer className="selectContainer">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <select name={id} id={id} ref={ref} {...rest} className="selectInput">
        <option value="" hidden>
          Escolha o tipo de pet aqui...
        </option>
        <option value="Cachorro">Cachorro</option>
        <option value="Gato">Gato</option>
        <option value="Outros">Outros</option>
      </select>
      {error ? <p className="inputError">{error}</p> : null}
    </StyledSelectContainer>
  ) : id === "age" ? (
    <StyledSelectContainer className="selectContainer">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <select name={id} id={id} ref={ref} {...rest} className="selectInput">
        <option value="" hidden>
          Escolha a faixa etária do pet aqui...
        </option>
        <option value="Filhote">Filhote</option>
        <option value="Adulto">Adulto</option>
        <option value="Idoso">Idoso</option>
      </select>
      {error ? <p className="inputError">{error}</p> : null}
    </StyledSelectContainer>
  ) : id === "gender" ? (
    <StyledSelectContainer className="selectContainer">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <select name={id} id={id} ref={ref} {...rest} className="selectInput">
        <option value="" hidden>
          Escolha o sexo do pet aqui...
        </option>
        <option value="Femêa">Fêmea</option>
        <option value="Macho">Macho</option>
      </select>
      {error ? <p className="inputError">{error}</p> : null}
    </StyledSelectContainer>
  ) : id === "size" ? (
    <StyledSelectContainer className="selectContainer">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <select name={id} id={id} ref={ref} {...rest} className="selectInput">
        <option value="" hidden>
          Escolha o tamanho do pet aqui...
        </option>
        <option value="Pequeno">Pequeno</option>
        <option value="Médio">Médio</option>
        <option value="Grande">Grande</option>
      </select>
      {error ? <p className="inputError">{error}</p> : null}
    </StyledSelectContainer>
  ) : null;
}

export const Select = forwardRef(SelectComponent);
