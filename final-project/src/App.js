import React, { Component } from "react";
import Lists from './Lists';
import './App.css';

class App extends Component {
  state = {
    toDoList: [],
    completedList: [],
    newTask: '',
  }

  componentDidMount = () => {
    // if (localStorage.getItem('toDoList') === null) {
    //   let sessTodo = JSON.parse(sessionStorage.getItem('toDoList'));
    //   this.setState({
    //     toDoList: sessTodo,
    //   })
    // }

      let sessTodo = JSON.parse(sessionStorage.getItem('toDoList'));
      console.log(sessTodo);
      if (sessTodo !== null) {
        this.setState({
          toDoList: sessTodo,
        })
      }

    console.log('Mount UP!!!');
  }

  componentDidUpdate = () => {
    sessionStorage.setItem('toDoList', JSON.stringify(this.state.toDoList));

    console.log('Updated!!!');
  }

  handleNewItemChange = e => {
    this.setState({
      newTask: e.target.value,
    });
  };

  addItem = e => {
    e.preventDefault();
    const toDos = [...this.state.toDoList];
    toDos.push(this.state.newTask);
    this.setState({ 
      toDoList: toDos, 
      newTask: ''
    });
  };

  removeItem = (removedItem) => {
    const toDoItems = this.state.toDoList.slice();
    const removedItemIndex = toDoItems.indexOf(removedItem);

    if ( removedItemIndex > -1 ) {
      toDoItems.splice(removedItemIndex, 1);
      this.setState({
        toDoList: toDoItems,
      });
    }
  }

  clearList = e => {
    e.preventDefault();
    this.setState({
      toDoList: [],
    });
  };

  completedList = () => {

  }

  render() {
    return (
      <div className='list-container'>
        <Lists 
          todo={this.state.toDoList} 
          completed={this.state.completedList}
          removeItem={this.removeItem}/>
          <form>
            <input
              type="text"
              placeholder="Add Item"
              onChange={this.handleNewItemChange}
              value={this.state.newTask}
            />
            <button onClick={this.addItem}>Add</button>
            <button onClick={this.clearList}>All Done</button>
          </form>
      </div>
    );
  }
}

export default App;
