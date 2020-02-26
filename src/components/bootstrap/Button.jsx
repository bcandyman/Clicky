import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

class Button extends Component {

  render() {
    return <button
      className={'btn ' + this.props.className}
      data-id={this.props.dataId}
      data-character-name={this.props.dataName}
      onClick={this.props.handleOnClick.bind(this, this.props.dataName)}>
      {this.props.children}
    </button>;
  }
};

export default Button;
