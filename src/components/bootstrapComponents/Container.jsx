import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Container extends Component {
  
  render() {
      return <div className='container pb-5'>{this.props.children}</div>;
  };
};

export default Container;
