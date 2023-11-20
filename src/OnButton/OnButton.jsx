import React from "react";
import { ReactDOM } from "react";
import "./OnButton.css";
import handleChangerClick from "../Settings/Settings";
import { Link } from "react-router-dom";

const OnButton = () => {
  return (
    <div className="onButton">
      <Link to="/settings">
        <button className="yes">start</button>
      </Link>
    </div>
  );
};

export default OnButton;
