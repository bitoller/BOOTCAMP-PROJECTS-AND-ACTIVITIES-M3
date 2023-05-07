import { z } from "zod";

export const registerPetFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  type: z.string().min(1, "Por favor, escolha uma das opções"),
  age: z.string().min(1, "Por favor, escolha uma das opções"),
  gender: z.string().min(1, "Por favor, escolha uma das opções"),
  size: z.string().min(1, "Por favor, escolha uma das opções"),
  img: z.string().url("Informe um link válido").nonempty(),
  address: z.string().min(3, "Por favor, coloque um endereço válido"),
  description: z.string().min(5, "Por favor, coloque uma descrição válida"),
});

export type TRegisterFormValues = z.infer<typeof registerPetFormSchema>;
