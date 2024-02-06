import React from "react";
import HeadSection from "./headsection/HeadSection";
import PlanSection from "./plansection/PlanSection";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-style">
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
