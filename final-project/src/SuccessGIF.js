import React, { Component } from 'react';

class SuccessGIF extends Component {
   render() {
      let image;
      if (!this.props.toDoList.length) {
         image = <img src={this.props.successGIF} />
      }
      return (
         <div>{image}</div>
      )
   }
}

export default SuccessGIF;
