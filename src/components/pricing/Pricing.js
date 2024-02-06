import React from "react";
import HeadSection from "./headsection/HeadSection";
import PlanSection from "./plansection/PlanSection";

const Pricing = () => {
  return (
    <div style={{ padding: "20px 0px 20px 0px" }}>
      <div>
        <HeadSection />
      </div>

      <div>
        <PlanSection />
      </div>
    </div>
  );
};

export default Pricing;
