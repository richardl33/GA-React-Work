// 1. What dependencies is the application currently using? Where can I find information on them?

// React (package.json), React DOM (package.json), TMDB.js (data)

// 2. What is the purpose of ReactDOM.render()? What file is this method being called in?

// ReactDOM.render, renders the App component and attaches it to the 'root' element in index.html

// index.js

// 3. Where are the components of our application located? Why might we want to separate them into their own folders?

// stored in src folder. as application grows, it would be helpful to seperate the components into folders to help organize and maintain the files.

// 4. How are the components nested inside of each other?

// child components need to be imported into file first. then components call on each other with parent and child relationship.

// heirarchy - index.js -> App.js -> FilmListing -> FilmRow & FilmPoster

// is there data? where is that data coming from? 