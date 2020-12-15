import React, { Component } from "react";
import "./App.css";
import Comment from "./Comment";
import Author from "./Author";

class Post extends Component {
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
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
