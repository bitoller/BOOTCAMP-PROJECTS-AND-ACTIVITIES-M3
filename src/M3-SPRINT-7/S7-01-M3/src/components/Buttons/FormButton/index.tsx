import { StyledFormButton } from "./style";

export interface IFormButtonProps {
  text: string;
  id?: string;
  customClass?: string;
  disabled: boolean;
}

export function FormButton({
  text,
  id,
  customClass,
  disabled,
}: IFormButtonProps) {
  return (
    <StyledFormButton id={id} disabled={disabled}>
      <span className={customClass}>{text}</span>
    </StyledFormButton>
  );
}
