import React, { Component } from 'react';
import '../styles/FestivalLink.css';


class FestivalLink extends Component {
  render() {
    return (
      <div className="FestivalLink">
        <p onClick={this.callFestivalDetailsComponent.bind(this)}>{this.props.festival}</p>
      </div>
    );
  }

  callFestivalDetailsComponent() {
    console.log("Festivaldetails");
    //call Details from Webservice
    console.log('loadFestivalDetails');
    console.log(this.props.id);
    var request = new Request('http://alxndr13.nsupdate.info:3000/getFestivalDetails?id='+this.props.id, {
      headers: new Headers({
      	'Content-Type': 'application/json'
      }),
      method : 'get'
      });

      fetch(request)
          .then(result=>result.json()).then(j=> {
            console.log(j);
            var titel = [];
            titel[0] = j[0].Bezeichnung;
            titel[1] = j[0].Ort;
            var beginn = j[0].Beginn.substr(0, 9);
            var ende = j[0].Ende.substr(0, 9);
            titel[2] = beginn+' - '+ende;
            console.log('test');
            console.log(titel);
            var bilderkeys = j[0].Bilder;
            var bilder = [];
            for(var index=0; index<bilderkeys.length; index++) {
              var request2 = new Request('http://alxndr13.nsupdate.info:3000/bildAbrufen', {
                headers: new Headers({
                	'Content-Type': 'application/json'
                }),
                method : 'POST',
                body: JSON.stringify({"Key":bilderkeys[index]})
                });

                fetch(request2)
                    .then(result=>result.json()).then(j=> {
                      console.log(j.src);
                      bilder.push(j.src);
                      this.props.changeStateData({festivalImages: bilder});
                      this.props.changeStateDisplayInBody("festivalDetails");
                    })
                }

              console.log('changestate!');
              this.props.changeStateData({festivalTitle: titel,
                                          festivalGenre: j[0].Genres,
                                          festivalLineup: j[0].Acts});

          })
    //pass Data to state of Body

    //render Component in Body
    console.log('changedisplay!');
    this.props.changeStateDisplayInBody("festivalDetails");
  }
}

export default FestivalLink;
