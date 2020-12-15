import React, { Component } from "react";
import "./App.css";

// Class Component
// class ListItem extends Component {
//   render() {
//     return (
//       <div>
//         <li>{this.props.todoItem}</li>
//       </div>
//     );
//   }
// }

// Functional Component
// const ListItem = (props) => {
//    return (
//       <div>
//          <li>{props.todoItem}</li>
//       </div>
//    )
// }

// Functional Component - Shorthand
const ListItem = props => <li>{props.todoItem}</li>;

export default ListItem;