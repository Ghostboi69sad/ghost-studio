import React, { Component, Fragment } from "react";

const CardTestimonial = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-testomonial bg__white">
        <div className="text-center mb-4">
          <img src="./../images/Ellipse 8.png" className="profile" alt="" />
        </div>
        <p className="medium font__size--14 text__14-1024">
          Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
          tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
        </p>
        <hr className="hr" />
        <div className="about d-flex align-items-center justify-content-between">
          <div>
            <h5 className="bosl font__size--14 text__14-1024 mb-0">Frederica Koen</h5>
            <p className="mb-0 medium font__size--12 color__gray-3">
              @fredericakoen
            </p>
          </div>
          <div className="star d-flex align-items-center">
            <img src="./../images/starsa.png" alt="" />
            <img src="./../images/starsa.png" alt="" />
            <img src="./../images/starsa.png" alt="" />
            <img src="./../images/starsa.png" alt="" />
            <img src="./../images/starsa.png" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardTestimonial;
