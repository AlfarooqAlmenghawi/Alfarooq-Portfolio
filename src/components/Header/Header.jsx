import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about-alfarooq">About Alfarooq</Link>
      <Link to="/contact-alfarooq">Contact Alfarooq</Link>
      <Link to="/alfarooq's-projects">Alfarooq's Projects</Link>
      <Link to="/alfarooq's-links">Alfarooq's Links</Link>
    </>
  );
};

export default Header;
