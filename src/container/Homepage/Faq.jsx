import React, { useState, Fragment, useRef } from "react";
import CardAccordion from "../../component/card/CardAccordion";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Faq = (props) => {
    const faqDetail = [
        {
            title: "Is It Subscription?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "I Don't Have The Software, Is It Provided?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "How do I buy more than 1 class at a time?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "Will This Class Guarantee Me To Be Good?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "What is Forever Access What is it?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "How is the Learning System?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "Is it permissible to share an account with others?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "Can I still access the material when I haven't accessed the class for a long time?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "Bagaimana Prosedur Bertanya Kepada Mentor ?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
        },
        {
            title: "Can I Refund/Change Class When I Have Purchased?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu sem adipiscing mauris maecenas eu lorem accumsan ut. Odio at velit, fames dui vitae commodo, diam id. Morbi consectetur condimentum non nisl viverra nam. Blandit volutpat volutpat nibh amet lorem eu dictum bibendum odio. "
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
                                    <h1 className="color__white bold text-sm-center font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">Hi, How can we help you?</h1>
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
                        <div className="row">


                            <div className="col-md-6">
                                {
                                    faqDetail.map((obj, i) => {
                                        return i < faqDetail.length / 2 ?
                                            <div className="mb-4">
                                                <CardAccordion title={obj.title} desc={obj.desc} />
                                            </div>
                                            : ""
                                    })
                                }
                            </div>

                            <div className="col-md-6">
                                {
                                    faqDetail.map((obj, i) => {
                                        return i >= faqDetail.length / 2 ?
                                            <div className="mb-4">
                                                <CardAccordion title={obj.title} desc={obj.desc} />
                                            </div>
                                            : ""
                                    })
                                }
                            </div>

                        </div>

                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
};

export default Faq;
