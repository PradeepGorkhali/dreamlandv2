import React from "react";
import "./Blogbanner.css";
import blogbanner from "../../Components/images/blogbanner.png";

export const Blogbanner = () => {
  return (
    <div>
      <div className="home__banner">
        <img src={blogbanner} alt="" />
      </div>
    </div>
  );
};
