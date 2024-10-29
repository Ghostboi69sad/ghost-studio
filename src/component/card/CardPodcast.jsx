import React, { Component, Fragment } from "react";

const CardPodcast = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-course">
        <div className="position-relative">
          <img src="./../images/Group 74.png" className="play" alt="" />
          <img src="./../images/Image-4.jpg" className="img" alt="" />
        </div>
        <p className="medium font__size--12 text__12-1024 mt-2 mb-0">
          SKUYLIVE • 46 Mins • 8 Minutes
        </p>
        <h5 className="bold font__size--16 text__16-1024">
          How to overcome overthinking thoughts at work
        </h5>

        <p className="normal font__size--12 text__12-1024 lh-1 color__gray-2 mb-2">
          Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
          tempus urna lectus. Nec tortor, vehicula nunc...
        </p>
        <div className="about d-flex align-items-center justify-content-between">
          <a href="#!" className="bold tag font__size--12 text__12-1024">
            Design
          </a>

          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img src="./../images/ic (1).png" alt="" />
              <span className="bold font__size--12 text__12-1024 ml-2 color__gray-3">
                300
              </span>
            </div>
            <div className="d-flex align-items-center mx-2">
              <img src="./../images/ic (3).png" alt="" />
              <span className="bold font__size--12 text__12-1024 ml-2 color__gray-3">
                10K
              </span>
            </div>
            <div className="d-flex align-items-center">
              <img src="./../images/ic (2).png" alt="" />
              <span className="bold font__size--12 text__12-1024 ml-2 color__gray-3">
                25K
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardPodcast;
