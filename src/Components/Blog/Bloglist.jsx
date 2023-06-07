import React from "react";
import "./Bloglist.css";

const Bloglist = () => {
  return (
    <>
      <div className="Bloglist__container">
        <div className="Bloglist__wrapper">
          <div className="Bloglist__header">
            <h1>our recent blog</h1>
          </div>
          <div className="Bloglist__blogitems">
            <div className="Bloglist__itemone">
              {/* item one start */}
              <div className="Bloglist__item_img">
                <img src="#" alt="image" />
              </div>
              <div className="Bloglist__item_title">
                <h5>
                  Unlocking the Mystery:A Comprehensive Guide to Meeting GPA
                  Requirements for................
                </h5>
              </div>

              {/* item one end */}
            </div>
            <div className="Bloglist__itemone">Item two</div>
            <div className="Bloglist__itemone">Item three</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloglist;
