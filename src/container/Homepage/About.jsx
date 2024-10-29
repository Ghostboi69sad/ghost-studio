import React, { useState, Fragment, useRef } from "react";
import { Range, getTrackBackground } from "react-range";
import CardBlog from "../../component/card/CardBlog";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const About = (props) => {

    return (
        <Fragment>
            <div className="overflow-hidden bg__gray-1">
                <div className="bg__purple position-relative">
                    <Navbar />
                    <section className="position-relative overflow-hidden px-4 pb-lg-0">
                        <img src="./../images/Group 3086.png" className="path__13 blog" alt="" />
                        <div className="container position-relative z-2">
                            <img
                                src="./../images/ZZZ - 2021-07-12.png"
                                className="path__12 about d-none d-sm-block"
                                alt=""
                            />
                            <div className="row">
                                <div className="col-lg-6 my-auto">
                                    <div className="position-relative z-2 text-center text-lg-left">
                                        <div className="position-relative d-inline-block">
                                            <img
                                                src="./../images/Highlight.png"
                                                className="path__10 blog d-none d-sm-block"
                                                alt=""
                                            />
                                            <h1 className="color__white bold font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">We share knowledge with the world</h1>
                                            <div className="wrapper__count-about d-flex justify-content-center justify-content-lg-start align-items-center mt-4 mt-sm-3">
                                                <div className="item text-center">
                                                    <h5 className="color__white bold font__size--28 text__28-1024 mb-0">
                                                        125+
                                                    </h5>
                                                    <p className="color__gray-2 medium font__size--16 text__16-1024 mb-0">
                                                        Amazing Course
                                                    </p>
                                                </div>
                                                <div className="item text-center">
                                                    <h5 className="color__white bold font__size--28 text__28-1024 mb-0">12+</h5>
                                                    <p className="color__gray-2 medium font__size--16 text__16-1024 mb-0">
                                                        Proffesional Mentor
                                                    </p>
                                                </div>
                                                <div className="item text-center">
                                                    <h5 className="color__white bold font__size--28 text__28-1024 mb-0">
                                                        90k+
                                                    </h5>
                                                    <p className="color__gray-2 medium font__size--16 text__16-1024 mb-0">
                                                        Good Reviews
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-none d-lg-block">
                                    <img src="./../images/sdsad.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm">Improving lives through learning</h2>
                            <p className="meidum font__size--14 text__14-1024 color__gray-2">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for <br className="d-none d-md-block" /> online learning, we connect people through knowledge.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="wrapper__card-learning text-center text-sm-left d-flex flex-wrap flex-sm-nowrap align-items-center">
                                    <div className="icon mx-auto mx-sm-0 mb-4 mb-sm-0 flex-shrink-0 position-relative">
                                        <img src="./../images/Group 3126.png" className="bg" alt="" />
                                        <img src="./../images/status-up.png" className="position-relative z-2" alt="" />
                                    </div>
                                    <div className="ml-sm-3 w-100">
                                        <h5 className="bold font__size--20 text__20-1024">Vision</h5>
                                        <p className="normal font__size--12 text__12-1024 color__gray-2 mb-0">Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci. Nunc urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="wrapper__card-learning text-center text-sm-left d-flex flex-wrap flex-sm-nowrap align-items-center">
                                    <div className="icon mx-auto mx-sm-0 mb-4 mb-sm-0 flex-shrink-0 position-relative">
                                        <img src="./../images/Group 3126.png" className="bg" alt="" />
                                        <img src="./../images/presention-chart.png" className="position-relative z-2" alt="" />
                                    </div>
                                    <div className="ml-sm-3 w-100">
                                        <h5 className="bold font__size--20 text__20-1024">Mission</h5>
                                        <p className="normal font__size--12 text__12-1024 color__gray-2 mb-0">Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci. Nunc urna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm">Our Team</h2>
                            <p className="meidum font__size--14 text__14-1024 color__gray-2">Sloosh has a team of unique people and specialists in their respective fields. Sloosh welcomes talents from all kinds of different <br className="d-none d-md-block" /> backgrounds and this allows us to continue to grow and learn from each other.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row mb__5">
                                    <div className="col-md-5 mb-4">
                                        <img src="./../images/fssdfds.png" alt="" />
                                    </div>
                                    <div className="col-md-7 my-auto">
                                        <p className="meidum font__size--14 text__14-1024 color__gray-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in ipsum condimentum tellus nisl quis tellus faucibus bibendum. Elit ornare morbi vitae ultrices. Ullamcorper tristique diam scelerisque arcu nam urna, sollicitudin orci, pharetra. Non risus egestas dui mauris ut congue consequat, a, vitae. Dignissim blandit quam vulputate pulvinar. Id venenatis in et nisi, parturient mi id pharetra cursus. Lacinia ut laoreet lectus libero. Tortor viverra donec rhoncus posuere lacus vel facilisis fringilla. Ullamcorper vitae turpis vitae risus, nisl. Viverra vitae ante id quisque adipiscing convallis. Eget justo, risus sapien nibh pulvinar.</p>
                                        <h5 className="bold font__size--20 text__20-1024">Gustavo George</h5>
                                        <p className="normal font__size--12 text__12-1024 color__gray-2 mb-0">Founder</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="order-md-1 order-2 col-md-7 my-auto">
                                        <p className="meidum font__size--14 text__14-1024 color__gray-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in ipsum condimentum tellus nisl quis tellus faucibus bibendum. Elit ornare morbi vitae ultrices. Ullamcorper tristique diam scelerisque arcu nam urna, sollicitudin orci, pharetra. Non risus egestas dui mauris ut congue consequat, a, vitae. Dignissim blandit quam vulputate pulvinar. Id venenatis in et nisi, parturient mi id pharetra cursus. Lacinia ut laoreet lectus libero. Tortor viverra donec rhoncus posuere lacus vel facilisis fringilla. Ullamcorper vitae turpis vitae risus, nisl. Viverra vitae ante id quisque adipiscing convallis. Eget justo, risus sapien nibh pulvinar.</p>
                                        <h5 className="bold font__size--20 text__20-1024">Jakob Ekstrom Bothman</h5>
                                        <p className="normal font__size--12 text__12-1024 color__gray-2 mb-0">Founder</p>
                                    </div>
                                    <div className="order-1 order-md-2 col-md-5 mb-4">
                                        <img src="./../images/Images.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="text-center">
                            <h4 className="bold font__size--24 text__24-1024 text__24-sm mb-5">
                                We have been trusted by various big companies
                            </h4>
                            <div className="wrapper__brand d-flex flex-lg-nowrap flex-wrap align-items-center justify-content-center">
                                <img
                                    className="mb-4 mb-lg-0"
                                    src="./../images/Company logo.png"
                                    alt=""
                                />
                                <img
                                    className="mb-4 mb-lg-0"
                                    src="./../images/Company logo (1).png"
                                    alt=""
                                />
                                <img
                                    className="mb-4 mb-lg-0"
                                    src="./../images/Company logo (2).png"
                                    alt=""
                                />
                                <img
                                    className="mb-4 mb-lg-0"
                                    src="./../images/Company logo (3).png"
                                    alt=""
                                />
                                <img
                                    className="mb-4 mb-lg-0"
                                    src="./../images/Company logo (4).png"
                                    alt=""
                                />
                                <img
                                    className="mb-4 mb-lg-0"
                                    src="./../images/Company logo (5).png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
};

export default About;