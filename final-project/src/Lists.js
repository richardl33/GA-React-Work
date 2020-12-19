import ListItem from './ListItem';

const Lists = props => {
   let allLists;
   const toDoItems = props.todo;
   // const completedItems = props.completed;

   if (toDoItems !== null) {
      allLists = props.todo.map((item, index) => (
        <ListItem
            listItem={item}
            key={`list-item-${index}`}
            removeItem={props.removeItem}
         />
      ));
   }

   return <ul>{allLists}</ul>
}

export default Lists;