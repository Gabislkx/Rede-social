import { FaHome, FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setMostrarPostagem }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <FaHome />
      </Link>

      <Link to="/pesquisa">
        <FaSearch />
      </Link>

      <button onClick={() => setMostrarPostagem(true)}>
        <FaPlus />
      </button>

      <Link to="/perfil">
        <img
          src="https://i.pinimg.com/736x/96/b5/1a/96b51a0d98c37f9ade70cbbcfb2c0f0b.jpg"
          alt="Perfil"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
