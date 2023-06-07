import React from "react";
import { NavLink } from "react-router-dom";
import "../Home/Footer.css";
import { Icon } from "@iconify-icon/react";

import img1 from "../../Components/images/new.png";
const Footer = () => {
  return (
    <>
      <div className="Footer_Conatiner">
        <div className="Footer_Text_Conatiner">
          <div className="Footer_TextBox">
            <div className="Footer_img">
              <img src={img1} alt="" width="282" />
            </div>
            <div className="Footer_Para">
              <p>
                The Key to Your Successful International Study Experience,
                Dreamland Abroad Education
              </p>
            </div>
          </div>
          <div className="Footer_TextBox">
            <p className="Footer_Title">Explore</p>
            <p className="Footer_Heading"><a href="/">Home</a></p>
            <p className="Footer_Heading"><a href="/about">About Us</a></p>
            <p className="Footer_Heading"><a href="/abroad">Study Abroad</a></p>
            <p className="Footer_Heading"><a href="/test">Test Preparation</a></p>
            <p className="Footer_Heading"><a href="/service">Our Services</a></p>
            <p className="Footer_Heading"><a href="/blog">Our Blog</a></p>
          </div>
          <div className="Footer_TextBox">
            <p className="Footer_Follow_us">Follow us at</p>
            <div className="Footer_icon">
              <div className="Footer_icon_Box">
               <a href="https://www.facebook.com/dreamlandabroadeducation/" target="_blank"> <Icon icon="ic:baseline-facebook" width="34" /></a>
              </div>
              <div className="Footer_icon_Box">
              <a href="https://www.instagram.com/dreamlandabroad/" target="_blank"> <Icon icon="ph:instagram-logo" width="34" /></a>
              </div>
              <div className="Footer_icon_Box">
              <a href="tel:9851158448"><Icon icon="material-symbols:phone-enabled" width="34" /></a>
              </div>
              <div className="Footer_icon_Box">
              <a href="viber://chat?number=9851158448" target="_blank"><Icon icon="basil:viber-solid" width="34" /></a>
              </div>
              <div className="Footer_icon_Box">
              <a href="https://wa.me/9851158448" target="_blank"><Icon icon="ic:baseline-whatsapp" width="34" /></a>
              </div>
              <div className="Footer_icon_Box">
              <a href="mailto:  info@dreamland.edu.np" target="_blank"><Icon icon="carbon:email" width="34" height="35" /></a>
              </div>
            </div>
          </div>

          <div className="Footer_TextBox">
            <p className="Footer_Title">Our Address</p>
            <p className="Footer_Heading">Putalisadak-31, Kathmandu, Nepal</p>
            <p className="Footer_Heading">G.P.O.Box:.8975, E.P.C.: 5575</p>
            <p className="Footer_call_us">call us at:</p>
            <p className="Footer_Heading"><a href="tel:977-1-5347201">977-1-5347201</a></p>
          </div>
        </div>
      </div>
      <div className="Footer_Copyright_Conatiner">
        <p>
          designed and developed with passion by
          <NavLink to="#"> digital rodhi</NavLink> | copyright@2023DREAMLAND
        </p>
      </div>
    </>
  );
};

export default Footer;
