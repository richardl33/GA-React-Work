import React, { Component } from "react";
import './App.css';

class AppSesh extends Component {
  state = {
    todoList: [],
    completedList: [],
  }
  render() {
    const Pie = ['Sticky', 'Gooey', 'Lemoney', 'Pie'];

    if (sessionStorage.getItem('Gooey') === null) {
      sessionStorage.setItem('Gooey', JSON.stringify(Pie));
      
    } else {
      console.log(sessionStorage.getItem('Gooey'));
    }

    console.log(JSON.parse(sessionStorage.getItem('Gooey')))

    const findStuff = JSON.parse(sessionStorage.getItem('Gooey')).indexOf('Pie');
    
    if (findStuff > -1) {
      console.log('YEA');
      Pie.splice(findStuff);
      console.log(Pie);
      sessionStorage.setItem('Gooey', JSON.stringify(Pie));
    } else {
      console.log('NAW');
    }


    const gooeyArray = JSON.parse(sessionStorage.getItem('Gooey'));

    const fruits = gooeyArray.map((fruit, index) => (
      <li key={`${fruit}-${index}`}>{fruit}</li>
    ));



   //  sessionStorage.setItem('todoList', JSON.stringify(['task 1', 'task 2']));
   //  sessionStorage.setItem('completedList', JSON.stringify(['task 3']));

    return (
      <div>
        {fruits}
      </div>
    );
  }
}

export default AppSesh;
