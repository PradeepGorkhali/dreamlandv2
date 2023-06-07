import React from "react";
import chooseicon from "../../Components/images/choose.png";
import chooseicon1 from "../../Components/images/chooseicon1.png";
import chooseicon2 from "../../Components/images/chooseicon2.png";
import chooseicon3 from "../../Components/images/chooseicon3.png";
import chooseicon4 from "../../Components/images/chooseicon4.png";

import "./Whychoose.css";

const Whychoose = () => {
  const data = [
    {
      id: 1,
      img: chooseicon1,
      title: "10+Years of excellence",
    },
    {
      id: 2,
      img: chooseicon2,
      title: " Approved by the Government of Nepal, Ministry of Education",
    },
    {
      id: 3,
      img: chooseicon3,
      title: "A qualified and experienced consultant",
    },
    {
      id: 4,
      img: chooseicon4,
      title: "High Visa Success Rate",
    },
  ];
  return (
    <>
      <div className="whychoose__container">
        <div className="whychoose__header">
          <div className="whychoose__header_icon">
            <img src={chooseicon} alt="icon" />
            {/* icon */}
          </div>
          <div className="whychoose__header_heading">
            <h1>why choose dreamland</h1>
            {/* heading */}
          </div>
          <div className="whychoose__header_description">
            <p>
              We've created a range of ancillary services to make your study
              abroad journey less daunting, more accessible, and totally
              exciting.
            </p>
            {/* desc */}
          </div>
          {/* header */}
        </div>
        <div className="icons">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="feature">
                  <img src={item.img} alt="icon1" />
                  <h5>{item.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Whychoose;
