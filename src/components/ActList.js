import React, { Component } from 'react';
import '../styles/ActList.css';
import ActLink from './ActLink';
import InfiniteScroll from 'react-infinite-scroller';

class ActList extends Component {

  constructor(props) {
    super(props);
    this.state = {hasMore: true};
  }

  render() {
      const loader = <div className="loader">Loading ...</div>;

      var items = [];
      this.props.acts.map((act, i) => {
          items.push(
            <ActLink act={act} changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)} changeStateData={this.props.changeStateData.bind(this)} key={i}/>
          );
      });

      return (
        <div className="ActList">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadActs.bind(this)}
            hasMore={this.state.hasMore}
            loader={<div className="loader">Loading ...</div>}
            >
              {items}
          </InfiniteScroll>
        </div>
      );
  }

  loadActs() {
    var acts = this.props.acts;
    if(acts.length > 100) {
      var hasMore = this.state.hasMore;
      hasMore = false;
      this.setState({hasMore:hasMore});
    }

    acts.push('nextAct');
    var data = {'acts' : acts}
    this.props.changeStateData(data);


    //this.setState({acts: acts});


  }
}

export default ActList;
