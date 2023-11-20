import React from "react";
import { ReactDOM } from "react";
import "./OnButton.css";

const OnButton = () => {

 return (
  <div className="onButton">
    <p className="onButtonText">on</p>
    <label class="switch">
    <input type="checkbox"/>
    <span class="slider"></span>
    </label>
    </div>
 )
}

export default OnButton;