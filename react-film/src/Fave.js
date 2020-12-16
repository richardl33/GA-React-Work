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
      const isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue';
      return (
         <div onClick={this.handleClick = this.handleClick.bind(this)} className={`film-row-fave ${isFave}`}>
            <p className="material-icons">{isFave}</p>
         </div>
      )
   }
}

export default Fave;