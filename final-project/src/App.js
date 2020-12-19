import React, { Component } from "react";
import Lists from './Lists';
import SuccessGIF from './SuccessGIF';

import './App.css';

class App extends Component {
  state = {
    toDoList: [],
    completedList: [],
    listSuccess: [],
    newTask: '',
    successGIF: '',
  }

  componentDidMount = async () => {
      let sessTodo = JSON.parse(sessionStorage.getItem('toDoList'));
      console.log(sessTodo);
      if (sessTodo !== null) {
        this.setState({
          toDoList: sessTodo,
        })
      }

      const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=GSlrJFiKBbzXcVGqO33YpRuZFjGBa5qP&q=success&limit=1&offset=0&rating=r&lang=en');
      const data = await response.json();
      // console.log(data.data[0].images.downsized_medium.url);

      this.setState({
        successGIF: data.data[0].images.downsized_medium.url
      });
  }

  componentDidUpdate = () => {
    sessionStorage.setItem('toDoList', JSON.stringify(this.state.toDoList));
    // console.log('Updated!!!');
  }

  handleNewItemInput = e => {
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

  render() {
    return (
      <div className='list-container'>
        <SuccessGIF toDoList={this.state.toDoList} successGIF={this.state.successGIF} newTask={this.state.newTask}/>
        <Lists 
          todo={this.state.toDoList} 
          completed={this.state.completedList}
          removeItem={this.removeItem}/>
          <form>
            <input
              type="text"
              placeholder="Add Item"
              onChange={this.handleNewItemInput}
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
