import React, { Component } from "react";
import './App.css';

class App extends Component {
  state = {
    
  }
  render() {
    const Pie = ['Sticky', 'Gooey', 'Lemoney', 'Pie'];

    if (localStorage.getItem('Gooey') === null) {
      localStorage.setItem('Gooey', JSON.stringify(Pie));
      
    } else {
      console.log(localStorage.getItem('Gooey'));
    }

    console.log(JSON.parse(localStorage.getItem('Gooey')))

    const findStuff = JSON.parse(localStorage.getItem('Gooey')).indexOf('Pie');
    
    if (findStuff > -1) {
      console.log('YEA');
      Pie.splice(findStuff);
      console.log(Pie);
      localStorage.setItem('Gooey', JSON.stringify(Pie));
    } else {
      console.log('NAW');
    }


    const gooeyArray = JSON.parse(localStorage.getItem('Gooey'));

    const fruits = gooeyArray.map((fruit, index) => (
      <li key={`${fruit}-${index}`}>{fruit}</li>
    ));

    return (
      <div>
        {fruits}
      </div>
    );
  }
}

export default App;
