import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const Subscribe = (props) => {
  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="wrapper__subscribe position-relative bg__orange">
            <img src="./../images/sdsadsad.png" className="path__5 d-none d-lg-block" alt="" />
            <div className="row">
              <div className="col-lg-6 position-relative z-2">
                <h4 className="bold font__size--52 text__50-1024 text__50-sm text__50-xs color__white">
                  Subscribe to get more updates about us
                </h4>
                <p className="medium font__size--16 text__16-1024 text__16-md color__white lh-2 mb-4">
                  
                </p>

                <div className="wrapper__filed-sub d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Insert your email here"
                    className="bosl font__size--16 text__16-1024"
                  />
                  <button className="bold font__size--16 text__16-1024 text__16-md btn btn__purple color__white shadow">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Subscribe;
