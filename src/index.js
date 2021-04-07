import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import IncCounter from './IncCounter.js';

ReactDOM.render(<IncCounter myInc="3"/>, document.getElementById("root"));
