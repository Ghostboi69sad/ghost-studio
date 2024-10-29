import React, { Component, Fragment, useRef } from "react";
import Slider from "react-slick";
import CardTestimonial from "../card/CardTestimonial";

const SliderTestimonial = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <div className="wrapper__slider-testimonial">
        <Slider ref={props.slider1} {...settings} className="wrap">
          <div className="items">
            <CardTestimonial />
          </div>
          <div className="items">
            <CardTestimonial />
          </div>
          <div className="items">
            <CardTestimonial />
          </div>
          <div className="items">
            <CardTestimonial />
          </div>
          <div className="items">
            <CardTestimonial />
          </div>
          <div className="items">
            <CardTestimonial />
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default SliderTestimonial;
