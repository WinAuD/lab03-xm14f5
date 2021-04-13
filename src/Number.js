import React, { Component } from"react";
import AddButton from './AddButton.js';
import './Number.css';

class Number extends Component {
  
  state = { count: 0 }; // Key-Value-Paar

  add = (i) => { // F. 99
    this.setState({ count: this.state.count + i});
  }

  // add = (i) => { // F. 99, ohne Updater-Funktion (Aufgabe 5)
  //   this.setState({ count: this.state.count + i});
  // }

  render() { // F. 99
    let timeInSec = (this.state.count);

    let hour = Math.floor(timeInSec / 3600); 
    let minute = Math.floor((timeInSec % 3600) / 60); 
    let second = Math.floor(timeInSec % 60); 
  
    return (
      <div className="myNumber">
        Count: {this.state.count} sec
        <AddButton myInc = {this.props.myInc} myCallback = {(i) => this.add(parseInt(this.props.myInc))}></AddButton>
        <AddButton myInc = {this.props.myInc1} myCallback = {(i) => this.add(parseInt(this.props.myInc1))}></AddButton>
        <AddButton myInc = {this.props.myInc2} myCallback = {(i) => this.add(parseInt(this.props.myInc2))}></AddButton>
        <AddButton myInc = {this.props.myInc3} myCallback = {(i) => this.add(parseInt(this.props.myInc3))}></AddButton>
        <AddButton myInc = {this.props.myInc4} myCallback = {(i) => this.add(parseInt(this.props.myInc4))}></AddButton>
      </div> 
    );
  } 
}
      
export default Number; 