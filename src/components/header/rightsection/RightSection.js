import React from "react";
import "./RightSection.css";

const RightSection = () => {
  return (
    <div className="righthead">
      <div style={{ paddingRight: "20px", fontWeight: "600" }}>SignIn</div>
      <button
        type="button"
        style={{
          borderRadius: "20px",
          width: "100px",
          height: "30px",
          color: "red",
          border: "1px solid red",
          backgroundColor: "transparent",
        }}
      >
        SignUp
      </button>
    </div>
  );
};

export default RightSection;
