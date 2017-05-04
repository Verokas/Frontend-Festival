import React, { Component } from 'react';
import './styles/App.css';
//importieren der Navigationsleiste
import Header from './components/nav/header.js'
import Body from './components/Body.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {displayInBody:'festivalList',
                  data: {festivals: ['Festival1', 'Festival2', 'Festival3', 'Festival4', 'Festival5','Festival6','Festival7','Festival8','Festival9', 'Festival1', 'Festival2', 'Festival3', 'Festival4', 'Festival5','Festival6','Festival7','Festival8','Festival9', 'Festival1', 'Festival2', 'Festival3', 'Festival4', 'Festival5','Festival6','Festival7','Festival8','Festival9'],
                        festivalIds: [1,2,3],
                        festivalTitle: ['Wacken!!','Schleswig-Holstein','17.08.2017'],
                        festivalImages: ["http://placekitten.com/g/400/200", "http://placekitten.com/g/400/200", "http://placekitten.com/g/400/200"],
                        festivalGenres: ['HipHop', 'Rock', 'Pop'],
                        festivalLineup:['Eminem', 'Rammstein', 'Hitler'],
                        acts: ['Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1', 'Act1',],
                        actName: '',
                        actDescription: '',
                        actGenres: [],
                        actFestivals: [],
                        }
                };
  }

  render() {
    return (
      <div className="App">
        <Header changeStateDisplayInBody={this.changeStateDisplayInBody.bind(this)} changeStateData={this.changeStateData.bind(this)}></Header>
        <Body display={this.state.displayInBody} data={this.state.data} changeStateDisplayInBody={this.changeStateDisplayInBody.bind(this)} changeStateData={this.changeStateData.bind(this)}></Body>
      </div>
    );
  }

  changeStateDisplayInBody(display) {
    this.setState({displayInBody: display});
  }

  changeStateData(stateToChange) {
    var state = this.state;
    var keys = Object.keys(stateToChange);
    for (var index = 0; index < keys.length; ++index) {
      var key = keys[index];
      if(key === 'festivals') {
        state.data.festivals = stateToChange.festivals;
      }
      else if(key === 'festivalTitle') {
        state.data.festivalTitle = stateToChange.festivalTitle;
      }
      else if(key === 'festivalImages') {
        state.data.festivalImages = stateToChange.festivalImages;
      }
      else if(key === 'festivalGenres') {
        state.data.festivalGenres = stateToChange.festivalGenres;
      }
      else if(key === 'festivalLineup') {
        state.data.festivalLineup = stateToChange.festivalLineup;
      }
      else if(key === 'acts') {
        state.data.acts = stateToChange.acts;
      }
      else if(key === 'actDetails') {
        state.data.actDetails = stateToChange.actDetails;
      }
      else if(key === 'festivalIds') {
        state.data.festivalIds = stateToChange.festivalIds;
      }
      else if(key === 'actName') {
        state.data.actName = stateToChange.actName;
      }
      else if(key === 'actDescription') {
        state.data.actDescription = stateToChange.actDescription;
      }
      else if(key === 'actGenres') {
        state.data.actGenres = stateToChange.actGenres;
      }
      else if(key === 'actFestivals') {
        state.data.actFestivals = stateToChange.actFestivals;
      }
    }

    //...für alle anderen noch implementieren
    //immer nur für eine property pro Aufruf oder auch mehrere möglich?
    console.log(key);
    console.log(Object.keys(state.data));
    console.log(state);
    this.setState({data: state.data})

  }
}

export default App;
