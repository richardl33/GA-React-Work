// What are React lifecycle methods? Where do you make API calls?

// the series of events that our React components go through. componentDidMount()

// What is unidirectional data flow in React?

// parent child component relationship

// Why is React considered to be declarative programming?

// it is declarative because we can change the state of the component and React updates the DOM

// How does an API fit in with a Single Page Application?

// an API can be used to pull data and update our application without have to reload our page

// What is JSON? Why is it popular for APIs?

// javascript object notation. it is popular because it makes it easier for developers to parse and read data

// What does each part of this URL mean? http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

// api url + search query + developers api key

// translate into an call. look up dns server. translate giphy.com to an ip address. ip address mades request to the server. 

// private vs public api

// XMLHTTPRequest - can get data in various formats (not just xml) from an api or a server. 

// Fetch is asynchronous. asynchronous functions return promises. promise is just a placeholder for a value for 

// promises will be fullfilled or rejected. .then() (is a promise method) is where successul promises are handled.

// fetch (old - callback hell .then). async/await (new)

fetch("https://official-joke-api.appspot.com/jokes/random")
  .then((response) => response.json()) // response.json() is async
  .then((data) => console.log("JSON from the Jokes API", data))
  .catch((error) => console.log("An error occurred!", error));

// fetch("https://official-joke-api.appspot.com/jokes/random")
//   .then((response) => {
//     if (response.status === 200) {
//       throw new Error({ message: "Your credentials are incorrect" });
//     }
//     return response.json();
//   }) // response.json() is async
//   .then((data) => console.log("JSON from the Jokes API", data))
//   .catch((error) => console.log("An error occurred!", error));

// async/await

const getRandomJoke = async () => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    // don't put code here that does NOT depend on the response
    const data = await response.json();
    console.log("JSON from the Jokes API", data);
  } catch (error) {
    console.log("An error occurred!", error);
  }
};

getRandomJoke();
