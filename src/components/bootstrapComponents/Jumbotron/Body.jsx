import React, { Component } from 'react';
import '../../../index.css';


class Body extends Component {

  render() {
    return <p className="lead">{this.props.children}</p>
  }
}

export default Body;
