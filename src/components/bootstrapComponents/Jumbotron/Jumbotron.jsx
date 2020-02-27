import React, { Component } from 'react';
import Title from './Title'
import Body from './Body'
import '../../../index.css';

class Jumbotron extends Component {

  render() {
    return (
      <div className={"jumbotron-fluid " + this.props.className}>
        <div className="container">
        <Title>Don't Forget your Click!!</Title> 
        <Body>Click on the characters below but be careful not to click on any one character more than once!</Body>
        </div>
      </div>
    )
  }
}

export default Jumbotron;
