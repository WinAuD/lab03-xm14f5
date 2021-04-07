import React, { Component } from"react";
// import './IncCounter.css';
import AddButton from './AddButton.js';

class Number extends Component { 
  
  state = { count: 2 }; // Key-Value-Paar

  // incCounter() {
 //    this.setState((state, props) => ({  
 //       counter: state.counter + parseInt(this.props.myInc)}));
 // }

  add = (e) => {
    this.setState( { count: this.state.count + parseInt(this.props.myInc)});
  }

  render() {
  
    return (
      <div className="CounterNum">
        Count: {this.state.count}
        <AddButton myInc = {3} myCallback = {this.add}></AddButton>
      </div> 
    );
  } 
}
      
export default Number;