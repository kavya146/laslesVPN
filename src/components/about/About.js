import React from "react";
import "./About.css";
import userlogo from "./userslogo.svg";
import locationlogo from "./locationlogo.svg";
import serveslogo from "./serveslogo.svg";

const About = () => {
  return (
    <div className="container-style">
      <div className="about-style">
        <img src={userlogo}></img>
        <div>
          <p>
            <b>90+</b>
          </p>
          <p>Users</p>
        </div>
      </div>

      <div className="about-style">
        <img src={locationlogo}></img>
        <div>
          <p>
            <b>30+</b>
          </p>
          <p>Locations</p>
        </div>
      </div>

      <div className="about-style">
        <img src={serveslogo}></img>
        <div>
          <p>
            <b>50+</b>
          </p>
          <p>Serves</p>
        </div>
      </div>
    </div>
  );
};

export default About;
