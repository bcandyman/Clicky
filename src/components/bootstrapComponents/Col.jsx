import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'

class Col extends Component {

  render() {
    return (
      <div style={this.props.randomColor} {...this.props}>
        {this.props.children}
      </div>
    );
  };
};

export default Col;
