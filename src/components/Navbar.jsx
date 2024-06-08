import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="mx-3" to="/">
        Home
      </Link>{" "}
      /{" "}
      <Link className="mx-3" to="/favoritos">
        Favoritos
      </Link>
    </nav>
  );
};
export default Navbar;
