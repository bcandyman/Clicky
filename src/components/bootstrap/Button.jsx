import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends Component {

  render() {
    return <button
      className='btn'
      data-id={this.props.dataId}
      onClick={this.props.handleOnClick.bind(this, this.props.dataId)}>
      {this.props.children}
    </button>;
  }
};

export default Button;

