import React, { Component } from 'react';
import '../../styles/search.css';

class Suche extends Component {

constructor(props){
    super(props);
    this.state = {  genre: '',
                    suchtext: '',
                    suchkategorie: 'Festival'};
  }

  handleGenreChange(event) {
    this.setState({genre: event.target.value});
  }

  handleSearchChange(event) {
    this.setState({suchtext: event.target.value});
  }

  handleRadioChange(event) {
    this.setState({suchkategorie: event.target.value})
  }

  loadFestivals() {
    console.log('loadFestivals');
    var request = new Request('http://alxndr13.nsupdate.info:3000/getFestivalList?name='+this.state.suchtext+'&genre='+this.state.genre, {
    	headers: new Headers({
    		'Content-Type': 'application/json'
    	}),
      method : 'get'
    });

      fetch(request)
          .then(result=>result.json()).then(j=> {
            var bezeichnungen = [];
            var ids = [];
            j.forEach(function(festival) {
              bezeichnungen.push(festival.Bezeichnung);
              console.log(festival.id);
              ids.push(festival.id);
            })
            console.log(j);
            this.props.changeStateData({festivals: bezeichnungen,
                                        festivalIds : ids});
            this.props.changeStateDisplay('festivalList');
          })
    }

  loadActs() {
    console.log('loadActs');
    var request = new Request('http://alxndr13.nsupdate.info:3000/getActOverview?name='+this.state.suchtext+'&genre='+this.state.genre, {
      headers: new Headers({
      	'Content-Type': 'application/json'
      }),
      method : 'get'
    });

      fetch(request)
          .then(result=>result.json()).then(j=> {
            console.log('fetch');
            var namen = [];
            j.forEach(function(act) {
              namen.push(act.Name);
              console.log(act.Name);
            })
            console.log('j: '+j);
            this.props.changeStateData({acts: namen});
            this.props.changeStateDisplay('actList');
          })
    }

  handleSubmit(event) {
    console.log('submit');
    if(this.state.suchkategorie==='Festival') {
      this.loadFestivals();
    } else if (this.state.suchkategorie==='Act') {
      this.loadActs();
    }
    console.log('endSubmit');
    alert('Sie haben für ihre Suche nach dem Stichwort "'+this.state.suchtext+'" das Genre "' + this.state.genre + '" und die Kategorie "'+this.state.suchkategorie+'" ausgewählt');
  }

  render() {
    return (
      <div className="suche">
       <form>

        <label className="auswahl">

        <input type="radio" value="Festival" checked={this.state.suchkategorie === 'Festival'}  onChange={this.handleRadioChange.bind(this)} /> Festival <br/>
        <input type="radio" value="Act" checked={this.state.suchkategorie === 'Act'} onChange={this.handleRadioChange.bind(this)} /> Act
            </label>

        <label className="suchtext">
        {/*<input type="text" defaultValue="Bitte geben Sie Ihre Suche ein"/>*/}
        <input type="text" className="such" placeholder='Bitte hier Suchtext eingeben' onChange={this.handleSearchChange.bind(this)}/>
             <button type="button" onClick={ (e) => {this.handleSubmit();}}>suchen</button>
            </label>

        <label className="genre">
          Genre: <select value={this.state.genre} onChange={this.handleGenreChange.bind(this)}>
            <option genre="Hip Hop">Hip Hop</option>
            <option genre="Rock">Rock</option>
            <option genre="Pop">Pop</option>
            <option genre="Rap">Rap</option>
          </select>
        </label>
        <br/>


        {/* auch eine Möglichkeit zum Methodenaufruf <input type="submit" value="Submit" />   */ }

            </form>
        </div>
    );
  }


  }



export default Suche;
