import React from "react";
import "./RightFeature.css";
import logo from "./logo.svg";

const RightFeature = () => {
  return (
    <div className="right-style">
      <h1>
        We Provide Many <br></br>Features You Can Use
      </h1>

      <p>
        You can explore the features that we provide with fun and<br></br> have
        their own functions each feature.
      </p>

      <p>
        <img className="img-style" src={logo}></img> Powerfull online
        protection.
      </p>
      <p>
        <img className="img-style" src={logo}></img> Internet without borders.
      </p>
      <p>
        <img className="img-style" src={logo}></img> Supercharged VPN
      </p>
      <p>
        <img className="img-style" src={logo}></img> No specific time limits.
      </p>
    </div>
  );
};

export default RightFeature;
