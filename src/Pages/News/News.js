import React from "react";
import Blog from "./Blog";

function News() {
  return (
    <div className="News-section">
      <div className="container">
        <div className="News-section-inner">
          <div className="heding">
            <span>NEWS</span>
            <h1>Latest Blogs</h1>
            <div className="text">
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
            <Blog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
