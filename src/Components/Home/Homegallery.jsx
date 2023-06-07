import React from "react";
import homegalleryicon from "../../Components/images/homegalleryicon.png";
import { CarouselHome } from "./CarouselHome";

import "./Homegallery.css";

export const Homegallery = () => {
  return (
    <>
      <div className="homegallery__container">
        <div className="homegallery__header">
          <div className="homegallery__header_icon">
            <img src={homegalleryicon} alt="icon" />
            {/* icon */}
          </div>
          <div className="homegallery__header_heading">
            <h1>Explore Your Study Options Globally</h1>
            {/* heading */}
          </div>
          <div className="homegallery__header_description">
            <p>Explore Your Study Options Globally</p>
            {/* desc */}
          </div>
          {/* header */}
        </div>
        <div className="gallery">
          {/* galleryimages */}
          <CarouselHome />
        </div>
      </div>
    </>
  );
};
