import React from "react";
import homebanner from "../../Components/images/testprepimg.png";
import "./Testprepbanner.css";

export const Testprepbanner = () => {
  return (
    <div>
      <div className="home__banner">
        <img src={homebanner} alt="" />
      </div>
    </div>
  );
};
