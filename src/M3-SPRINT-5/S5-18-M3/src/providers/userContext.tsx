import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ILoginFormData } from "../interfaces/iLoginFormData";
import { toast } from "react-toastify";
import { IUserProviderProps } from "../interfaces/iUserProviderProps";
import { IUser } from "../interfaces/iUser";
import { IUserContext } from "../interfaces/iUserContext";
import { AxiosError } from "axios";
import { IRegisterFormData } from "../interfaces/iRegisterFormData";

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IUserProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = async () => {
      let token = localStorage.getItem("token");
      token = token != null ? JSON.parse(token) : null;
      let userId = localStorage.getItem("userId");
      userId = userId != null ? JSON.parse(userId) : null;
      if (token != null && userId != null) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        try {
          const response = await api.get<IUser>(`users/${userId}`);
          setUser(response.data);
          navigate("/shop");
        } catch (error) {
          navigate("/");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        }
      } else {
        navigate("/");
      }
    };
    auth();
  }, []);

  const logIn = async (formData: ILoginFormData) => {
    try {
      const response = await api.post("login", formData);
      if (response.data.accessToken) {
        api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
        setUser(response.data.user);
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("userId", JSON.stringify(response.data.user.id));
        toast.success("Usuário logado com sucesso");
        navigate("/shop");
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    toast.success("Deslogado com sucesso");
    navigate("/");
  };

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      await api.post("users", formData);
      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };

  return (
    <UserContext.Provider value={{ logIn, logOut, user, userRegister }}>
      {children}
    </UserContext.Provider>
  );
}
