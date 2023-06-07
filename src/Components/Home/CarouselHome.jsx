import React from "react";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
import { items } from "./Carouseldata";
import "./Carousel.css";

export const CarouselHome = () => {
  return (
    <>
      <div className="home__overlay__carousel__container">
        <Carousel cols={3} rows={1} gap={10} loop>
          {items.map((data, index) => {
            return (
              <Carousel.Item key={index}>
                <div class="container">
                  <img src={data.img} alt="australia" class="image" />
                  <div class="overlay">
                    <div class="text">
                      {data.paragraph}
                      <br />
                      <Link to={data.url} className="Read">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
