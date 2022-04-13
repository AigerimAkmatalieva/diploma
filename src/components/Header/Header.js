import "./Header.css";
import header2Image from "../../assets/header2.svg";

function Header() {
  const style = {
    backgroundImage: `url(${header2Image})`,
  };

  return (
    <header className="Header" style={style}>
      <h1>Care products</h1>
      <p>Shop best selling skin care products.</p>
    </header>
  );
}
export default Header;