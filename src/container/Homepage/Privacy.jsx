import React, { useState, Fragment, useRef } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { NavLink } from "react-router-dom";

const Privacy = (props) => {
    return (
        <Fragment>
            <div className="overflow-hidden bg__gray-1">
                <div className="bg__purple position-relative">
                    <Navbar />
                    <section className="position-relative overflow-hidden">
                        <img src="./../images/Group 3086.png" className="path__13 blog" alt="" />
                        <div className="container position-relative z-2">
                            <img
                                src="./../images/ZZZ - 2021-07-12.png"
                                className="path__12 blog d-none d-sm-block"
                                alt=""
                            />
                            <div className="text-center position-relative z-2">
                                <div className="position-relative d-inline-block mb-3">
                                    <img
                                        src="./../images/Highlight.png"
                                        className="path__10 blog d-none d-sm-block"
                                        alt=""
                                    />
                                    <h1 className="color__white bold text-sm-center font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">Privacy Policy</h1>
                                </div>
                                <div className="d-block mb-5">
                                    <div className="wrapper__tag-line d-inline-block bold font__size--20 text__20-1024 color__white">
                                        Last Update October 13, 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xl-3 mb-4 mb-md-0 d-none d-md-block">
                                <div className="wrapper__side-navbar">
                                    <NavLink to="/terms-of-service" className="semi-bold font__size--16 text__16-1024 d-inline-block w-100 color__gray-2 active">
                                        Terms of Service
                                    </NavLink>
                                    <NavLink to="/privacy-policy" className="semi-bold font__size--16 text__16-1024 d-inline-block w-100 color__gray-2">
                                        Privacy Policy
                                    </NavLink>
                                    <a href="#!" className="semi-bold font__size--16 text__16-1024 d-inline-block w-100 color__gray-2">
                                        Intellectual Property Policy
                                    </a>
                                    <a href="#!" className="semi-bold font__size--16 text__16-1024 d-inline-block w-100 color__gray-2">
                                        Master Services Agreement
                                    </a>
                                    <a href="#!" className="semi-bold font__size--16 text__16-1024 d-inline-block w-100 color__gray-2">
                                        Promotions Policy
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-8 col-xl-8 offset-xl-1">
                                <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-3">This Privacy Policy will help you better understand how we collect, use, and share your personal information</h2>
                                <h4 className="bold font__size--20 text__20-1024 mb-3">Tempus, purus purus volutpat ac. Sed amet urna duis et dolor in nisl felis. Sed auctor augue sed bibendum placerat ipsum.</h4>

                                <p className="medium font__size--18 text__18-1024 mb-3">Tempus, purus purus volutpat ac. Sed amet urna duis et dolor in nisl felis. Sed auctor augue sed bibendum placerat ipsum. Nunc nec imperdiet sed egestas ut. Leo bibendum vitae dignissim aenean. Auctor ipsum, in lacus egestas neque, massa, scelerisque pretium. </p>
                                <p className="medium font__size--18 text__18-1024 mb-3">Odio pellentesque faucibus massa tortor aliquam a auctor aliquam facilisis. Mauris placerat tellus pharetra, etiam aliquam a adipiscing accumsan fusce. A sit nulla congue mauris euismod et. Arcu ac tellus nibh viverra amet facilisi turpis. Habitasse vestibulum, velit lacinia ac maecenas dui.</p>

                                <h5 className="bold font__size--18 text__18-1024 mb-3">Privacy Policy</h5>
                                <p className="medium font__size--18 text__18-1024 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senects mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>

                                <p className="medium font__size--18 text__18-1024 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senects mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>

                                <p className="medium font__size--18 text__18-1024 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senects mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>

                                <p className="medium font__size--18 text__18-1024 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senects mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>

                            </div>
                        </div>

                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
};

export default Privacy;
