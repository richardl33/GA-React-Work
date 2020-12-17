// import React, { Component } from 'react';
import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
// class FilmRow extends Component {
//    render() {
//       const releaseDate = new Date(this.props.releaseDate);
//       const releaseYear = releaseDate.getFullYear();

//       return (
//          <div onClick={this.props.onDetailsClick} className="film-row">
//            <FilmPoster posterPath={this.props.posterPath} />
//            <div className="film-summary">
//              <h1>{this.props.title}</h1>
//              <p>{releaseYear}</p>
//            </div>
//            <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
//          </div>
//       )
//    }
// }

const FilmRow = props => {
  const releaseDate = new Date(props.releaseDate);
  const releaseYear = releaseDate.getFullYear();

  return (
     <div onClick={props.onDetailsClick} className="film-row">
       <FilmPoster posterPath={props.posterPath} />
       <div className="film-summary">
         <h1>{props.title}</h1>
         <p>{releaseYear}</p>
       </div>
       <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
     </div>
  )
}

export default FilmRow;