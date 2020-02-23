import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Row extends Component {
  
  render() {
    return <div className="row">{this.props.children}</div>
  };
};

export default Row;
