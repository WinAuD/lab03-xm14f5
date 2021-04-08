import React, { Component } from"react";
// import './IncCounter.css';
import AddButton from './AddButton.js';

class Number extends Component { 
  
  state = { count: 0 }; // Key-Value-Paar

  add = (i) => { // F. 99
    this.setState( { count: this.state.count + i});
  }

  render() { // F. 99
  
    return (
      <div className="CounterNum">
        Count: {this.state.count}
        <AddButton myInc = {this.props.myInc} myCallback = {(i) => this.add(parseInt(this.props.myInc))}></AddButton>
      </div> 
    );
  } 
}
      
export default Number; 