import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Home/HomeAffiliated.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aus1 from './uniimages/Australia/aus1.png'
import aus2 from './uniimages/Australia/aus2.png'
import aus3 from './uniimages/Australia/aus3.png'
import aus4 from './uniimages/Australia/aus4.png'
import aus5 from './uniimages/Australia/aus5.png'
import aus6 from './uniimages/Australia/aus6.png'
import aus7 from './uniimages/Australia/aus7.png'
import aus8 from './uniimages/Australia/aus8.png'
import aus9 from './uniimages/Australia/aus9.png'
import aus10 from './uniimages/Australia/aus10.png'
import aus11 from './uniimages/Australia/aus11.png'
import aus12 from './uniimages/Australia/aus12.png'
import aus13 from './uniimages/Australia/aus13.png'
import aus14 from './uniimages/Australia/aus14.png'
import aus15 from './uniimages/Australia/aus15.png'
import aus16 from './uniimages/Australia/aus16.png'
import aus17 from './uniimages/Australia/aus17.png'
import aus18 from './uniimages/Australia/aus18.png'
import aus19 from './uniimages/Australia/aus19.png'
import aus20 from './uniimages/Australia/aus20.png'
import aus21 from './uniimages/Australia/aus21.png'
import aus22 from './uniimages/Australia/aus22.png'
import aus23 from './uniimages/Australia/aus23.png'
import aus24 from './uniimages/Australia/aus24.png'
import aus25 from './uniimages/Australia/aus25.png'
import aus26 from './uniimages/Australia/aus26.png'
import aus27 from './uniimages/Australia/aus27.png'
import aus28 from './uniimages/Australia/aus28.png'
import aus29 from './uniimages/Australia/aus29.png'
import aus30 from './uniimages/Australia/aus30.png'
import aus31 from './uniimages/Australia/aus31.png'
import aus32 from './uniimages/Australia/aus32.png'
// USA

import usa1 from './uniimages/USA/usa1.png'
import usa2 from './uniimages/USA/usa2.png'
import usa3 from './uniimages/USA/usa3.png'
import usa4 from './uniimages/USA/usa4.png'
import usa5 from './uniimages/USA/usa5.png'
import usa6 from './uniimages/USA/usa6.png'
import usa7 from './uniimages/USA/usa7.png'
import usa8 from './uniimages/USA/usa8.png'

//Newzealand

import new1 from './uniimages/Newzealand/new1.png'
import new2 from './uniimages/Newzealand/new2.png'
import new3 from './uniimages/Newzealand/new3.png'
import new4 from './uniimages/Newzealand/new4.png'


export const allCountryUniversity = [
  {
    id: 1,
    img: aus1,
  },
  {
    id: 2,
    img: aus2,
  },
  {
    id: 3,
    img: aus3,
  },
  {
    id: 4,
    img: aus4,
  },
  {
    id: 5,
    img: aus5,
  },
  {
    id: 8,
    img: aus8,
  },
  {
    id: 6,
    img: aus6,
  },
  {
    id: 7,
    img: aus7,
  },
  {
    id: 9,
    img: aus9,
  },
  {
    id: 10,
    img: aus10,
  },
  {
    id: 11,
    img: aus11,
  },
  {
    id: 12,
    img: aus12,
  },
  {
    id: 13,
    img: aus13,
  },{
    id: 14,
    img: aus14,
  },{
    id: 15,
    img: aus15,
  },{
    id: 16,
    img: aus16,
  },{
    id: 17,
    img: aus17,
  },{
    id: 18,
    img: aus18,
  },{
    id: 19,
    img: aus19,
  },{
    id: 20,
    img: aus20,
  },{
    id: 21,
    img: aus21,
  },
  {
    id: 22,
    img: aus22,
  },
  {
    id: 23,
    img: aus23,
  },
  {
    id: 24,
    img: aus24,
  },{
    id: 25,
    img: aus25,
  },{
    id: 26,
    img: aus26,
  },{
    id: 27,
    img: aus27,
  },{
    id: 28,
    img: aus28,
  },{
    id: 29,
    img: aus29,
  },{
    id: 30,
    img: aus31,
  },{
    id: 32,
    img: aus32,
  },
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
const HomeAffiliated = () => {
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

export default HomeAffiliated;
