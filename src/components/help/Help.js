import React from "react";
import Subscribe from "./subscribe/Subscribe";
import "./Help.css";
import HelpFooter from "./helpfooter/Helpfooter";

const Help = () => {
  return (
    <div>
      <div className="help-style">
        <Subscribe />
      </div>
      <div>
        <HelpFooter />
      </div>
    </div>
  );
};

export default Help;
