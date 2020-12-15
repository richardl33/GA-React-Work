import React, { Component } from 'react';

class FilmRow extends Component {
   render() {
      let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.posterPath}`
      return (
         <div className="film-row">
           <img src={posterUrl} alt="" />

           <div className="film-summary">
             <h1>{this.props.title}</h1>
             <p>{this.props.releaseDate}</p>
           </div>
         </div>
      )
   }
}

export default FilmRow;