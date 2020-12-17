import React, { Component } from 'react';
import FilmRow from './FilmRow';
class FilmListing extends Component {
   state = {
      filter: 'all',
   };

   handleFilterClick = (filter) => {
      console.log(`Setting filter to ${filter}`);
      this.setState({
         filter: filter,
      });

      console.log(this.state.filter);
   };

   render() {
      let allFilms = this.props.films.map((film, index) => (
        <FilmRow
            onFaveToggle={() => this.props.onFaveToggle(film)}
            isFave={this.props.faves.includes(film)}
            title={film.title}
            releaseDate={film.release_date}
            posterPath={film.poster_path}
            key={`film-${index}`}
         />
      ));
      
      const filterFave = this.state.filter === 'faves' ? 'is-active' : '';
      const filterAll = this.state.filter === 'all' ? 'is-active' : '';

      return (
         <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list">
               <h1 className="section-title">FILMS</h1>
               <div className="film-list-filters">
                  <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${filterAll}`}>
                     ALL
                     <span className="section-count">{this.props.films.length}</span>
                  </div>
                  <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${filterFave}`}>
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