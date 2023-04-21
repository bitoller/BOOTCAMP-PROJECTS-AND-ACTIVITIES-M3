import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, {
      message: "O nome é obrigatório e precisa conter pelo menos 3 caracteres",
    }),
    email: z
      .string()
      .nonempty({ message: "O e-mail é obrigatório" })
      .email({ message: "O e-mail é obrigatório" }),
    password: z
      .string()
      .min(7, { message: "A senha precisa conter pelo menos 7 caracteres" })
      .regex(/(?=.*?[#?!@$%^&*-])/, {
        message: "É necessário pelo menos um caracter especial",
      })
      .regex(/(?=.*?[A-Z])/, {
        message: "É necessário pelo menos uma letra maiúscula",
      })
      .regex(/(?=.*?[a-z])/, {
        message: "É necessário pelo menos uma letra minúscula",
      })
      .regex(/(?=.*?[0-9])/, { message: "É necessário pelo menos um número" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "É obrigatório confirmar a senha" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "A confirmação de senha precisa corresponder com a senha.",
    path: ["confirmPassword"],
  });

export type TRegisterFormValues = z.infer<typeof registerSchema>;
