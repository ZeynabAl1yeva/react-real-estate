import { LuHouse, LuPhone } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <h2 className="logo">
        <LuHouse size={34} /> EstateHub
      </h2>
      <nav>
        <a href="#" className="active">Home</a>
        <a href="#">Properties</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <button className="btn blue">
        <LuPhone size={18} /> Contact Agent
      </button>
    </header>
  );
};

export default Header;