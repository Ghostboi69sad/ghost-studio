import React, { Component, Fragment } from "react";
import Slider from "react-slick";

const SliderAuth = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <Slider
        {...settings}
        ref={props.slider1}
        className="wrapper__slider-auth"
      >
        <div className="items">
          <p className="bold font__size--20 text__20-1024 mb-5 lh-2 color__white">
            Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
            tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
          </p>

          <div className="star d-flex align-items-center mb-3">
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
          </div>
          <h5 className="bold color__white font__size--16 text__16-1024 mb-0">John Tompoe</h5>
          <p className="mb-0 color__white font__size--14 text__14-1024 normal opacity__5">
            @johntompoe
          </p>
        </div>
        <div className="items">
          <p className="bold font__size--20 text__20-1024 mb-5 lh-2 color__white">
            Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
            tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
          </p>

          <div className="star d-flex align-items-center mb-3">
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
          </div>
          <h5 className="bold color__white font__size--16 text__16-1024 mb-0">John Tompoe</h5>
          <p className="mb-0 color__white font__size--14 text__14-1024 normal opacity__5">
            @johntompoe
          </p>
        </div>
        <div className="items">
          <p className="bold font__size--20 text__20-1024 mb-5 lh-2 color__white">
            Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
            tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
          </p>

          <div className="star d-flex align-items-center mb-3">
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
          </div>
          <h5 className="bold color__white font__size--16 text__16-1024 mb-0">John Tompoe</h5>
          <p className="mb-0 color__white font__size--14 text__14-1024 normal opacity__5">
            @johntompoe
          </p>
        </div>
        <div className="items">
          <p className="bold font__size--20 text__20-1024 mb-5 lh-2 color__white">
            Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
            tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
          </p>

          <div className="star d-flex align-items-center mb-3">
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
            <img src="./../images/dfssdf.png" alt="" />
          </div>
          <h5 className="bold color__white font__size--16 text__16-1024 mb-0">John Tompoe</h5>
          <p className="mb-0 color__white font__size--14 text__14-1024 normal opacity__5">
            @johntompoe
          </p>
        </div>
      </Slider>
    </Fragment>
  );
};

export default SliderAuth;
