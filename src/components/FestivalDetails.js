import React, { Component } from 'react';
import '../styles/FestivalDetails.css';
import FestivalTitle from './FestivalTitle';
import FestivalImages from './FestivalImages';
import FestivalGenreList from './FestivalGenreList';
import FestivalLineupList from './FestivalLineupList';
import Description from './Description';



class FestivalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {title: this.props.title,
                  images: this.props.images,
                  };
    }

  render() {
    return (
      <div className="FestivalDetails">
        FestivalDetails!
        <FestivalTitle title={this.props.title}></FestivalTitle>
        <FestivalImages images={this.props.images}></FestivalImages>
        <FestivalGenreList genres={this.props.genres}></FestivalGenreList>
        <FestivalLineupList lineup={this.props.lineup} changeStateDisplayInBody={this.props.changeStateDisplayInBody} changeStateData={this.props.changeStateData}></FestivalLineupList>
        <Description></Description>
      </div>
    );
  }
}

export default FestivalDetails;
