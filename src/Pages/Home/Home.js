import React, { useState } from "react";
import home from "./Images/home.jpg";

import one from "./Images/one.jpg";
import two from "./Images/two.jpg";
import three from "./Images/three.jpg";
import banner from "./Images/banner.jpg";


import TypeWriter from "./TypeWriter";

import { Link } from "react-router-dom";
function Home() {
  const [id,setId] = useState('')
  const onButtonClick = () => {
    fetch("Shyam.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Shyam.pdf";
        alink.click();
      });
    });
  };
  const handleId = (data) => {
    console.log("Data is", data);
    setId(data)
  };

  let bgImage = ''
  if(id===1){
    bgImage = one
  }else if(id===2){
    bgImage= two
  }
  else if(id===3){
    bgImage= three
  }
  else{
    bgImage= banner
  }
  return (
    <div className="home-section">
      <div className="container">
        <div className="home-section-inner">
          <div className="banner-descreption">
            <h4>Bernard Smith</h4>
            <h5>CREATIVE DESIGNER BASED IN JAPAN</h5>
            <div className="banner-text">
              {" "}
              A FREELANCE WEB <TypeWriter />
            </div>
            <div className="services">
              <ul>
              
                <li>
                  <Link to="/" onClick={()=>handleId(1)}>
                    <img className="image" src={one} alt="one" />
                    <span>Web Development</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={()=>handleId(2)}>
                    <img className="image" src={two} alt="two" />
                    <span>Digital Marketing</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={()=>handleId(3)}>
                    <img className="image" src={three} alt="three"  />
                    <span>Graphic Design</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </Link>
                </li>
                <li>
                <Link to="/" onClick={()=>handleId(4)}>
                <img className="image" src={banner} alt="banner"  />
                <span></span>
                </Link>
                </li>
              </ul>
            </div>
            <div className="short_info">
              <ul>
                <li>
                  <div className="list_inner">
                    <h3>10+</h3>
                    <span>
                      Years of
                      <br />
                      Experience
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>3K+</h3>
                    <span>
                      Happy
                      <br />
                      Customers
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="btn-bar">
              <Link to="/portfolio" className="m-btn m-btn-theme">
                My Portfolio
              </Link>
              <button onClick={onButtonClick} className="m-btn m-btn-theme">
                Download CV
              </button>
            </div>
          </div>
          <div className="banner-img">
            <img src={home} alt="home" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            ></div>
            <div className="shape"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
