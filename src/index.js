import React from "react";
import ReactDOM from "react-dom";
 
import App from "./App";
import IncCounter from './IncCounter.js'; // Aufgabe 3 (<IncCounter myInc="3"/>)
import Number from './Number.js'; // Aufgabe 3


ReactDOM.render(<Number myInc="1" myInc1="10" myInc2="100" myInc3="1000" myInc4="10000"/>, document.getElementById("root"));
