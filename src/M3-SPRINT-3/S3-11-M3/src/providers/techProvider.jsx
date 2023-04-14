import { createContext, useContext } from "react";
import { api } from "../services/api";
import { UserContext } from "./userProvider";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { getSpecificUser } = useContext(UserContext);

  const handleCreate = async (data) => {
    try {
      await api.post("users/techs", data);
      getSpecificUser();
      toast.success("Tecnologia criada com sucesso");
    } catch (error) {
      toast.error("Aconteceu algum erro");
    }
  };

  const handleUpdate = async (id, status) => {
    try {
      await api.put(`users/techs/${id}`, { status: status });
      getSpecificUser();
      toast.success("Tecnologia atualizada com sucesso");
    } catch (error) {
      toast.error("Aconteceu algum erro");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`users/techs/${id}`);
      getSpecificUser();
      toast.success("Tecnologia deletada com sucesso");
    } catch (error) {
      toast.error("Aconteceu algum erro");
    }
  };
  return (
    <TechContext.Provider value={{ handleCreate, handleUpdate, handleDelete }}>
      {children}
    </TechContext.Provider>
  );
}
