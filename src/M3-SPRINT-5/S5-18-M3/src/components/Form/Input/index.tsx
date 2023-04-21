import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { IInputProps } from "../../../interfaces/iInputProps";
import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef(
  (
    { id, label, error, type, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div>
      <StyledInputContainer>
        <input type={type} id={id} placeholder=" " ref={ref} {...rest} />
        <label htmlFor={id}>{label}</label>
      </StyledInputContainer>
      <StyledParagraph fontColor="red">{error}</StyledParagraph>
    </div>
  )
);

export default Input;
