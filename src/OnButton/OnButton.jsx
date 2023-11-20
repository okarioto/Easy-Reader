import React from "react";
import { ReactDOM } from "react";
import "./OnButton.css";
import { Link } from "react-router-dom";

const OnButton = () => {

 return (
  <div className="onButton">
    <Link className="startLink" to="/settings">
     <div className="startBtn">
      <p className="startBtntext">
       start
      </p>
     </div>
     </Link>
    </div>
  );
};

export default OnButton;
