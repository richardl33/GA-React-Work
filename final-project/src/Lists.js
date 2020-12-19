import React, { Component } from 'react';
import ListItem from './ListItem';

class Lists extends Component {


   render() {
      let allLists;
      const toDoItems = this.props.todo;
      // const completedItems = this.props.completed;
      // console.log(toDoItems);

      if (toDoItems !== null) {
         console.log('GOOODY')
         allLists = this.props.todo.map((item, index) => (
           <ListItem
               listItem={item}
               key={`list-item-${index}`}
               removeItem={this.props.removeItem}
            />
         ));
      }

      return (
         <div>
            <div>
               <ul>
                  {allLists}
               </ul>
            </div>
         </div>
      );
   }
}

export default Lists;