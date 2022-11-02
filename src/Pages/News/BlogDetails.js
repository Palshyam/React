import React from "react";
import { Link } from "react-router-dom";

function BlogDetails(props) {
  return (
    <div className="iknow_tm_modalbox opened">
      <div className="box_inner">
        <div className="close">
          <button onClick={() => props.close()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </button>
        </div>
        <div className="description_wrap">
          <div className="news_informations">
            <div className="image">
            <Link to="/">{<img src={props.Data.img} alt="2" />}</Link>
            <div className="post-meta">
            By <Link to={"name"}>{props.Data.name}</Link> <span>{props.Data.time}</span>
          </div>
            </div>
            <div className="details">
              <span>UI Design</span>
              <h3>{props.Data.tittle}</h3>
            </div>
            <div className="text">
              <p>{props.Data.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
