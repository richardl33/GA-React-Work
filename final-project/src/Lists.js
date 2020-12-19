import React, { Component } from 'react';
import ListItem from './ListItem';

class Lists extends Component {
   render() {
      const todoItems = this.props.todo;
      // const completedItems = this.props.completed;
      // console.log(todoItems);

      let allLists = todoItems.map((item, index) => (
        <ListItem
            listItem={item}
            key={`film-${index}`}
         />
      ));

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