import React, { Component } from 'react';
import '../styles/FestivalTitle.css';


class FestivalTitle extends Component {
  render() {
    var styleSpan1 = {
      textAlign: 'left',
      fontSize: 50
    };

    var styleSpan2 = {
      textAlign: 'right',
      fontSize: 50
    };

    return (
      <div className="FestivalTitle">
        <span style={styleSpan1}>{this.props.title[0]}  </span>
        <span style={styleSpan2}>{this.props.title[1]}, {this.props.title[2]}</span>
      </div>
    );
  }
}

export default FestivalTitle;
