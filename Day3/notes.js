// What are some things you would do to refactor the code using more modern JavaScript syntax? Could you use ES6 for this repo? Why or why not?

// Yes - using ternary operator to toggle isFave state & fave filters. use new Date & .getFullYear to convert film release year

// Which of these components could made into functional components, if any?

// FilmRow, FilmPoster, FilmDetails - because there is no need to handle State in these components

// How does the Fave button work? What happens to the application state when a user clicks on the Fave button? Follow the code.

// Fave button is a click event. when clicked - button toggles isFave state AND 'remove_from_queue' & 'add_to_queue' classes to update button UI


// How does the filter in FilmListing work? What happens to the application state when a user clicks on the FilmListing filters? Follow the code.

// When ALL or FAVE button is clicked - filter is udpated. based on filter state, buttons toggle 'is-active' class



