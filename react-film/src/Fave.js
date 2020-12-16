import React, { Component } from 'react';

class Fave extends Component {
   state = {
      isFave: false,
   };

   handleClick = e => {
      e.stopPropagation();
      console.log('handling Fave click!');

      this.setState({
         isFave: !this.state.isFave,
      });

      console.log(this.state.isFave);
   };

   render() {
      return (
         <div onClick={this.handleClick = this.handleClick.bind(this)} className="film-row-fave add_to_queue">
            <p className="material-icons">add_to_queue</p>
         </div>
      )
   }
}

export default Fave;