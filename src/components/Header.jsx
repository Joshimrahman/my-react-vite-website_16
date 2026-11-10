import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>MyWebsite</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;