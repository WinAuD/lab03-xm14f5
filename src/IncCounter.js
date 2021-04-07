import React, { Component } from"react";
import './IncCounter.css';

class IncCounter extends Component { 
  
  constructor(props) {
    super(props);
    this.state = { counter: 0 }; // Key-Value-Paar
    this.incCounter = this.incCounter.bind(this);
  }

  incCounter() {
     this.setState((state, props) => ({  
        counter: state.counter + parseInt(this.props.myInc)}));
  }

  render() {
  
    return (
      <div className="CounterNum Counter">
        Count: {this.state.counter}
        <button className="myButton CounterNum" onClick={ () => this.incCounter() } >
          {this.props.myInc}
        </button>
      </div>
    );
  } 
}
      
export default IncCounter;