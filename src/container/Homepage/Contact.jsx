import React, { useState, Fragment, useRef } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { NavLink } from "react-router-dom";

const Contact = (props) => {
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
                                    <h1 className="color__white bold text-sm-center font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">Get In Touch</h1>
                                </div>
                                <div className="d-block mb-5">
                                    <div className="wrapper__tag-line d-inline-block bold font__size--20 text__20-1024 color__white">
                                        Contact Us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-11">
                                <div className="row">
                                    <div className="col-md-4 mb-4 mb-md-0">
                                        <h3 className="bold font__size--32 text__32-1024 text__32-xs">Contact information</h3>
                                        <p className="normal font__size--16 text__16-1024 color__gray-3 mb-4">Fill up the form and our team will get back to you with in 24 hours.</p>

                                        <div className="d-flex align-items-center">
                                            <img src="./../images/Notification - Bell.png" alt="" />
                                            <span className="ml-2 semi-bold font__size--16 text__16-1024">+1 432 1234 234</span>
                                        </div>
                                        <div className="d-flex align-items-center my-3">
                                            <img src="./../images/Notification - Bell (1).png" alt="" />
                                            <span className="ml-2 semi-bold font__size--16 text__16-1024">hello@sloosh.id</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src="./../images/Notification - Bell (2).png" alt="" />
                                            <span className="ml-2 semi-bold font__size--16 text__16-1024">105 Street, Seatle-US</span>
                                        </div>
                                    </div>
                                    <div className="col-md-7 offset-md-1">
                                        <div className="form-group wrapper__field-input mb-4">
                                            <label htmlFor="" className="bold font__size--16 text__16-1024">First Name</label>
                                            <input type="text" className="form-control semi-bold font__size--14" placeholder="Insert your first name" />
                                        </div>
                                        <div className="form-group wrapper__field-input mb-4">
                                            <label htmlFor="" className="bold font__size--16 text__16-1024">Last Name</label>
                                            <input type="text" className="form-control semi-bold font__size--14" placeholder="Insert your last name" />
                                        </div>
                                        <div className="form-group wrapper__field-input mb-4">
                                            <label htmlFor="" className="bold font__size--16 text__16-1024">Email</label>
                                            <input type="text" className="form-control semi-bold font__size--14" placeholder="Insert your email" />
                                        </div>
                                        <div className="form-group wrapper__field-input mb-4">
                                            <label htmlFor="" className="bold font__size--16 text__16-1024">Phone Number</label>
                                            <input type="text" className="form-control semi-bold font__size--14" placeholder="Insert your phone number" />
                                        </div>
                                        <div className="form-group wrapper__field-input mb-4">
                                            <label htmlFor="" className="bold font__size--16 text__16-1024">Message the host (Optional)</label>
                                            <textarea name="" className="form-control semi-bold font__size--14" placeholder="Type here..." id="" cols="30" rows="10"></textarea>
                                        </div>

                                        <div className="text-right">
                                            <a href="#!" className="bold font__size--16 text__16-1024 btn btn__white wrapper__width-mm-100 shadow color__white mb-4 mb-sm-0 mr-sm-3">Send Message</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
};

export default Contact;
