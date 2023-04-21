import { MdShoppingCart, MdLogout } from "react-icons/md";
import SearchForm from "./searchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
import { ICartModalProps } from "../../interfaces/iCartModalProps";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";

function Header({ modal }: ICartModalProps) {
  const { logOut } = useContext(UserContext);
  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  modal(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={logOut}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
