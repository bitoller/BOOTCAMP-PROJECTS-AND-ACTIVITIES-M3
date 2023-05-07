import { StyledHeader } from "./style";
import { IconButton } from "../Buttons/IconButton";
import MenuIcon from "../../assets/MenuIcon.svg";
import LoginIcon from "../../assets/LoginIcon.svg";
import RegisterIcon from "../../assets/RegisterIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import SearchInput from "../../assets/SearchInput.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";
import RegisterPetIcon from "../../assets/RegisterPetIcon.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { petContext } from "../../providers/petContext";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export function Header() {
  const { token } = useContext(UserContext);
  const { setTextSearch, submitSearch, textSearch } = useContext(petContext);

  return (
    <>
      <StyledHeader>
        <nav className="headerNavbar">
          <p className="pageTitle">
            <big>Furever</big>Homes
          </p>
          <div className="navbarButtons">
            <div className="desktopSearchContainer">
              <form className="inputSearchContainer" onSubmit={submitSearch}>
                <input
                  type="text"
                  placeholder="Encontre seu futuro melhor amigo..."
                  value={textSearch}
                  onChange={(event) => setTextSearch(event.target.value)}
                />
                <button type="submit">
                  <img
                    src={SearchInput}
                    alt="Pesquisar"
                    className="search-icon-button tooltip"
                    data-tooltip-content="Pesquisar"
                  />
                </button>
              </form>
              <IconButton
                id="searchIcon"
                button={true}
                img={SearchIcon}
                alt={"Pesquisar"}
                size={"4rem"}
                tooltipText="Pesquisar"
              />
            </div>
            <div className="dropdownMenuOptions">
              <IconButton
                id="menuButton"
                button={true}
                img={MenuIcon}
                alt={"Abrir menu"}
                size={"2.5rem"}
              />
              <div className="menuButtonOptions">
                {!token ? (
                  <>
                    <IconButton
                      id="registerButton"
                      button={false}
                      img={RegisterIcon}
                      alt={"Registro"}
                      size={"4rem"}
                      tooltipText="Cadastre-se"
                    />
                    <IconButton
                      id="loginButton"
                      button={false}
                      img={LoginIcon}
                      alt={"Login"}
                      size={"4rem"}
                      tooltipText="Entrar"
                    />
                  </>
                ) : (
                  <>
                    <IconButton
                      id="registerPetButton"
                      button={true}
                      img={RegisterPetIcon}
                      alt={"Cadastrar pet"}
                      size={"4rem"}
                      tooltipText="Colocar pet para adoção"
                    />
                    <IconButton
                      id="logoutButton"
                      button={true}
                      img={LogoutIcon}
                      alt={"Logout"}
                      size={"4rem"}
                      tooltipText="Sair"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <form className="mobileSearchContainer" onSubmit={submitSearch}>
          <input
            type="text"
            placeholder="Encontre seu futuro melhor amigo..."
            value={textSearch}
            onChange={(event) => setTextSearch(event.target.value)}
          />
          <button type="submit">
            <img
              src={SearchInput}
              alt="Pesquisar"
              className="tooltip"
              data-tooltip-content="Pesquisar"
            />
          </button>
        </form>
      </StyledHeader>
      <Tooltip anchorSelect=".tooltip" place="bottom" />
    </>
  );
}
