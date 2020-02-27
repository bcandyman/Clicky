import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'

class Col extends Component {

  // randomizeColors = () => {
  //   const hue = Math.floor(Math.random() * 360);
  //   const pastel = 'hsl(' + hue + ', 100%, 80%)';

  //   return {backgroundColor:pastel}
  // }

  render() {
    return (
      <div style={this.props.randomColor} {...this.props}>
        {this.props.children}
      </div>
    );
  };
};

export default Col;
