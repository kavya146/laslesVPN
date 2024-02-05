import React from "react";
import logo from "./maplogo.svg";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-style">
      <img className="centered-img" src={logo}></img>
    </div>
  );
};

export default Map;
