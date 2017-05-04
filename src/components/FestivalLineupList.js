import React, { Component } from 'react';
import '../styles/FestivalLineupList.css';
import FestivalLineup from './FestivalLineup';
import ActLink from './ActLink';


class FestivalLineupList extends Component {
  render() {
    var lineupList = [];
    this.props.lineup.map((act, index) => {
      lineupList.push(<li><ActLink act={act} changeStateDisplayInBody={this.props.changeStateDisplayInBody} changeStateData={this.props.changeStateData} key={index}/></li>);
    });

    return (
      <div className="FestivalLineupList">
        <h3>Lineup</h3>
        <ul>
          {lineupList}
        </ul>
      </div>
    );
  }
}

export default FestivalLineupList;
