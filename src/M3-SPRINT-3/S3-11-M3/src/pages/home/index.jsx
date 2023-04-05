import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StyledHome } from "./style";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const tokenAuth = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token != null) {
      let userId = JSON.parse(localStorage.getItem("userId"));
      try {
        const userAux = await api.get(`users/${userId}`);
        setUser(userAux.data);
      } catch (error) {}
    } else {
      clearLocalStorage();
      navigate("/");
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    tokenAuth();
  }, []);

  return (
    <StyledHome>
      <nav>
        <div className="navbar">
          <img src={logo} alt="logo" />
          <button
            id="home-signout-button"
            onClick={() => {
              clearLocalStorage();
              toast.success("Deslogado com sucesso");
              navigate("/");
            }}
          >
            Sair
          </button>
        </div>
      </nav>
      <header>
        <div className="header">
          <h2>Olá, {user.name}</h2>
          <p>Primeiro módulo (Introdução ao Frontend)</p>
        </div>
      </header>
      <main>
        <p>Que pena! Estamos em desenvolvimento :(</p>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </StyledHome>
  );
}
