import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Home/HomeAffiliated.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Newzealand

import new1 from './uniimages/Newzealand/new1.png'
import new2 from './uniimages/Newzealand/new2.png'
import new3 from './uniimages/Newzealand/new3.png'
import new4 from './uniimages/Newzealand/new4.png'


export const allCountryUniversity = [
  

  //New
  {
    id: 41,
    img: new1,
  },
  {
    id: 42,
    img: new2,
  },
  {
    id: 43,
    img: new3,
  },
  {
    id: 44,
    img: new4,
  }

];
const Newzealand = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  

 
  return (
    <>
      <div className="Home_Affiliated_Container">
        <div className="Carousel_Container">
          <Slider {...settings}>
            {allCountryUniversity.map((info, index) => {
              return (
                <div key={index}>
                  <img className="Carousel_item" src={info.img}/>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Newzealand;
