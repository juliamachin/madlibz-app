import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

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
      </nav>
    </div>
  );
};

export default Nav;
