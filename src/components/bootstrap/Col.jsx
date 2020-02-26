import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'

class Col extends Component {

  render() {
    return (
      <div  {...this.props}>
        {this.props.children}
      </div>
    );
  };
};

export default Col;
