import React, { Component, Fragment } from "react";

const CardBlog = (props) => {
    return (
        <Fragment>
            <div className="wrapper__card-blog d-flex flex-wrap flex-lg-nowrap align-items-center">
                <div className="desc order-lg-1 order-12">
                    <div className="tag d-inline-block semi-bold font__size--16 text__16-1024 color__purple mb-3">
                        {props.data.category}
                    </div>
                    <h4 className="bold font__size--24 text__24-1024 mb-2">{props.data.title}</h4>
                    <p className="normal font__size--16 text__16-1024 mb-3">{props.data.desc}</p>

                    <div className="medium font__size--14 text__14-1024 color__gray-2">{props.data.date}</div>
                </div>
                <img src={props.data.img} className="cover ml-lg-3 mb-4 mb-lg-0 order-1 order-lg-12" alt="" />
            </div>
        </Fragment>
    );
};

export default CardBlog;
