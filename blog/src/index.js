import React from "react";
import ReactDOM from "react-dom";
import Post from "./App";
import "./index.css";

const post = {
  title: "Dinosaurs are awesome",
  authors: ["Stealthy Stegosaurus", "Stealthy Trex", "Caveman"],
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!", "fourth"],
};

ReactDOM.render(
  <Post
    title={post.title}
    allAuthors={post.authors}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById("root")
);
