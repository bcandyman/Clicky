import React, { Component } from "react";
import "../Image/image.css";

class Image extends Component {
  
  render() {
      return <img src={this.props.src} alt={this.props.name}></img>
  };
};

export default Image;
