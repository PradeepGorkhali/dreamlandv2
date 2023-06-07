import React from "react";
import homebanner from "../Components/images/aboutbanner.png";
import { Meetteam } from "../Components/AboutUs/Meetteam";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <>
      <div>
        <div className="home__banner">
          <img src={homebanner} alt="" />
        </div>
        <div className="about__description">
          <p>
            We have authorized representatives of foreign universities,
            registered with the government of Nepal. We believe that
            cross-cultural education is essential for a globalized world and are
            proud to be popular among career-oriented students across the
            country. We are a team of professionals dedicated to providing
            excellent support to deserving candidates and delivering our
            services.  Our goal is to foster knowledge and unleash the potential
            within individuals, leading to a prosperous nation with a thriving
            educational environment. We have gained the trust and support of
            numerous career-driven students from all corners of the country, and
            it is a matter of great pride for us. Our team consists of highly
            skilled professionals who are dedicated to delivering top-notch
            support to deserving candidates. Our goal is to nurture knowledge
            and help unlock the potential within individuals, laying the
            foundation for a prosperous nation with a thriving educational
            environment. We believe that education is not just about acquiring
            degrees but about cultivating one's intellectual and personal
            growth. That is why we are committed to providing not just promises
            but real results and services to our students. We strive to make the
            journey of studying abroad a smooth and enriching experience for our
            clients and to be a trusted partner in their academic pursuits.
          </p>
        </div>

        <Meetteam />
      </div>
    </>
  );
};
