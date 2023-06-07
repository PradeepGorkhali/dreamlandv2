import React from "react";
import "../Home/OurServuces.css";
import img1 from "../../Components/images/careericon.png";
import img2 from "../../Components/images/unit.png";
import img3 from "../../Components/images/countries.png";
import img4 from "../../Components/images/finance-book.png";
import img5 from "../../Components/images/interview.png";
import img6 from "../../Components/images/admission.png";
import img7 from "../../Components/images/scholarshipicon.png";
import img8 from "../../Components/images/post-visa.png";
import { Icon } from "@iconify-icon/react";
import { useNavigate } from "react-router-dom";

export const ourservicesinfo = [
  {
    id: 1,
    img: img1,
    details: "career advising",
    hoverinfo:
      "At Dreamland Abroad Education, we assist students in both education and career planning to help them achieve their ultimate career goals.Our expert counselors guide ",
    hoverBtn: "learn more",
  },
  {
    id: 2,
    img: img2,
    details: "course and university selection",
    hoverinfo:
      "We help students choose the right course and university for their education and career goals. Our experienced counselors provide detailed and up-to-date information",
    hoverBtn: "learn more",
  },
  {
    id: 3,
    img: img3,
    details: "country selection",
    hoverinfo:
      "We offer unbiased information and guidance on different countries for world-class education. Our qualified and experienced expertise helps determine the right ",
    hoverBtn: "learn more",
  },
  {
    id: 4,
    img: img4,
    details: "documentation guidance",
    hoverinfo:
      "We assist students with document preparation and visa application procedures, ensuring they meet legal and procedural requirements. We provide professional help with .",
    hoverBtn: "learn more",
  },

  {
    id: 5,
    img: img5,
    details: "interview prepration",
    hoverinfo:
      "Our Expertise team helps students prepare for university interviews. They provide guidance to showcase their potential and increase their chances of getting accepted into the institution.",
    hoverBtn: "learn more",
  },

  {
    id: 6,
    img: img6,
    details: "admission procedure",
    hoverinfo:
      "We simplify the admission process by keeping track of deadlines, test requirements, application fees, and document requirements for students.Our regular interactions with ",
    hoverBtn: "learn more",
  },
  {
    id: 7,
    img: img7,
    details: "scholarship assistnace",
    hoverinfo:
      "We provide information on scholarships and financial aid available for Nepali students, including government awards and those offered by colleges and foundations.",
    hoverBtn: "learn more",
  },

  {
    id: 8,
    img: img8,
    details: "post-visa support",
    hoverinfo:
      "We provide Pre-departure Briefings for students to prepare for visa approval and ensure a smooth transition to academic life in the host country. The briefing covers",
    hoverBtn: "learn more",
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  const [hoverme, setHoverMe] = React.useState(true);

  const handleClick = () => {
    navigate("/abroad");
  };
  return (
    <>
      <div className="OurServices_Container">
        <div className="OurServices_Title">
          <p>Our Services</p>
        </div>
        <div className="OurServices_Card_Container">
          {ourservicesinfo.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="OurServices_Card_Box"
                  onMouseEnter={() => setHoverMe(index)}
                  onMouseLeave={() => setHoverMe()}
                >
                  {hoverme === index ? (
                    <>
                      <div className="OurServices_Hover_Details">
                        <p>{item.hoverinfo}</p>
                      </div>
                      <div className="OurServices_Hover_Button">
                        <button onClick={handleClick}>
                          Learn More
                          <Icon icon="la:long-arrow-alt-right" width="30" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="OurServices_Card_Img">
                        <img
                          src={item.img}
                          alt=""
                          width="140px"
                          height="140px"
                        />
                      </div>
                      <div className="OurServices_Card_Heading">
                        <p>{item.details}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurServices;
