import React, { Component } from 'react';
import '../styles/ActDetails.css';
import FestivalLink from './FestivalLink';


class ActDetails extends Component {
  render() {
    var festivalsOfAct = [];
    var actFestivals = this.props.actFestivals;
    if(typeof actFestivals != "undefined" && actFestivals != null && actFestivals.length > 0) {
      actFestivals.map((festival, index) => {
          festivalsOfAct.push(<li key={index}>{festival}</li>);
      });
    } else {
      festivalsOfAct.push('noch zu keinen Festivals hinzugefügt')
    }

    var genresOfAct = [];
    var genres = [];
    if(typeof genres != "undefined" && genres != null && genres.length > 0) {
      genres.map((genre, index) => {
          genresOfAct.push(<li key={index}>{genre}</li>);
      });
    } else {
      genresOfAct.push('noch keine Genres hinzugefügt')
    }

    return (
      <div className="ActDetails">
      //
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <h4>Genres</h4>
        <ul>{genresOfAct}</ul>
        <h4>Auftritte</h4>
        <ul>{festivalsOfAct}</ul>
      </div>
    );
  }
}

export default ActDetails;
