import React, { Component } from 'react';
import NavBarLink from './navbarLink.js';
import NavBar from './navbar.js';

class NavBarItem extends Component {
  constructor(props) {
    super(props);
  }

    generateLink() {
    //Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
    //Single responsibility principles tell us that it our "Item" should not handle this.
    return <NavBarLink changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)} url={this.props.url} img={this.props.img} text={this.props.text}/>;
  }
    generateSubmenu() {
    //We generate a simple Navbar (the parent).
    //Spoilers: it takes items as its argument.
    return <NavBar items={this.props.submenu}/>;
  }
  generateContent() {
    var content = [this.generateLink.bind(this)];
    console.log('content: '+content);
    if(this.props.submenu) {
      //If there is a submenu in our data for this item
      //We add a generated Submenu to our content
      content.push(this.generateSubmenu());
    }
    return content;
  }

    render() {
    var content = this.generateContent();
    return (
      <li>
        {content}
      </li>
    );
    }
}

export default NavBarItem;
