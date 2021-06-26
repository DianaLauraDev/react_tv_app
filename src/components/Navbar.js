import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__logo">
            <Link to="/">
              <i className="fas fa-video">TvApp</i>
            </Link>
          </h3>
          <ul className="nav__links">
            <li className="page_link">
              <Link to="/home">HOME</Link>
            </li>
            <li className="page_link">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
