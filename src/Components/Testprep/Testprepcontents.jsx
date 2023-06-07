import React from "react";
import "./Testprepcontents.css";
import ielts from "../../Components/images/ielts.png";
import pte from "../../Components/images/pte.png";

export const Testprepcontents = () => {
  return (
    <>
      {/* Advising */}
      <div className="Test__contents__container">
        <div className="Test__contents__itemone">
          <div className="Test__contents__heading__description">
            <div className="Test__contents__head">
              <h1>ielts</h1>
            </div>

            <div className="Test__contents__para">
              <p>
                At Dreamland Abroad Education, we recognize the importance of
                English proficiency for international students, and that is why
                we offer comprehensive support and guidance for IELTS
                preparation. Our certified trainers provide customized lessons
                to help students achieve their desired IELTS score, whether they
                are aiming for university admission or visa requirements. With
                our extensive training materials, simulated test environments,
                and personalized feedback, students can improve their English
                skills and increase their chances of success on the IELTS exam.
                Choose Dreamland and achieve your language goals with
                confidence.
              </p>
            </div>
          </div>
          <div className="Test__contents__image">
            <img src={ielts} alt="image" />
          </div>
        </div>
      </div>
      {/* Selection */}
      <div className="Test__contents__container__selection">
        <div className="Test__contents__itemtwo">
          <div className="Test__contents__heading__description">
            <div className="Test__contents__head">
              <h1>PTE</h1>
            </div>

            <div className="Test__contents__para">
              <p>
                At Dreamland Abroad Education, we understand the significance of
                English proficiency for students pursuing higher education
                abroad. That's why we offer comprehensive support and guidance
                for PTE (Pearson Test of English) preparation. Our team of
                certified trainers provides customized lessons to help students
                achieve their desired PTE score, which is essential for
                university admission and visa requirements. With our extensive
                training materials, simulated test environments, and
                personalized feedback, students can enhance their English skills
                and increase their chances of success on the PTE exam. Choose
                Dreamland and confidently achieve your language proficiency
                goals.
              </p>
            </div>
          </div>
          <div className="Test__contents__image">
            <img src={pte} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};
