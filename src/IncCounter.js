import React, { Component } from"react";
import './IncCounter.css';

class IncCounter extends Component { 
  
  state = { count: 0 };
 
  jump()  {
      this.setState({ count: this.state.count + this.props.myInc });

      this.setState((state, props) => ({  
        counter: state.counter + props.inc}));

  }
 
  render() {
    

    return (

      <div className="CounterNum Counter">
        Count: {this.state.count}
        <button className="myButton CounterNum" onClick={ () => this.jump() } >
          +
        </button>
      </div>
    );
  } 
}
      
export default IncCounter;