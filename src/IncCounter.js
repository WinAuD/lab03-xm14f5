import React, { Component } from"react";
import './IncCounter.css';

class IncCounter extends Component { 
  state = { count: 0 };
 
  jump()  {
      this.setState({ count: this.state.count + 1 });
  }
 
  render() {
    return (
      <div className="CounterNum Counter myButton">
        Count: {this.state.count}
        <button className="CounterNum" onClick={ () => this.jump() } >
          OK
        </button>
      </div>
    );
  } 
}
      
export default IncCounter;