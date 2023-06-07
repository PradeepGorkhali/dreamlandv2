import React from "react";
import homebanner from "../../Components/images/homebanner.png";
import "./Home.css"


export const Banner = () => {
  return (
    <div>
     <div className="home__banner">
        <img src={homebanner} alt=""/>
      </div>
    </div>
  );
};
