import React from "react";
import logo from "./logo.svg";
import "./LeftSection.css";

const LeftSection = () => {
  return (
    <div className="lefthead">
      <div className="logo-style"></div>
      <img src={logo}></img>
      <div className="lefthead-name">
        Lasles<span style={{ fontWeight: "boldest" }}>VPN</span>
      </div>
    </div>
  );
};

export default LeftSection;
