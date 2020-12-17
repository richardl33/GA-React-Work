import React, { Component } from 'react';

class Fave extends Component {
//    state = {
//       isFave: false,
//    };

   handleClick = e => {
      e.stopPropagation();
      console.log('handling Fave click!');

      // Add this line. You'll call the function passed through props.
      this.props.onFaveToggle();

      // Delete the `setState` line. You no longer track state here.

    //   this.setState({
    //      isFave: !this.state.isFave,
    //   });

    //   console.log(this.state.isFave);
   };

   render() {
      const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue';
      return (
         <div onClick={this.handleClick = this.handleClick.bind(this)} className={`film-row-fave ${isFave}`}>
            <p className="material-icons">{isFave}</p>
         </div>
      )
   }
}

export default Fave;