import React, { Component } from "react";
import "./App.css";

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.todoItem}</li>
      </div>
    );
  }
}

export default ListItem;