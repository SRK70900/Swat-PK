import SwatImg1 from "../assets/swat1.jpg";
import SwatImg2 from "../assets/swat2.jpg";
import SwatImg3 from "../assets/swat3.jpg";
import SwatImg4 from "../assets/swat4.jpg";
import "./DestinationStyles.css";
import React, { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="image of Swat" />
          <img src={this.props.img2} alt="image of Swat" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
