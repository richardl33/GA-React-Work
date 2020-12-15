import React, { Component } from "react";
import "./App.css";
import Comment from "./Comment";
import Author from "./Author";

class Post extends Component {
  state = {
    body: this.props.body,
    inputValue: '',
  };

  changeBody = (event) => {
    this.setState({
      body: this.state.inputValue,
      inputValue: '',
    });
  };

  onChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  };

  render() {
    // let allComments = [
    //   <Comment body={this.props.comments[0]} />,
    //   <Comment body={this.props.comments[1]} />,
    //   <Comment body={this.props.comments[2]} />
    // ];

    // let authors = [
    //   <Author body={this.props.author[0]} />,
    //   <Author body={this.props.author[1]} />,
    //   <Author body={this.props.author[2]} />
    // ];

    let allComments = this.props.comments.map((comment, index) => <Comment body={comment} key={`comment-${index}`}/>);

    let authors = this.props.allAuthors.map((author, index) => <Author author={author} key={`author-${index}`}/>);

    return (
      <div>
        <h1>Written by{this.props.title}</h1>
        {authors}
        <div>
          <p>{this.state.body}</p>
          <button onClick={this.changeBody}>Edit Body</button>
          <input onChange={this.onChange} value={this.state.inputValue}/>
        </div>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
