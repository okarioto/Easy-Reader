import React from "react";
import { ReactDOM } from "react";
import "./Readability.css"

const Readability = () => {

 return (
  <div className="readability">
   <p className="readabilityText">readability</p>
   <div class="countBox">
    <p id="count" className="readabilityCount">0</p>
   </div>
  </div>
 )
}

export default Readability;