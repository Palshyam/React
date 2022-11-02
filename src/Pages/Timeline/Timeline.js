import React from "react";
import TimelineData from './Timeline.json'

function Timeline() {
  return (
    <div className="timeline-main">
      <div className="container">
        <div className="Timeline-inner">
          <div className="heding">
            <span>Timeline</span>
            <h1>WORKING PERIOD</h1>
          </div>
          <div className="timeline_list">
            <ul>
            {TimelineData.map((Timeline) => {
              return(
              <li key={Timeline.id}>
                <div className="list_inner">
                  <span>{Timeline.date}</span>
                </div>
                <div className="list_inner">
                  <span>{Timeline.Name}</span>
                </div>
                <div className="list_inner">
                  <span>{Timeline.location}</span>
                </div>
              </li>
              )
        })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
