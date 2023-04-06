import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Header({ userName, module }) {
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <>
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
          <h2>Olá, {userName}</h2>
          <p>{module}</p>
        </div>
      </header>
    </>
  );
}
