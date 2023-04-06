import { useNavigate } from "react-router-dom";
import { StyledHome } from "./style";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Header } from "../../components/header";

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
      <Header userName={user.name} module={user.course_module} />
      <main>
        <p>Que pena! Estamos em desenvolvimento :(</p>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </StyledHome>
  );
}
