import React, { Component } from 'react';
import FilmData from './TMDB';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import './App.css';
import TMDB from './TMDB';

console.table(FilmData.films);
class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current: {},
  };

  handleDetailsClick = (film) => {
     console.log(`Fetching details for ${film}`);
     const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

     fetch(url)
     .then((response) => {
       return response.json();
     }).then((data) => {
       console.table(data); // Take a look at what you get back.
     });

     this.setState({
       current: film,
     });
  };

  handleFaveToggle = (film) => {
    const faves = [...this.state.faves].slice();
    const filmIndex = faves.indexOf(film)

    if ( filmIndex > -1 ) {
      console.log("Removing " + film.title + " from faves")
      faves.splice(filmIndex, 1)
    } else {
      console.log("Adding " + film.title + " to faves")
      faves.push(film)
    }

    this.setState({
      faves: faves,
    });
    // Shorthand
    // this.setState({faves})
  }

  render() {
    console.table(this.state.current);
    return (
      <div className="film-library">
      <FilmListing 
        films={this.state.films} 
        faves={this.state.faves} 
        onFaveToggle={this.handleFaveToggle}
        onDetailsClick={this.handleDetailsClick} />
      <FilmDetails films={this.state.current} />
      </div>
    );
  }
}

export default App;
