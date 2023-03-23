import logoImg from "../assets/logo.png";

export function Header() {
  return (
    <header>
      <div className="header-div">
        <figure>
          <img src={logoImg} alt="logo" />
        </figure>
      </div>
    </header>
  );
}
