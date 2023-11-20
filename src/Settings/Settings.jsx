import React from "react";
import "./Settings.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from "../App";

const Settings = () => {

 return (
  <div className="settings">
   {/* start of dropdown menu */}
   <div class="dropdown">
    <label for="font-type" className="fontType">Font:</label>
    <select name="font-type" id="font-type">
     <option value="1" className="fontName">arial</option>
     <option value="2" className="fontName">comic sans</option>
     <option value="3" className="fontName">verdana</option>
     <option value="4" className="fontName">tahoma</option>
     <option value="4" className="fontName">open sans</option>
    </select>
  </div>
  {/* x to go back to home page */}
  <Link to="/">
   <img className="SettingsXLogo" src="./images/Transparent_X.png" alt="X" />
  </Link>
 </div>
 );
}

export default Settings;

