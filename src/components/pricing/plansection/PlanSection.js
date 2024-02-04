import React from "react";
import "./PlanSection.css";
import logo from "./planlogo.svg";
import tick from "./ticklogo.svg";

const PlanSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "30px",
      }}
    >
      <div className="box-style">
        <div className="logo-style">
          <img src={logo}></img>
        </div>

        <h3 style={{ margin: "30px 0px 0px 90px" }}>Free Plan</h3>

        <div>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>No Traffic Logs</li>
            <li>Works On All Devices</li>
          </ul>
        </div>
      </div>

      <div className="box-style">
        <div className="logo-style">
          <img src={logo}></img>
        </div>
        <h3 style={{ margin: "30px 0px 0px 80px" }}>Standard Plan</h3>
        <div>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>Yes Traffic Logs</li>
            <li>Works On All Devices</li>
            <li>Connect Anyware</li>
          </ul>
        </div>
      </div>

      <div className="box-style">
        <div className="logo-style">
          <img src={logo}></img>
        </div>
        <h3 style={{ margin: "30px 0px 0px 80px" }}>Premium Plan</h3>
        <div>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>Yes Traffic Logs</li>
            <li>Works On All Devices</li>
            <li>Connect Anyware</li>
            <li>Get New Features</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
