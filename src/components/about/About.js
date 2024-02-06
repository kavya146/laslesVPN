import React from "react";
import "./About.css";
import userlogo from "./userslogo.svg";
import locationlogo from "./locationlogo.svg";
import serveslogo from "./serveslogo.svg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-style">
        <div className="about-div">
          <img style={{ marginRight: "30px" }} src={userlogo}></img>
          <div>
            <p>
              <b>90+</b>
            </p>
            <p>Users</p>
          </div>
        </div>

        <div className="about-div">
          <img src={locationlogo}></img>
          <div>
            <p>
              <b>30+</b>
            </p>
            <p>Locations</p>
          </div>
        </div>

        <div className="about-div">
          <img src={serveslogo}></img>
          <div>
            <p>
              <b>50+</b>
            </p>
            <p>Serves</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
