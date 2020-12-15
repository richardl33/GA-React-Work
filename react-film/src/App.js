import React, { Component } from 'react';
import FilmData from './TMDB';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="film-library">
      <FilmListing filmData={FilmData.films} />
      <FilmDetails filmData={FilmData.films} />
      </div>
    );
  }
}

export default App;
