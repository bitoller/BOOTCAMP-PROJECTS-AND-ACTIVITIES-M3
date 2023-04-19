import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const tokenAuth = async () => {
      let token = JSON.parse(localStorage.getItem("token"));
      if (token != null) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        try {
          const userAux = await api.get(`profile`);
          setUser(userAux.data);
          navigate("/home");
        } catch (error) {
          navigate("/");
          localStorage.removeItem("token");
        }
      } else {
        navigate("/");
      }
    };
    tokenAuth();
  }, []);

  const signIn = async (data) => {
    try {
      const response = await api.post("sessions", data);
      if (response.data.token) {
        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.user.id));
        toast.success("Usuário logado com sucesso");
        navigate("/home");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const signUp = async (data) => {
    try {
      await api.post("users", data);
      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getSpecificUser = async () => {
    try {
      let userId = JSON.parse(localStorage.getItem("userId"));
      const userAux = await api.get(`users/${userId}`);
      setUser(userAux.data);
    } catch (error) {}
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    toast.success("Deslogado com sucesso");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ signIn, user, getSpecificUser, signOut, signUp }}
    >
      {children}
    </UserContext.Provider>
  );
}
