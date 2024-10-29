import React, { useState, Fragment, useRef } from "react";
import { Range, getTrackBackground } from "react-range";
import CardBlog from "../../component/card/CardBlog";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Blog = (props) => {

    const poular = [
        {
            img: "./../images/Image (1).png",
            category: "IT & Software",
            title: "The Top 5 Considerations When Buying a Learning Solution",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet volutpat aliquet et maecenas ac fringilla.",
            date: "Juni 26, 2022"
        },
        {
            img: "./../images/sdasd.png",
            category: "IT & Software",
            title: "Global Freelancer Survey Report 2022",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet volutpat aliquet et maecenas ac fringilla.",
            date: "Juni 26, 2022"
        },
    ]

    const software = [
        {
            img: "./../images/Image (1).png",
            category: "IT & Software",
            title: "The Top 5 Considerations When Buying a Learning Solution",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet volutpat aliquet et maecenas ac fringilla.",
            date: "Juni 26, 2022"
        },
        {
            img: "./../images/sdasd.png",
            category: "IT & Software",
            title: "Global Freelancer Survey Report 2022",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet volutpat aliquet et maecenas ac fringilla.",
            date: "Juni 26, 2022"
        },
        {
            img: "./../images/Image (1).png",
            category: "IT & Software",
            title: "The Top 5 Considerations When Buying a Learning Solution",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet volutpat aliquet et maecenas ac fringilla.",
            date: "Juni 26, 2022"
        },
        {
            img: "./../images/sdasd.png",
            category: "IT & Software",
            title: "Global Freelancer Survey Report 2022",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet volutpat aliquet et maecenas ac fringilla.",
            date: "Juni 26, 2022"
        },
    ]
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
                                <div className="position-relative d-inline-block mb-5">
                                    <img
                                        src="./../images/Highlight.png"
                                        className="path__10 blog d-none d-sm-block"
                                        alt=""
                                    />
                                    <h1 className="color__white bold text-sm-center font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">Where possibilities begin</h1>
                                </div>

                                <div className="wrapper__search-wrap d-flex align-items-center">
                                    <input type="text" placeholder="Search article..." className="bold font__size--16 text__16-1024" />
                                    <button className="bold font__size--16 text__16-1024 color__white btn btn__purple shadow rounded__50">Search</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section>
                    <div className="container">
                        <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-4">Popular Articles</h2>

                        <div className="row">
                            {
                                poular.map((obj) => {
                                    return <div className="col-md-6 mb-4">
                                        <CardBlog data={obj} />
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-4">IT & Software</h2>

                        <div className="row">
                            {
                                software.map((obj) => {
                                    return <div className="col-md-6 mb-4">
                                        <CardBlog data={obj} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-4">Soft Skills Articles</h2>

                        <div className="row">
                            {
                                software.map((obj) => {
                                    return <div className="col-md-6 mb-4">
                                        <CardBlog data={obj} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
};

export default Blog;
