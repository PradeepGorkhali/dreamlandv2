import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Home/HomeAffiliated.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import usa1 from './uniimages/USA/usa1.png'
import usa2 from './uniimages/USA/usa2.png'
import usa3 from './uniimages/USA/usa3.png'
import usa4 from './uniimages/USA/usa4.png'
import usa5 from './uniimages/USA/usa5.png'
import usa6 from './uniimages/USA/usa6.png'
import usa7 from './uniimages/USA/usa7.png'
import usa8 from './uniimages/USA/usa8.png'




export const allCountryUniversity = [

  // USA
  {
    id: 33,
    img: usa1,
  },
  {
    id: 34,
    img: usa2,
  },
  {
    id: 35,
    img: usa3,
  },
  {
    id: 36,
    img: usa4,
  },
  {
    id: 37,
    img: usa5,
  },
  {
    id: 38,
    img: usa6,
  },
  {
    id: 39,
    img: usa7,
  },
  {
    id: 40,
    img: usa8,
  },



];
const USA = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
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

export default USA;
