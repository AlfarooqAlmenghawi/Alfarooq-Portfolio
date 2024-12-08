import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const arrowIcon = (
  <>
    <svg
      className="arrow-icon"
      fill="currentColor"
      viewBox="0 0 7 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 10.6L4.2 6 0 1.4 1.3 0l5.5 6-5.5 6L0 10.6z"></path>
    </svg>
  </>
);

const Header = () => {
  return (
    <>
      <header>
        <div className="all-the-links">
          <Link className="individual-link" to="/" data-text="Home">
            Home {arrowIcon}
          </Link>

          <Link
            className="individual-link"
            to="/about-alfarooq"
            data-text="About Alfarooq"
          >
            About Alfarooq {arrowIcon}
          </Link>
          <Link
            className="individual-link"
            to="/contact-alfarooq"
            data-text="Contact Alfarooq"
          >
            Contact Alfarooq {arrowIcon}
          </Link>
          <Link
            className="individual-link"
            to="/alfarooq's-projects"
            data-text="Alfarooq's Projects"
          >
            Alfarooq's Projects {arrowIcon}
          </Link>
          <Link
            className="individual-link"
            to="/alfarooq's-links"
            data-text="Alfarooq's Links"
          >
            Alfarooq's Links {arrowIcon}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
