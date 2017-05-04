import React, { Component } from 'react';
import '../styles/FestivalList.css';
import FestivalLink from './FestivalLink';
import InfiniteScroll from 'react-infinite-scroller';

class FestivalList extends Component {

  constructor(props) {
    super(props);
    this.state = {festivals:this.props.festivals,
                  hasMore : true};
  }

  render() {
      const loader = <div className="loader">Loading ...</div>;

      var items = [];
      this.props.festivals.map((festival, i) => {
          items.push(
            <FestivalLink festival={festival} id={this.props.ids[i]} changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)} changeStateData={this.props.changeStateData.bind(this)} key={i}/>
          );
      });

      return (
        <div className="FestivalList">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadFestivals.bind(this)}
            hasMore={this.state.hasMore}
            loader={<div className="loader">Loading ...</div>}
            >
              {items}
          </InfiniteScroll>
        </div>
      );
  }

  loadFestivals() {
    var festivalss = this.state.festivals;
    if(festivalss.length > 100) {
      var hasMores = this.state.hasMore;
      hasMores = false;
      this.setState({hasMore:hasMores});
    }

    festivalss.push('nextFestival');
    this.setState({festivals:festivalss});


  }
}

export default FestivalList;
