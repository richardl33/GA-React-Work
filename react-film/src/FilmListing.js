import React, { Component } from 'react';
import FilmRow from './FilmRow';
class FilmListing extends Component {
   handleFilterClick = (filter) => {
      console.log(`Setting filter to ${filter}`);
   };

   onClick = () => {

   };

   render() {
      let allFilms = this.props.films.map((film, index) => (
        <FilmRow
            title={film.title}
            releaseDate={film.release_date}
            posterPath={film.poster_path}
            key={`film-${index}`}
         />
      ));
      
      return (
         <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list">
               <h1 className="section-title">FILMS</h1>
               <div className="film-list-filters">
                  <div onClick={() => this.handleFilterClick('all')} className="film-list-filter">
                     ALL
                     <span className="section-count">{this.props.films.length}</span>
                  </div>
                  <div onClick={() => this.handleFilterClick('faves')} className="film-list-filter">
                     FAVES
                     <span className="section-count">0</span>
                  </div>
               </div>

            {allFilms}
            </div>
         </div>
      )
   }
}

export default FilmListing;