import React, { Component, Fragment } from "react";

const CardReview = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-command">
        <div className="profile">
          <img src="./../images/saad.png" alt="" />
          <div className="ml-3">
            <h5 className="bold font__size--16 text__16-1024 mb-0">Dominic Lovre</h5>
            <div className="rating d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div className="star">
                  <img src="./../images/Frame (sasd5).png" alt="" />
                  <img src="./../images/Frame (sasd5).png" alt="" />
                  <img src="./../images/Frame (sasd5).png" alt="" />
                  <img src="./../images/Frame (sasd5).png" alt="" />
                  <img src="./../images/Frame (sasd5).png" alt="" />
                </div>
                <span className="semi-bold font__size--14 text__14-1024">5.0</span>
                <span className="font__size--14 text__14-1024 mx-2 color__gray-5">|</span>
                <span className="font__size--14 text__14-1024 color__gray-5">1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        <p className="medium font__size--14 text__14-1024 mt-4 color__gray-2">
          Eget felis nibh habitant quis sit eleifend egestas non id. Gravida
          donec viverra quisque bibendum. Ipsum ac ac hendrerit feugiat ac
          lectus congue. Sed egestas malesuada turpis enim in pulvinar tortor
          suspendisse. Nullam neque tristique aliquet turpis nec duis purus
          blandit id. Sed vivamus tristique scelerisque id diam feugiat
          penatibus pellentesque.
        </p>
      </div>
    </Fragment>
  );
};

export default CardReview;
