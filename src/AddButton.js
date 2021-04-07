import React, { Component } from"react";
import './AddButton.css';

class IncCounter extends Component { 

  render() {
    return (
      <div>
        <button onClick={ (e)=>this.jump(e) }>
          Click to Jump!!!
        </button>
        {this.state.counter}
      </div>
    );
  

    
    return (
      <div>
        <button onClick={this.props.myPassedFnc} className="CounterNum" >
          Click to jump
        </button>
        {this.state.counter}
      </div>
    );
  
    return (

      <div className="CounterNum Counter">
        Count: {this.state.counter}
        <button className="myAddButton CounterNum" onClick={ () => this.incCounter() } >
          {this.props.myInc}
        </button>
      </div>
    );
  } 
}
      
export default IncCounter;