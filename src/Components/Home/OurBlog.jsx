import React from "react";
import "../Home/OurBlog.css";
import img1 from "../../Components/images/OurBlog_Card_Img.png";
const OurBlog = () => {
  return (
    <>
      <div className="OurBlog_Title">
        <p>our recent blog</p>
      </div>
      <div className="Home_Ourblog_Container">
        <div className="Home_Ourblog_Card">
          <div className="Ourblog_Card_Img">
            <img src={img1} alt="" width="398" height="300" />
          </div>
          <div className="Ourblog_Card_Title">
            <div className="Ourblog_Card_Heading">
              <p>
                Unlocking the Mystery:A Comprehensive Guide to Meeting GPA
                Requirements for................
              </p>
            </div>
            <div className="Ourblog_Card_Paragraph">
              <p>
                Studying in Australia from Nepal can be a transformative
                journey, providing immense opportunities for personal and
                academic growth. However, before you embark on
              </p>
            </div>
            <div className="Ourblog_Card_Button">
              <a href="/blog"><button className="Ourblog_ReadMore_Btn">Read More</button></a>
            </div>
          </div>
        </div>
        {/* <div className="Home_Ourblog_Card">
          <div className="Ourblog_Card_Img">
            <img src={img1} alt="" width="398" height="300" />
          </div>
          <div className="Ourblog_Card_Title">
            <div className="Ourblog_Card_Heading">
              <p>
                Unlocking the Mystery:A Comprehensive Guide to Meeting GPA
                Requirements for................
              </p>
            </div>
            <div className="Ourblog_Card_Paragraph">
              <p>
                Studying in Australia from Nepal can be a transformative
                journey, providing immense opportunities for personal and
                academic growth. However, before you embark on
              </p>
            </div>
            <div className="Ourblog_Card_Button">
              <button className="Ourblog_ReadMore_Btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="Home_Ourblog_Card">
          <div className="Ourblog_Card_Img">
            <img src={img1} alt="" width="398" height="300" />
          </div>
          <div className="Ourblog_Card_Title">
            <div className="Ourblog_Card_Heading">
              <p>
                Unlocking the Mystery:A Comprehensive Guide to Meeting GPA
                Requirements for................
              </p>
            </div>
            <div className="Ourblog_Card_Paragraph">
              <p>
                Studying in Australia from Nepal can be a transformative
                journey, providing immense opportunities for personal and
                academic growth. However, before you embark on
              </p>
            </div>
            <div className="Ourblog_Card_Button">
              <button className="Ourblog_ReadMore_Btn">Read More</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default OurBlog;
