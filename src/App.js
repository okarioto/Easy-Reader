import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  /*eslint-disable no-undef */
  const [selectedFont, setSelectedFont] = useState("");
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
        files: ["calibri.css"],
      });
    } else if (selectedFont === "3") {
      chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        files: ["cursive.css"],
      });
    } else if (selectedFont === "4") {
      chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        files: ["times.css"],
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="title">hellow</h3>
        <button
          onClick={() => {
            alert("bobby");
          }}
        >
          click
        </button>
        <label for="font-type">Font:</label>

        <select name="font-type" id="font-type" onChange={handleFontChange}>
          <option value="1">arial</option>
          <option value="2">calibri</option>
          <option value="3">cursive</option>
          <option value="4">times</option>
        </select>

        <button id="changer" onClick={handleChangerClick}>
          Change
        </button>
      </header>
    </div>
  );
}

export default App;
