import React from "react";
import "./ServiceContents.css";
import career from '../../Components/images/career.png'
import course from '../../Components/images/course.jpg'
import country from '../../Components/images/country.png'
import interview from '../../Components/images/interview.jpg'
import admission from '../../Components/images/admission.jpg'
import scholarship from '../../Components/images/scholarship.png'
import post from '../../Components/images/post.png'

const ServiceContents = () => {
  return (
    <>
      {/* Advising */}
      <div className="Service__contents__container">
        <div className="Service__contents__itemone">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Career Advising</h1>
            </div>

            <div className="service__contents__para">
              <p>
                At Dreamland Abroad Education, we assist students in both
                education and career planning to help them achieve their
                ultimate career goals. Our expert counselors guide students in
                considering options and making informed decisions. With
                versatile professionals and updated data, we enhance the value
                of education for a stable and successful career.
              </p>
            </div>
          </div>
          <div className="Service__contents__image">
            <img
              src={career}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Selection */}
      <div className="Service__contents__container__selection">
        <div className="Service__contents__itemtwo">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Course and University Selection </h1>
            </div>

            <div className="service__contents__para2">
              <p>
                We help students choose the right course and university for
                their education and career goals. Our experienced counselors
                provide detailed and up-to-date information on courses and
                universities worldwide, considering the student's preferences,
                background, and future plans. With extensive research, expert
                assistance, and regular service, you can make a confident and
                informed choice at Dreamland.
              </p>
            </div>
          </div>
          <div className="Service__contents__image_selection">
            <img
              src={course}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Country Selection */}
      <div className="Service__contents__container">
        <div className="Service__contents__itemone">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Country Selection</h1>
            </div>

            <div className="service__contents__para">
              <p>
                We offer unbiased information and guidance on different
                countries for world-class education. Our qualified and
                experienced expertise helps determine the right country for a
                student based on their program and career goals. We provide
                guidance in choosing the right country, level of study, and
                career opportunities.
              </p>
            </div>
          </div>
          <div className="Service__contents__image">
            <img
              src={country}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Documentation Guide */}
      <div className="Service__contents__container__selection">
        <div className="Service__contents__itemtwo">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Documentation Guidance  </h1>
            </div>

            <div className="service__contents__para">
              <p>
                We assist students with document preparation and visa
                application procedures, ensuring they meet legal and procedural
                requirements. We provide professional help with university and
                visa paperwork. Our expert counselors at Dreamland Abroad
                Education are dedicated to making the study abroad process as
                smooth and stress-free as possible for our students. Our team
                provides personalized and comprehensive support for visa
                applications, ensuring that all legal requirements are met for
                each student's desired country of study. With a proven track
                record of success and a high rate of visa approvals, our
                students can trust that their visa applications will be
                processed efficiently and effectively.
              </p>
            </div>
          </div>
          <div className="Service__contents__image_selection">
            <img
              src="https://img.freepik.com/free-vector/consulting-concept-illustration_114360-2579.jpg?w=2000"
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Interview Prep */}
      <div className="Service__contents__container">
        <div className="Service__contents__itemone">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Interview Prep</h1>
            </div>

            <div className="service__contents__para">
              <p>
                Our Expertise team helps students prepare for university
                interviews. They provide guidance to showcase their potential
                and increase their chances of getting accepted into the
                institution. At Dreamland Abroad Education, our dedicated team
                of experts not only helps students choose the right course and
                university but also prepares them for important university
                interviews. Our expert counselors understand the importance of
                these interviews and the impact they can have on a student's
                acceptance into the institution. Our team provides personalized
                guidance and support, helping students showcase their unique
                skills and potential, and increasing their chances of getting
                accepted. With Dreamland, students can feel confident and
                well-prepared for their university interviews and achieve their
                academic dreams.
              </p>
            </div>
          </div>
          <div className="Service__contents__image">
            <img
              src={interview}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Admission */}
      <div className="Service__contents__container__selection">
        <div className="Service__contents__itemtwo">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Admission Procedure  </h1>
            </div>

            <div className="service__contents__para">
              <p>
                We simplify the admission process by keeping track of deadlines,
                test requirements, application fees, and document requirements
                for students. Our regular interactions with university admission
                offices ensure a smooth and successful admission. At Dreamland
                Abroad Education, our admission process specialists are
                dedicated to making the application process stress-free and
                straightforward for our students. With our expertise and
                attention to detail, we ensure that students meet all the
                necessary deadlines, test requirements, and document
                submissions. We keep track of every aspect of the admission
                process, so students don't have to worry about missing any
                important steps. Our regular interactions with university
                admission offices ensure that our students receive the most
                up-to-date information and that their applications are processed
                smoothly and efficiently. With Dreamland, students can focus on
                their studies and achieve their academic goals with confidence.
              </p>
            </div>
          </div>
          <div className="Service__contents__image_selection">
            <img
              src={admission}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Scholarship Assistance */}
      <div className="Service__contents__container">
        <div className="Service__contents__itemone">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Scholarship Assistance</h1>
            </div>

            <div className="service__contents__para">
              <p>
                We provide information on scholarships and financial aid
                available for Nepali students, including government awards and
                those offered by colleges and foundations. We offer counseling
                and conduct seminars to keep students updated on the latest
                opportunities. At Dreamland Abroad Education, we believe that
                financial constraints should never be a barrier to obtaining a
                world-class education. That's why we are dedicated to helping
                Nepali students find and apply for scholarships and financial
                aid opportunities that are tailored to their individual needs
                and goals. Our team of expert counselors stays updated on the
                latest scholarships and financial aid programs available for
                Nepali students, including government awards and those offered
                by colleges and foundations. With our guidance and counseling
                services, students can take advantage of these opportunities to
                reduce the financial burden of their studies and focus on their
                academic pursuits. Choose Dreamland and make your dream of
                studying abroad a reality.
              </p>
            </div>
          </div>
          <div className="Service__contents__image">
            <img
              src={scholarship}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Post-Visa Support*/}
      <div className="Service__contents__container__selection">
        <div className="Service__contents__itemtwo">
          <div className="Service__contents__heading__description">
            <div className="Service__contents__head">
              <h1>Post-Visa Support </h1>
            </div>

            <div className="service__contents__para">
              <p>
                We provide Pre-departure Briefings for students to prepare for
                visa approval and ensure a smooth transition to academic life in
                the host country. The briefing covers topics such as academics,
                accommodation, safety, health, and support for dependants. We
                also check in with students regularly to ensure their
                satisfaction and address any concerns.
              </p>
            </div>
          </div>
          <div className="Service__contents__image_selection">
            <img
              src={post}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContents;
