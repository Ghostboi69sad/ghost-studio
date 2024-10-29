import React, { Component, Fragment, useRef } from "react";
import SliderAuth from "../../component/slider/SliderAuth";

const ForgotPassword = (props) => {
  const slider1 = useRef(null);

  const previous = () => {
    slider1.current.slickNext();
  };

  const next = () => {
    slider1.current.slickPrev();
  };
  return (
    <Fragment>
      <div className="overflow-hidden">
        <section className="bg__white py-0 wrapper__wrap-auth">
          <div className="row min-height-100">
            <div className="col-md-6">
              <div className="wrapper__form-auth">
                <img
                  src="./../images/sadsad.png"
                  className="mb-4 mb-md-0 d-md-none"
                  alt=""
                />
                <h4 className="bosl font__size--42 text__40-1024 text__40-md text__40-mm">
                  Have you forgotten your password?
                </h4>
                <p className="meidum font__size--16 text__16-1024 color__gray-2 mb-4">
                  Vitae integer pellentesque platea ipsum tristique turpis eros,
                  ante sollicitudin. Ut sed eleifend duis morbi.{" "}
                </p>

                <div className="form-group wrapper__fild-input">
                  <label htmlFor="" className="bold font__size--16 text__16-1024">
                    Your Email
                  </label>
                  <input
                    type="text"
                    className="form-control w-100 semi-bosl font__size--14 text__14-1024 color__gray-2"
                    placeholder="Insert your email here"
                  />
                </div>

                <button className="btn btn__purple shadow semi-bold font__size--14 text__14-1024 color__white w-100 mb-3">
                  Submit
                </button>

                <div className="text-center">
                  <p className="bold font__size--14 text__14-1024 mb-0 color__gray-3">
                    Already have an account?{" "}
                    <a href="#!" className="color__purple">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none position-relative d-md-flex justify-conten-center align-items-end p-4">
              <img src="./../images/Photo.png" className="path__7" alt="" />
              <div className="position-relative w-100 z-2">
                <div className="wrapper__slide-wrap-auth">
                  <div className="icon bg__purple">
                    <img src="./../images/Logo.png" className="" alt="" />
                  </div>
                  <div className="slide position-relative">
                    <div className="arrow d-flex align-items-center">
                      <div onClick={previous} className="pointer">
                        <img src="./../images/row (1).png" alt="" />
                      </div>
                      <div onClick={next} className="pointer ml-3">
                        <img src="./../images/row (2).png" alt="" />
                      </div>
                    </div>
                    <SliderAuth slider1={slider1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
