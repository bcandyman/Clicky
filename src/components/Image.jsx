import React, { Component } from "react";

class Image extends Component {

  style = {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "auto",
    width: "auto",
  }

  render() {
    return <img style={this.style} src={this.props.src} alt={this.props.name}></img>
  };
};

export default Image;
