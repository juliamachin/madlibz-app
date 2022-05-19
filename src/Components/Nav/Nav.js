import { Route, Router, Link } from "react-router";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="/Madlibsicon 3.png"
            style={{ width: 250, height: 100 }}
            alt="MadLibs Icon"
          />
        </Link>
        <Link to="/story">Story</Link>
      </nav>
    </div>
  );
};

export default Nav;
