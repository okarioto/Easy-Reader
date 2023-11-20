import React,{ useState }  from "react";
import "./Settings.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from "../App";

const Settings = () => {
   /*eslint-disable no-undef */
  // const [selectedFont, setSelectedFont] = useState("");

  const [selectedFont, setSelectedFont] = useState(0);

  const handleFontChange = (event) => {
    // Get the selected font value from the dropdown
    const font = event.target.value;

    // Update the state with the selected font
    setSelectedFont(font);
  };

  const handleChangerClick = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (selectedFont === "1") {
      chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        files: ["arial.css"],
      });
    } else if (selectedFont === "2") {
      chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        files: ["comicsans.css"],
      });
    } else if (selectedFont === "3") {
      chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        files: ["verdana.css"],
      });
    } else if (selectedFont === "4") {
      chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        files: ["lexend.css"],
      });
    } else if (selectedFont === "5") {
      chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        files: ["opensans.css"],
      });
    }
  };

 return (
  <div className="settings">
   {/* start of dropdown menu */}
   <div class="dropdown">
    <label for="font-type" className="fontTypeC">Font:</label>
    <select name="font-type" id="fontDrop" onChange={handleFontChange}>
     <option value="1" className="fontName">arial</option>
     <option value="2" className="fontName">comic sans</option>
     <option value="3" className="fontName">verdana</option>
     <option value="4" className="fontName">tahoma</option>
     <option value="5" className="fontName">open sans</option>
    </select>
  </div>
  <button onClick={handleChangerClick}>Change!</button>

  {/* x to go back to home page */}
  <Link to="/">
   <img className="SettingsXLogo" src="./images/Transparent_X.png" alt="X" />
  </Link>
 </div>
 );
}

export default Settings;

