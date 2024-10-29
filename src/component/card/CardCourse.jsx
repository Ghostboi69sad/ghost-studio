import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const CardCourse = (props) => {
  return (
    <Fragment>
      <NavLink
        to="/detail" className="wrapper__card-course d-inline-block w-100 color__black">
        <img src={props.obj.img} className="img mb-3" alt="" />
        <h5 className="bold font__size--16 text__16-1024">{props.obj.title}</h5>

        <div className="star d-flex align-item-center mt-2">
          <img src="./../images/dfssdf.png" alt="" />
          <img src="./../images/dfssdf.png" alt="" />
          <img src="./../images/dfssdf.png" alt="" />
          <img src="./../images/dfssdf.png" alt="" />
          <img src="./../images/dfssdf.png" alt="" />
          <span className="bold font__size--16 text__16-1024 color__gray-3">
            ({props.obj.review})
          </span>
        </div>
        <hr className="my-2" />
        <p className="normal font__size--12 text__12-1024 color__gray-2 mb-2">
          Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
          tempus urna lectus. Nec tortor, vehicula nunc...
        </p>
        <div className="about d-flex align-items-center justify-content-between">
          <a href="#!" className="bold tag font__size--12 color__blue text__12-1024">
            {props.obj.tag}
          </a>
          <h5 className="mb-0 bold font__size--18">
            <span className="color__green">$24</span>{" "}
            <span className="medium font__size--12 text__12-1024 color__gray-3">
              / 12 Videos
            </span>
          </h5>
        </div>
      </NavLink>
    </Fragment>
  );
};

export default CardCourse;
