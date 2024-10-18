import { Component } from "react";
import TuguPahlawan from "../assets/TuguPahlawan.jpeg";
import KebunBinatang from "../assets/KebunBinatang.jpg";
import Monkasel from "../assets/Monkasel.jpg";
import Suramadu from "../assets/Suramadu.jpg";
import "../components/DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>
            {this.props.text}
          </p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="image" />
          <img src={this.props.img2} alt="image" />
        </div>
      </div>

    );
  }
}

export default DestinationData;
