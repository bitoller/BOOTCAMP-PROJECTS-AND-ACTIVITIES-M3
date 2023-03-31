import { StyledHeader } from "./style";
import logo from "../../assets/logo.png";

export function Header({ search }) {
  const searchInputValue = (event) => {
    event.preventDefault();
    let searchValue = event.target.search.value;
    event.target.search.value = "";
    search(searchValue);
  };

  return (
    <StyledHeader>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={searchInputValue}>
          <div className="input-container">
            <input
              type="text"
              name="search"
              placeholder="Digitar Pesquisa"
            ></input>
            <button
              type="submit"
              id="search-input-button"
              className="green-button"
            >
              Pesquisar
            </button>
          </div>
        </form>
      </div>
    </StyledHeader>
  );
}
