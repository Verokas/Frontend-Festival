import React, { Component } from 'react';
import NavBarItem from './navbarItem.js';
import '../../styles/menu.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

 generateItem(item) {
    return <NavBarItem changeStateDisplay={this.props.changeStateDisplayInBody.bind(this)} text={item.text} img={item.img} url={item.url} submenu={item.submenu} />
  }

    render() {
      console.log(this.props);
      var items = [];
      this.props.items.map((item, index) => {
        items.push(<NavBarItem changeStateDisplayInBody={this.props.changeStateDisplayInBody} text={item.text} img={item.img} url={item.url} submenu={item.submenu}></NavBarItem>);
      });
      console.log(items);
    return (
      <ul className="menu">

          {items}

      </ul>
    );
    }
}

export default NavBar;
