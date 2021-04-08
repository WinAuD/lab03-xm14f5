import React, { Component } from"react";
import './AddButton.css';

class AddButton extends Component { 

  render() {
    return (
      <div>
        <button onClick = {this.props.myCallback}>
          Add {this.props.myInc}
        </button>  
      </div>
    ); 
  } 
}
       
export default AddButton;