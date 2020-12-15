import React, { Component } from 'react';
import './App.css';
import './Styles.css';
import ListItem from './ListItem';

class MyList extends Component {
  state = {
    toDoItemArray: ["Buy ice cream.", "Eat ice cream.", "Go to the gym."],
    newItem: "",
  };

  clearList = () => {
    console.log('Clear list!');
    this.setState({
      toDoItemArray: [],
    });
  };

  handleNewItemChange = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  };

  addItem = (event) => {
    // prevent the button from triggering the form's default submit event.
    event.preventDefault();

    // DONT DO THIS
    // const userInput = this.state.newItem;
    // this.setState({
    //   toDoItemArray: this.state.toDoItemArray.push(userInput),
    // });

    // make a copy of the array to avoid mutating state
    const toDos = [...this.state.toDoItemArray];
    toDos.push(this.state.newItem);
    this.setState({ toDoItemArray: toDos, newItem: "" });
  };

  render() {
    const todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem todoItem={item} key={index} />
    ));

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>{todoItems}</ul>
        <form>
          <input
            type="text"
            placeholder="Type an item here"
            onChange={this.handleNewItemChange}
            value={this.state.newItem}
          />
          <button onClick={this.addItem}>Add it!</button>
        </form>
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
