import React, { Component } from 'react';
import '../../../index.css';


class Title extends Component {

  render() {
    return <h1 className="display-4">{this.props.children}</h1>
  }
}

export default Title;
