import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
class FilmRow extends Component {
   handleDetailsClick = (film) => {
      console.log(`Fetching details for ${film}`);
   };

   render() {
      const releaseDate = new Date(this.props.releaseDate);
      const releaseYear = releaseDate.getFullYear();

      return (
         <div onClick={() => this.handleDetailsClick('this film')} className="film-row">
           <FilmPoster posterPath={this.props.posterPath} />
           <div className="film-summary">
             <h1>{this.props.title}</h1>
             <p>{releaseYear}</p>
           </div>
           <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
         </div>
      )
   }
}

export default FilmRow;