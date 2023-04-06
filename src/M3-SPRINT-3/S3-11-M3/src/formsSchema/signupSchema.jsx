import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("O e-mail é obrigatório"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*?[/\W|_/])/, "É necessário ao menos um símbolo"),
    confirmPassword: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*?[/\W|_/])/, "É necessário ao menos um símbolo"),
    bio: z.string().min(1, "A bio é obrigatória"),
    contact: z.string().min(1, "O contato é obrigatório"),
    course_module: z.enum(
      [
        "Primeiro módulo (Introdução ao Frontend)",
        "Segundo módulo (Frontend Avançado)",
        "Terceiro módulo (Introdução ao Backend)",
        "Quarto módulo (Backend Avançado)",
      ],
      {
        errorMap: () => ({ message: "O módulo é obrigatório" }),
      }
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });
