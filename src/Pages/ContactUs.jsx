import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import contactbanner from "../Components/images/contactbanner.png";
import { Icon } from "@iconify-icon/react";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_evau64q",
        "template_us60cds",
        form.current,
        "nKguKa2-eV29wCnJv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactUs__container">
      <div className="home__banner">
        <img src={contactbanner} alt="" />
      </div>
      <div className="form__map__container">
        <div className="form__map__wrapper">
          <div className="form__map__header">
            <div className="contact__title">
              <h1>talk to us for more enquiry</h1>
            </div>
          </div>
          <div className="contact__form_map_subcontainer">
            <div className="form__map">
              <div className="contact__form">
                <StyledContactForm>
                  <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                  </form>
                </StyledContactForm>
              </div>
              <div className="contact__map">
                {/* <h1> Map </h1> */}
                <div className="contact__map__img">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.587817157615!2d85.3225967!3d27.7050276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa27b7c729d06c03!2sDREAMLAND%20Abroad%20Education%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1677480280975!5m2!1sen!2snp"
                    width="360"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="contact__map__name">
                  <h3>dreamland abroad education pvt.ltd</h3>
                </div>
                <div className="contact__map__address">
                  <p>
                    Putalisadak-31, Kathmandu, Nepal <br /> 00977-01-4247201
                  </p>
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
                {/* <div className="social__icons">
                  <div className="Footer__socialmedia">
                    <div className="advertisement_second_wrapper_content">
                      <a href="https://www.facebook.com/dreamlandabroadeducation/">
                        <span className="contact_advertisement_wrapper">
                          <BsFacebook />
                        </span>
                      </a>
                      <a href="https://www.instagram.com/dreamlandabroad/">
                        <span className="contact_advertisement_wrapper">
                          <BsInstagram />
                        </span>
                      </a>
                      <a href="mailto: info@dreamland.edu.np">
                        <span className="contact_advertisement_wrapper">
                          <AiFillMail />
                        </span>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: red;
      color: white;
      border: none;
    }
  }
`;
