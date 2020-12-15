import React, { Component } from 'react';

class FilmTitle extends Component {
   render() {
      return (
         <h1>{this.props.title}</h1>
      )
   }
}

class FilmListing extends Component {
   render() {
      let filmTitles = this.props.filmData.map((film, index) => (
        <FilmTitle
          title={film.title}
          key={`film-${index}`}
        />
      ));
      return (
         <div className="film-list">
           <h1 className="section-title">FILMS</h1>
           {filmTitles}
         </div>
      )
   }
}

export default FilmListing;