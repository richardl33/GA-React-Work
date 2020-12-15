import React, { Component } from 'react';
import FilmData from './TMDB';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import './App.css';

console.table(FilmData.films);

class App extends Component {
  render() {
    return (
      <div className="film-library">
      <FilmListing films={FilmData.films} />
      <FilmDetails films={FilmData.films} />
      </div>
    );
  }
}

export default App;
