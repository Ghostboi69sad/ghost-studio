import React, { Component, Fragment } from "react";

const CardCommand = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-command">
        <div className="profile">
          <img src="./../images/saad.png" alt="" />
          <div className="ml-3">
            <h5 className="bold font__size--16 text__16-1024 mb-0">Dominic Lovre</h5>
            <p className="medium font__size--14 text__14-1024 color__gray-2 mb-0">
              Commented on 19h ago
            </p>
          </div>
        </div>

        <p className="medium font__size--14 text__14-1024 my-4 color__gray-2">
          Eget felis nibh habitant quis sit eleifend egestas non id. Gravida
          donec viverra quisque bibendum. Ipsum ac ac hendrerit feugiat ac
          lectus congue. Sed egestas malesuada turpis enim in pulvinar tortor
          suspendisse. Nullam neque tristique aliquet turpis nec duis purus
          blandit id. Sed vivamus tristique scelerisque id diam feugiat
          penatibus pellentesque.
        </p>

        <div className="footer d-flex align-items-center">
          <div className="items d-flex align-items-center">
            <img src="./../images/jhghj.png" alt="" />
            <span className="ml-2 bold font__size--14 text__14-1024">12</span>
          </div>

          <div className="items">
            <a href="#!" className="bold font__size--16 text__16-1024 color__purple">
              Reply
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardCommand;
