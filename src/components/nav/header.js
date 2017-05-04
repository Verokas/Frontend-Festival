import React, { Component } from 'react';
//importieren der Suchfunktion
import Suche from './search.js';
import NavBar from './navbar.js';
import '../../styles/header.css';
import suche from '../../pics/search.svg';
import add from '../../pics/add.svg';
import menu from '../../pics/menu.svg';
import NavBarLink from './navbarLink.js';



//dynamische Menü-Felder erzeugen
 var navdata = [
  {
    "text": "Suche",
    "url": "suche",
    "img": suche  //"/../../pics/search.svg"
  },
  {
    "text": "Hinzufügen",
    "url": "add",
    "img": add,
    "submenu": [
      {
        "text": "Festival",
        "url": "#/festival"
      },
      {
        "text": "Act",
        "url":"#/act"
      }
    ]
  },
  {
    "text": "Menü",
    "url": "menu",
    "img": menu,
    "submenu": [
      {
        "text": "Festivalübersicht",
        "url": "festivals"
      },
      {
        "text": "Actübersicht",
        "url":"acts",
        "submenu": [
          {
            "text": "hinzufügen",
            "url": "#"
          }
        ]
      }
    ]
  }
]

class Header extends Component {
  constructor(props) {
    super(props);
  }

  callAddFestivalComponent() {
    console.log('callAddFestivalComponent clicked!');
    this.props.changeStateDisplayInBody('addFestival');
  }

  callAddActComponent() {
    console.log('callAddActComponent clicked!');
    this.props.changeStateDisplayInBody('addAct');
  }

    render() {
    return (
        <div className="header">
        <div className="navbar">
        <h2>Festival Guide</h2>
        <NavBar items={navdata} changeStateDisplayInBody={this.props.changeStateDisplayInBody.bind(this)}></NavBar>
        <p>______________________</p>
        <p onClick={this.callAddActComponent.bind(this)}>Act hinzufügen</p>
        <p onClick={this.callAddFestivalComponent.bind(this)}>Festival hinzufügen</p>
        </div>
        {/*<button id="nav-image"> <img src={menu} alt="menu"/> </button>*/}
        <Suche changeStateDisplay={this.props.changeStateDisplayInBody} changeStateData={this.props.changeStateData} ></Suche>
        </div>
    );
  }
}

export default Header;
