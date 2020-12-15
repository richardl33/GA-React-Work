import React, { Component } from "react";

class Comment extends Component {
  render() {
    return <p>{`This is a comment: ${this.props.body}`}</p>;
  }
}

export default Comment;
