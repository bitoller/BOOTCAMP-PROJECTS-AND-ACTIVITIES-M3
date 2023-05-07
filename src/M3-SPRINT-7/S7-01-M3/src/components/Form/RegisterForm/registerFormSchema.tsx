import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Por favor insira um email válido"),
    password: z
      .string()
      .min(7, "Senha deve conter pelo menos 7 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(\W|_)/, "Deve conter no mínimo um caractere especial"),
    confirm: z.string().min(7, "Senha deve conter pelo menos 7 caracteres"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "A confirmação e a senha devem ser iguais.",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
