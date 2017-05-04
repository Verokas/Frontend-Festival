import React, { Component } from 'react';
import '../styles/FestivalGenreList.css';
import FestivalGenre from './FestivalGenre'


class FestivalGenreList extends Component {
  render() {
    var genres = [];
    this.props.genres.map((genre, index) => {
      genres.push(<li>{genre}</li>);
    });
    return (
      <div className="FestivalGenreList">
        <h3>Genre</h3>
        <ul>
          {genres}
        </ul>
      </div>
    );
  }
}

export default FestivalGenreList;
