import React from "react";
import LeftContainer from "./leftcontainer/LeftContainer";
import RightContainer from "./rightcontainer/RightContainer";
import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="container-style">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};

export default MainContainer;
