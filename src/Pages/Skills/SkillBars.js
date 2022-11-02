import React from 'react';

const SKILLS = [
  {type: "HTML", level: 100},
  {type: "CSS", level: 98},
  {type: "JavaScript", level: 87},
  {type: "jQuery", level: 92},
  {type: "BootStrap", level: 90},
  {type: "Photoshop", level: 100},
  {type: "Angular.js", level: 50},
  {type: "React.js", level: 25},
  {type: "PHP", level: 36},
  {type: "Ruby", level: 20}
];

class SkillBars extends React.Component{
  constructor(props) {
    super(props);
    this.state = { collapsed: true };       
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 3000);
  }
  render() {
    const { collapsed } = this.state;
    
     return (
      <div id="app" className={`${collapsed ? 'collapsed' : ''}`}>
      <ul className="skills">
        {SKILLS.map((skill, id) => 
          <li
            key={skill.type}
            style={{ width: `${skill.level}%`}}
          >
            <p>{skill.type}<span>{skill.level}</span></p>
          </li>
        )}
      </ul>
    </div>
  )
}
  
}

export default SkillBars