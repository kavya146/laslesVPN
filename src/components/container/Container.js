import React from "react";
import LeftContainer from "./leftcontainer/LeftContainer";
import RightContainer from "./rightcontainer/RightContainer";
import "./Container.css";

const Container = () => {
  return (
    <div className="container-style">
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default Container;
