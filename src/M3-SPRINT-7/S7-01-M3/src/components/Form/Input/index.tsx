import { forwardRef, ForwardedRef, InputHTMLAttributes, useState } from "react";
import { StyledInputContainer } from "./style";

export interface IInputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error: string | undefined;
  Eye?: string;
}

export function InputComponent(
  { id, label, error, Eye, ...rest }: IInputComponentProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <StyledInputContainer className="inputContainer">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      {Eye ? (
        <div className="passwordInput">
          <input
            id={id}
            ref={ref}
            {...rest}
            type={visiblePassword ? "text" : "password"}
          />
          <img
            src={Eye}
            alt="Visualizar senha"
            onClick={() => {
              setVisiblePassword(!visiblePassword);
            }}
          />
        </div>
      ) : (
        <input className="regularInput" id={id} ref={ref} {...rest} />
      )}
      {error ? <p className="inputError">{error}</p> : null}
    </StyledInputContainer>
  );
}

export const Input = forwardRef(InputComponent);
