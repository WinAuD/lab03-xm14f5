import React, { Component } from"react";
import './App.css';
import IncCounter from './IncCounter.js';

class App extends Component { 
  render() { 
    return (
      <div><IncCounter myInc="3"/></div> 
    ); 
  }
}
      
export default App; 