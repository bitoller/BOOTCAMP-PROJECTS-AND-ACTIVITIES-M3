import { useContext } from "react";
import { StyledModal } from "./style";
import { TechContext } from "../../providers/techProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  modalSchemaEdit,
  modalSchemaCreate,
} from "../../formsSchema/modalSchema";

export function Modal({ modal, tech, clearTech }) {
  const { handleCreate, handleUpdate, handleDelete } = useContext(TechContext);

  const close = () => {
    modal(false);
    clearTech(null);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      tech && tech.status != ""
        ? zodResolver(modalSchemaEdit)
        : zodResolver(modalSchemaCreate),
  });

  const onSubmit = (formData) => {
    if (tech && tech.status != "") {
      handleUpdate(tech.id, formData.status);
    } else {
      handleCreate(formData);
    }
    close();
  };

  const remove = () => {
    handleDelete(tech.id);
    close();
  };

  return (
    <StyledModal role="dialog">
      <div className="modal-top-container">
        <p>
          {tech && tech.status != ""
            ? "Tecnologia Detalhes"
            : "Cadastrar Tecnologia"}
        </p>
        <button onClick={close}>X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
        {tech && tech.status != "" ? (
          <div className="modal-content">
            <label htmlFor="tech-name-edit-input">Nome da tecnologia</label>
            <input
              type="text"
              id="tech-name-edit-input"
              name="tech-edit-name"
              placeholder="Nome da tecnologia"
              value={tech.title}
              disabled
            ></input>
            <label htmlFor="tech-select-edit-input">Status</label>
            <select
              id="tech-select-edit-input"
              name="select-edit-tech"
              defaultValue={tech.status}
              {...register("status")}
            >
              <option value="">Selecionar Nivel</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status ? <p>{errors.status.message}</p> : null}
            <div className="buttons-container">
              <button className="pink-button">Salvar alterações</button>
              <button type="button" onClick={remove} className="gray-button">
                Excluir
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-content">
            <label htmlFor="tech-name-create-input">Nome</label>
            <input
              type="text"
              id="tech-name-create-input"
              name="tech-create-name"
              placeholder="Nome da tecnologia"
              {...register("title")}
            ></input>
            {errors.title ? <p>{errors.title.message}</p> : null}
            <label htmlFor="tech-select-create-input">Selecionar status</label>
            <select
              id="tech-select-create-input"
              name="select-create-tech"
              {...register("status")}
            >
              <option value="">Selecionar Nivel</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status ? <p>{errors.status.message}</p> : null}
            <button className="pink-button">Cadastrar Tecnologia</button>
          </div>
        )}
      </form>
    </StyledModal>
  );
}
