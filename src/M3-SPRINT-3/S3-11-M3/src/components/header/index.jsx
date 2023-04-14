import logo from "../../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";

export function Header() {
  const { user, signOut } = useContext(UserContext);

  return (
    <>
      <nav>
        <div className="navbar">
          <img src={logo} alt="logo" />
          <button id="home-signout-button" onClick={signOut}>
            Sair
          </button>
        </div>
      </nav>
      <header>
        <div className="header">
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </header>
    </>
  );
}
