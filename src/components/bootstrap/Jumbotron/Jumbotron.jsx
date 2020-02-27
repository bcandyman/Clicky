import React, { Component } from 'react';
import '../../../index.css';

class Jumbotron extends Component {

  render() {
    return (
      <div className={"jumbotron-fluid " + this.props.className}>
        <div className="container">
        <Title />
        <Body />
        </div>
      </div>
    )
  }
}

class Title extends Component {

  render() {
    return <h1 className="display-4">Don't Forget your Click!!</h1>
  }
}

class Body extends Component {

  render() {
    return <p className="lead">Click on the characters below but be careful not to click on any one character more than once!</p>
  }
}

export default Jumbotron;