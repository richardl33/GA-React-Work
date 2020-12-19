import React, { Component } from "react";
import Lists from './Lists';
import './App.css';

class App extends Component {
  state = {
    todoList: [],
    completedList: [],
    newTask: '',
  }

  componentDidMount = () => {
    let sessTodo = JSON.parse(sessionStorage.getItem('todoList'));
    this.setState({
      todoList: sessTodo,
    })

    console.log('Mount UP!!!');
  }

  componentDidUpdate = () => {
    sessionStorage.setItem('todoList', JSON.stringify(this.state.todoList))

    console.log('Update HA');
  }

  handleNewItemChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  addItem = (event) => {
    event.preventDefault();
    const toDos = [...this.state.todoList];
    toDos.push(this.state.newTask);
    this.setState({ 
      todoList: toDos, 
    }, console.log(this.state.todoList));

  };

  render() {
    return (
      <div>
        <Lists 
          todo={this.state.todoList} 
          completed={this.state.completedList}/>

          <form>
            <input
              type="text"
              placeholder="Type an item here"
              onChange={this.handleNewItemChange}
              value={this.state.newTask}
            />
            <button onClick={this.addItem}>Add</button>
          </form>
          {/* <button onClick={this.clearList}>Finished the list!</button> */}
      </div>
    );
  }
}

export default App;
