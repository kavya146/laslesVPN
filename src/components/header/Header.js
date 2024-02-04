import React from "react";
import "./Header.css";
import LeftSection from "./leftsection/LeftSection";
import RightSection from "./rightsection/RightSection";
import CentreSection from "./centresection/CentreSection";

const Header = () => {
  return (
    <div className="header-style">
      <LeftSection />
      <CentreSection />
      <RightSection />
    </div>
  );
};

export default Header;
