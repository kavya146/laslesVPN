import React from "react";
import "./Header.css";
import LeftSection from "./leftsection/LeftSection";
import RightSection from "./rightsection/RightSection";
import CentreSection from "./centresection/CentreSection";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <LeftSection />
        <CentreSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Header;
