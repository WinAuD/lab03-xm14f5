import React, { Component } from"react";
// import './IncCounter.css';
import AddButton from './AddButton.js';

class Number extends Component { 
  
  state = { count: 0 }; // Key-Value-Paar

  // incCounter() {
 //    this.setState((state, props) => ({  
 //       counter: state.counter + parseInt(this.props.myInc)}));
 // }

  jump = (e) => {
    e.preventDefault();
    this.setState( { count: this.state + 1 } );
  }

  render() {
  
    return (
      <div className="CounterNum">
        Count: {this.state.counter}
        <AddButton myInc = {3} myCallback = {this.add}></AddButton>
      </div>


      <div className="CounterNum Counter">
        Count: {this.state.counter}
        <button className="myButton CounterNum" onClick={ () => this.incCounter() } >
          {this.props.myInc}
        </button>
      </div>
    );
  } 
}
      
export default Number;