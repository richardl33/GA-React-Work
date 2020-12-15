import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
class FilmRow extends Component {
   render() {
      const releaseDate = new Date(this.props.releaseDate);
      const releaseYear = releaseDate.getFullYear();

      return (
         <div className="film-row">
           <FilmPoster posterPath={this.props.posterPath} />
           <div className="film-summary">
             <h1>{this.props.title}</h1>
             <p>{releaseYear}</p>
           </div>
         </div>
      )
   }
}

export default FilmRow;