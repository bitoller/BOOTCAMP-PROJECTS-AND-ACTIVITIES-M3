import { z } from "zod";

export const modalSchemaEdit = z.object({
  status: z.enum(["Iniciante", "Intermediário", "Avançado"], {
    errorMap: () => ({ message: "O nivel é obrigatório" }),
  }),
});

export const modalSchemaCreate = z.object({
  title: z.string().nonempty("A tecnologia é obrigatória"),
  status: z.enum(["Iniciante", "Intermediário", "Avançado"], {
    errorMap: () => ({ message: "O nivel é obrigatório" }),
  }),
});
