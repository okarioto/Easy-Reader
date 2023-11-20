import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./Header/Header";
import OnButton from "./OnButton/OnButton";
import Readability from "./Readability/Readability";
import Settings from "./Settings/Settings";
// import OnButton from 
// import Readability from "./Readability";

const App = () => {
  return (
  <Router>
    <div>
      {/* start of header */}
        <Header />
        
        {/* start of on button */}
        <OnButton />
        
        {/* start of readability */}
        <Readability />

        {/* <Link to="/settings">settings</Link> */}

        <Routes>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
    </div>
  </Router>
  );
}


export default App;
