import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import BlogData from "./Post.json";

function Blog() {
  const [view, setView] = useState(false);
  const [data,setData]=useState("")
  const open =(data)=>{
    setData(data)
    setView(true)
  }
  const close =()=>{
    setView(false)
  }
  return (
    <div className="blog-main">
      {BlogData.map((Post) => {
        return (
          <div key={Post.id} className="blog-item">
            <div className="blog-img">
              <Link to={"img"}>
                <img src={Post.img} alt="" />
              </Link>
              <div className="post-meta">
                By <Link to={"name"}>{Post.name}</Link> <span>{Post.time}</span>
              </div>
            </div>
            <div className="blog-content">
              <h4>
                <Link to={"tittle"}>{Post.tittle}</Link>
              </h4>
              <p>{Post.content}</p>
              <button className="theme-bg more" onClick={()=>open(Post)}>
                {Post.button}
              </button>
            </div>
          </div>
        );
      })}
      {view === true && <BlogDetails close={close} Data={data} />}
    </div>
  );
}

export default Blog;
