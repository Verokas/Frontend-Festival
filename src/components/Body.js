import React, { Component } from 'react';
import '../styles/Body.css';
import FestivalList from './FestivalList';
import FestivalDetails from './FestivalDetails';
import ActList from './ActList';
import ActDetails from './ActDetails';
import AddFestival from './AddFestival';
import AddAct from './AddAct';

var Infinite = require('react-infinite');


class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {hasMore : true};
  }

  render() {
    var displays = this.props.display;
    if(this.props.display === 'festivalList') {
      displays = <FestivalList festivals={this.props.data.festivals} ids={this.props.data.festivalIds} changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)} changeStateData={this.props.changeStateData.bind(this)}/>;
    } else if(this.props.display === 'festivalDetails') {
      displays = <FestivalDetails title={this.props.data.festivalTitle} images={this.props.data.festivalImages} genres={this.props.data.festivalGenres} lineup={this.props.data.festivalLineup} changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)} changeStateData={this.props.changeStateData.bind(this)}></FestivalDetails>;
    } else if(this.props.display === 'actList') {
      displays = <ActList acts={this.props.data.acts} changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)} changeStateData={this.props.changeStateData.bind(this)}/>;
    } else if(this.props.display === 'actDetails') {
      displays = <ActDetails name={this.props.data.actName} description={this.props.data.description} genres={this.props.data.genres} actFestivals={this.props.data.actFestivals} changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)} changeStateData={this.props.changeStateData.bind(this)}></ActDetails>;
    } else if(this.props.display === 'addAct') {
      displays = <AddAct></AddAct>;
    } else if(this.props.display === 'addFestival') {
      displays = <AddFestival></AddFestival>;
    } else if(this.props.display === 'addAct') {
      displays = <AddAct></AddAct>;
    }

    return(
      <div className="Body">
        {displays}
        {this.props.data.festivalDetails}
      </div>
    )
  }

  handleOnClick() {
    var display = this.props.display;
    if(display === 'actList' || display === 'actDetails') {
      this.props.changeStateDisplayInBody("festivalList");
    } else if(display === 'festivalList' || display === 'festivalDetails') {
      this.props.changeStateDisplayInBody("actList");
    }
  }

  handleOnClickTest() {
    var data = {actDetails: ['Rammstein', 'bla bla', 'Wacken'],
                acts: ['actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', 'actNeu', ]};
    this.props.changeStateData(data);
    this.forceUpdate();
  }



  //Funktion um Inhalt der Body-Komponente zu ändern
  //Welche Komponenten sollen angezeigt werden?
  //anzuzeigende Komponenten über state definieren?
  //Funktionen werden den Komponenten übergeben um die Eltern-Komponente verändern zu können
}

export default Body;
