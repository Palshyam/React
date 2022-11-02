import React from "react";
import PricingData from "./Pricing.json";

function Pricing() {
  return (
    <div className="sticky_section">
      <ul>
        {PricingData.map((Pricing) => {
          return (
            <li key={Pricing.id}>
              <div className="list_inner">
                <div className="title">
                  <span>{Pricing.name}</span>
                </div>
                <div className="cost">
                  <span>{Pricing.cost}</span>
                </div>
                <span className="icon"> {Pricing.icon}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pricing;
