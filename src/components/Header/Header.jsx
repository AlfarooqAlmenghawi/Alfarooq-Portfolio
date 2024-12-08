import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="all-the-links">
          <Link className="individual-link" to="/">
            Home
          </Link>
          <Link className="individual-link" to="/about-alfarooq">
            About Alfarooq
          </Link>
          <Link className="individual-link" to="/contact-alfarooq">
            Contact Alfarooq
          </Link>
          <Link className="individual-link" to="/alfarooq's-projects">
            Alfarooq's Projects
          </Link>
          <Link className="individual-link" to="/alfarooq's-links">
            Alfarooq's Links
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
