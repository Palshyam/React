import React from "react";
import Pricing from "./Pricing";

function Price() {
  return (
    <div className="pricing">
      <div className="container">
        <div className="pricing-inner">
          <div className="left-side">
            <div className="heding">
              <span>Pricing</span>
              <h1>SERVICE PRICES</h1>
              <div className="text">
                <p>
                  For more than 20 years our experts have been accomplishing
                  enough with modern Web Development, new generation web and app
                  programming language.
                </p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <Pricing />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
