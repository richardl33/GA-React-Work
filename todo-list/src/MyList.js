import React, { Component } from 'react';
import './App.css';
import './Styles.css';
import ListItem from './ListItem';

class MyList extends Component {
  state = {
    toDoItemArray: ["Buy ice cream.", "Eat ice cream.", "Go to the gym."],
  };

  clearList = () => {
    this.setState({
      toDoItemArray: [],
    });
  };

  render() {
    const todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ));

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>{todoItems}</ul>
        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    );
  }
}

// MyList refactor
// const MyList = props => {
//   const todoItems = props.theList.map((item, index) => (
//     <ListItem todoItem={item} key={index} />
//   ));
//   return (
//     <div>
//       <h1> Things I should stop procrastinating:</h1>
//       <ul>{todoItems}</ul>
//     </div>
//   )
// }

export default MyList;
