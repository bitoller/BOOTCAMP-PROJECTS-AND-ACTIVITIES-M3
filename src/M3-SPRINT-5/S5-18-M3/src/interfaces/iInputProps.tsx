export interface IInputProps {
  id: string;
  label: string;
  error: string | undefined;
  type: "email" | "password" | "text";
}
