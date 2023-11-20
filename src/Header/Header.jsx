import React from "react";
import { ReactDOM } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="homeHeader">
        <img className="homeLogo" src="./images/glassesT.png" alt="glasses" />
        <h3 className="title">easy reader</h3>
      </header>
    </div>
  );
};

export default Header;
