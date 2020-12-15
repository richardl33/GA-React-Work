import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
This lab is meant to provide additional practice creating reusable React Components.

Suppose the company you're working for, Feedr, is migrating their application to React. You've been tasked to convert one of the HTML templats into React code. 

In the HTML section of this CodePen you will find 3 article elements within the HTML section generating the newsfeed articles visible on the page. 

Perform the following to complete the lab: 

- Create an array called `newsFeedData` that will contain 3 objects with the following properties:  `title`, `tags`, `image`, and `impressions`
- Populate those objects based on those values assigned in the HTML which means you must 
examine the HTML and find those values assigned to each DOM element.
- Create a `NewsFeedApp` component and pass it the `newsFeedData` array as `props`.
- The `NewsFeedApp` component will then render 3 `articles` based on properties of the objects in the `newsFeedData` array.
*/

// SUMMARY OF STEPS
//1.  create an array called newsFeedData that will contain the 3 objects
//2.  create a NewsFeedApp component
//3.  pass the NewsFeedApp component the newsFeedData as a prop
//4. render 3 html sections with that info

// YOUR CODE HERE

let newsFeedData = [
  {
    title: "New York is getting its very own checkout-free Amazon Go store",
    tags: "Tech",
    image: "https://loremflickr.com/400/250/dog?a",
    impressions: "14"
  },
  {
    title:
      "9 of the best fitness trackers because there are literally too many to choose",
    tags: "Tech",
    image: "https://loremflickr.com/400/250/dog?b",
    impressions: "104"
  },
  {
    title:
      "The most addictive Google Doodle games to waste an afternoon at work",
    tags: "Culture",
    image: "https://loremflickr.com/400/250/dog?c",
    impressions: "222"
  }
];

class Article extends React.Component {
  render() {
    return (
      <article class="article">
        <section class="featuredImage">
          <img src={this.props.image} alt="" />
        </section>
        <section class="articleContent">
          <a href="#" id="40">
            <h3>{this.props.title}</h3>
          </a>
          <h6 class="tags">{this.props.tags}</h6>
        </section>
        <section class="impressions">{this.props.impressions}</section>
        <div class="clearfix"></div>
      </article>
    );
  }
}

class NewsFeedApp extends React.Component {
  render() {
    let articles = this.props.newsFeedData.map((article, index) => (
      <Article
        image={article.image}
        title={article.title}
        tags={article.tags}
        impressions={article.impressions}
        key={`article-${index}`}
      />
    ));

    return <div>{articles}</div>;
  }
}

ReactDOM.render(
  <NewsFeedApp newsFeedData={newsFeedData} />,
  document.getElementById("root")
);

