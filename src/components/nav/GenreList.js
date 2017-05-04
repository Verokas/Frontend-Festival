import React, { Component } from 'react';
import _ from 'lodash';

// GenreList Komponente noch nicht eingepflegt, da nicht funktionsfähig
class GenreList extends Component {

constructor(){
    super();
    this.state = {} ;
}
componentWillMount() {
    this.search();
}

updateSearch(){
    this.search(this.refs.query.value);
}

  render() {
        var acts = _.map(this.state.acts, (acts) => { return <li>{act.genre.items}</li>; });

    return <div className="GenreList">
      <input ref ="query" onChange = { (e) => { this.updateSearch(); } } type = "text"/>
        <ul>{acts}</ul>
        </div>;
  }
search(query = "act"){
            /*API noch nicht vorhanden*/
            var url = 'http://www.festivalguide.com/getGenreList?act=${query}';
        Request.get(url).then((response) => {
            this.setState({
                acts: response.body.Search,
                total: response.body.totalResults
            });
        });

        }

                         }

export default GenreList;
