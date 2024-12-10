import { Link, NavLink, useLocation } from "react-router-dom";
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
  const url = useLocation();
  console.log(url.pathname);
  return (
    <>
      <header>
        <h1 className="portfolio-title">Alfarooq's Portfolio</h1>
        <div className="all-the-links">
          {url.pathname === "/" ? (
            <Link
              className="individual-link-active-page"
              to="/"
              data-text="Home"
            >
              Home {arrowIcon}
            </Link>
          ) : (
            <Link className="individual-link" to="/" data-text="Home">
              Home {arrowIcon}
            </Link>
          )}

          {url.pathname === "/about-alfarooq" ? (
            <Link
              className="individual-link-active-page"
              to="/about-alfarooq"
              data-text="About Alfarooq"
            >
              About Alfarooq {arrowIcon}
            </Link>
          ) : (
            <Link
              className="individual-link"
              to="/about-alfarooq"
              data-text="About Alfarooq"
            >
              About Alfarooq {arrowIcon}
            </Link>
          )}

          {url.pathname === "/alfarooq's-projects" ? (
            <Link
              className="individual-link-active-page"
              to="/alfarooq's-projects"
              data-text="Alfarooq's Projects"
            >
              Alfarooq's Projects {arrowIcon}
            </Link>
          ) : (
            <Link
              className="individual-link"
              to="/alfarooq's-projects"
              data-text="Alfarooq's Projects"
            >
              Alfarooq's Projects {arrowIcon}
            </Link>
          )}

          {url.pathname === "/contact-alfarooq" ? (
            <Link
              className="individual-link-active-page"
              to="/contact-alfarooq"
              data-text="Contact Alfarooq"
            >
              Contact Alfarooq {arrowIcon}
            </Link>
          ) : (
            <Link
              className="individual-link"
              to="/contact-alfarooq"
              data-text="Contact Alfarooq"
            >
              Contact Alfarooq {arrowIcon}
            </Link>
          )}

          {url.pathname === "/alfarooq's-links" ? (
            <Link
              className="individual-link-active-page"
              to="/alfarooq's-links"
              data-text="Alfarooq's Links"
            >
              Alfarooq's Links {arrowIcon}
            </Link>
          ) : (
            <Link
              className="individual-link"
              to="/alfarooq's-links"
              data-text="Alfarooq's Links"
            >
              Alfarooq's Links {arrowIcon}
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
