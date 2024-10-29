import React, { Component, Fragment } from "react";

const CardRecomendation = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-category position-relative">
        <img src={props.data.img} alt="" />
        <div className="title medium text-center font__size--24">
          {props.data.title}
        </div>
      </div>
    </Fragment>
  );
};

export default CardRecomendation;
