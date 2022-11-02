import React from "react";
import SkillBars from './SkillBars'
import skillimage from './Images/skillimage.jpg'

function Skill() {
  return (
    <div className="skill-section">
      <div className="container">
        <div className="skill-section-inner">
          <div className="left-side">
            <div className="heding">
              <span>Skills</span>
              <h1>PROGRAMMING SKILLS</h1>
              <div className="text">
                <p>
                  For more than 20 years our experts have been accomplishing
                  enough with modern Web Development, new generation web and app
                  programming language.
                </p>
              </div>
          
            </div>
          <div className="skillbar_section">
          <SkillBars />
          </div>
          </div>
          <div className="right-side-img">
        <div className="image">
          <img src={skillimage} alt="skillimage" />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;