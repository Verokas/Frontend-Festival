import React, { Component } from 'react';

class NavBarLink extends Component {
    render() {
   return (
       <div>
      <a href={this.props.url}> <img src={this.props.img}/> {this.props.text} </a>
       </div>

    );
    }
}

export default NavBarLink;
