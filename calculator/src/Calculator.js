import React, { Component } from "react";
import './App.css';

class Calculator extends Component {
  state = {
    input1: '',
    input2: '',
    value: 'Addition results go here!'
  };

  handleFormInput1 = event => {
    this.setState({
      input1: event.target.value,
    });
  };

  handleFormInput2 = event => {
    this.setState({
      input2: event.target.value,
    });
  };

  handleClick = event => {
    const sumValue = (Number(this.state.input1) + Number(this.state.input2));
    this.setState({
      value: sumValue,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" onChange={this.handleFormInput1} />
          <span>+</span>
          <input type="text" onChange={this.handleFormInput2} />
          <span>=<h3>{this.state.value}</h3></span><br/><br/>
          <button onClick={this.handleClick}>Calculate</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
