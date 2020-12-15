import React, { Component } from 'react';
import './App.css';
import './Styles.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    const todoItems = this.props.theList.map((item, index) => (
      <ListItem todoItem={item} key={index} />
    ));

    return(
      <div className="list-container">
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default MyList;
