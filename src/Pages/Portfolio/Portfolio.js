import React from "react";
import Work from "./Work";

function Portfolio() {
  return (
    <div className="Portfolio-section">
      <div className="container">
        <div className="Portfolio-section-inner">
          <div className="heding">
            <span>WORK</span>
            <h1>My Awesome Works</h1>
            <div className="text">
              <p>
              I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
              </p>
            </div>
          </div>
          <Work />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
