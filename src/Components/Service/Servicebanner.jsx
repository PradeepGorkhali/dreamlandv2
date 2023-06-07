import React from "react";
import servicebanner from "../../Components/images/servicebanner.png";
import "./Servicebanner.css";

export const Servicebanner = () => {
  return (
    <div>
      <div className="home__banner">
        <img src={servicebanner} alt="" />
      </div>
    </div>
  );
};
