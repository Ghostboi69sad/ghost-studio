import React, { Component, Fragment } from "react";

const CardPodcastList = (props) => {
    return (
        <Fragment>
            <div className="wrapper__card-podcast-list d-flex align-items-center flex-wrap flex-lg-nowrap">
                <img src={props.img} className="cover mb-4 mb-lg-0" alt="" />
                <div className="content ml-lg-4">
                    <h5 className="bold font__size--20 text__20-1024">{props.title}</h5>
                    <p className="normal font__size--12 color__gray-2 mb-4">{props.desc}</p>

                    <div className="d-flex align-items-center">
                        <a href="#!" className="btn__item-play color__black">
                            <div className="d-flex align-items-center medium font__size--14 text__14-1024">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83203 5V15L14.1654 10L5.83203 5Z" fill="#4F4B56" />
                                </svg>
                                <span className="ml-2">Play Now</span>
                            </div>
                        </a>
                        <span className="ml-4 medium font__size--14 text__14-1024 color__gray-2">20 Mins • 7 Second</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CardPodcastList;
