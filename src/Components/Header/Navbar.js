import React, { useState } from "react";
import Logo from "./Logo";


import {NavLink} from 'react-router-dom'


export default function Navbar() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="container">
      <div className="navigation-inner">
          <Logo />
          <div className="trigger">
            <div
              className={
                isActive
                  ? "hamburger hamburger--slider"
                  : "hamburger hamburger--slider active"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner">
                  <button
                    className="toggle-button"
                    onClick={handleToggle}
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <ul className={isActive ? "hide" : "show"}>
            <li>
              <NavLink exact activeClassName="current" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/Skill">Skill</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/timeline">Timeline</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/price">Price</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/news">News</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/contact">Contact</NavLink>
            </li>
          </ul>
      </div>
    </div>
  );
}
