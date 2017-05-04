import React, { Component } from 'react';
import '../styles/ActLink.css';


class ActLink extends Component {
  render() {
    return (
      <div className="ActLink">
        <p onClick={this.callActDetailsComponent.bind(this)}>{this.props.act}</p>
      </div>
    );
  }

  callActDetailsComponent() {
    console.log("Actdetails");
    //call Details from Webservice
    console.log('loadActDetails');
    var request = new Request('http://alxndr13.nsupdate.info:3000/getActProfil?name='+this.props.act, {
      headers: new Headers({
      	'Content-Type': 'application/json'
      }),
      method : 'get'
      });

      fetch(request)
          .then(result=>result.json()).then(j=> {
            console.log(j);
            this.props.changeStateData({actName: j[0].Name,
                                        actDescription: j[0].Beschreibung,
                                        actGenres: j[0].Genres,
                                        actFestivals: j[0].Festivals});

          })
    //pass Data to state of Body

    //render Component in Body
    console.log('changedisplay!');
    this.props.changeStateDisplayInBody("actDetails");
  }
}

export default ActLink;
