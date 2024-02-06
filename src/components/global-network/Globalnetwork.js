import React from "react";
import Header from "./networkheader/Header";
import Map from "./networkmap/Map";
import Sponsor from "./sponsor/Sponsor";
import "./Globalnetwork.css";

const GlobalNetwork = () => {
  return (
    <div className="global-style">
      <Header />
      <Map />
      <Sponsor />
    </div>
  );
};

export default GlobalNetwork;
