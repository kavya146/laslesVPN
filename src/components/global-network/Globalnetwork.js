import React from "react";
import Header from "./networkheader/Header";
import Map from "./networkmap/Map";
import Sponsor from "./sponsor/Sponsor";

const GlobalNetwork = () => {
  return (
    <div style={{ padding: "20px 0px 20px 0px" }}>
      <Header />
      <Map />
      <Sponsor />
    </div>
  );
};

export default GlobalNetwork;
