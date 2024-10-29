import React, { useState, Fragment, useRef } from "react";
import { Range, getTrackBackground } from "react-range";
import CardBlog from "../../component/card/CardBlog";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const BlogDetail = (props) => {

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

    return (
        <Fragment>
            <div className="overflow-hidden bg__gray-1">
                <div className="bg__purple position-relative">
                    <Navbar />
                    <section className="position-relative overflow-hidden px-4">
                        <img src="./../images/Group 3086.png" className="path__13 blog" alt="" />
                        <div className="container position-relative z-2">
                            <img
                                src="./../images/ZZZ - 2021-07-12.png"
                                className="path__12 blog d-none d-sm-block"
                                alt=""
                            />
                            <div className="text-center position-relative z-2">
                                <div className="d-block mb-3">
                                    <div className="wrapper__tag-line d-inline-block bold font__size--20 text__20-1024 color__white">
                                        IT & Software
                                    </div>
                                </div>
                                <div className="position-relative d-inline-block">
                                    <img
                                        src="./../images/Highlight.png"
                                        className="path__10 blog d-none d-sm-block"
                                        alt=""
                                    />
                                    <h1 className="color__white bold text-sm-center font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">The Top 5 Considerations When Buying a <br /> Learning Solution</h1>
                                </div>

                                <p className="normal font__size--16 text__16-1024 color__gray-4">Juni 26, 2022</p>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="pb-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-11 col-lg-9">
                                <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center">
                                    <div className="wrapper__profile mb-3 mb-md-0">
                                        <img src="./../images/saad.png" className="img" alt="" />
                                        <div className="detai ml-3">
                                            <h5 className="bold font__size--14 text__14-1024 mb-1">Jaylon Herwitz</h5>
                                            <p className="meidum font__size--12 text__12-1024 color__gray-gray-2 mb-0 lh-1">Proffesional IT & Software Mentor</p>
                                        </div>
                                    </div>

                                    <div className="wrapper__share-blog d-flex align-items-center">
                                        <h5 className="mb-0 medium font__size--16 text__16-1024">Share via:</h5>

                                        <div className="sosmed ml-3">
                                            <a href="#!"><img src="./../images/faa (1).png" alt="" /></a>
                                            <a href="#!" className="mx-3"><img src="./../images/faa (3).png" alt="" /></a>
                                            <a href="#!"><img src="./../images/faa (2).png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <img src="./../images/Rectangle 40.png" className="images__blog-detail mb-4" alt="" />

                                    <p className="medium font__size--18 text__18-1024 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senectus mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>

                                    <p className="medium font__size--18 text__18-1024 mb-4">1. Address many needs with multi-modal learning
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senectus mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>
                                    <p className="medium font__size--18 text__18-1024 mb-4">2. Flexible, customized learner-focused content
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senectus mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>
                                    <p className="medium font__size--18 text__18-1024 mb-4">3. Applied technical skills learning and practice methods
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senectus mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>
                                    <p className="medium font__size--18 text__18-1024 mb-4">4. Tools for measuring the effectiveness of your learning programs
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senectus mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>
                                    <p className="medium font__size--18 text__18-1024 mb-4">5. Key technical integrations and security features
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senectus mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>
                                    <p className="medium font__size--18 text__18-1024 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat auctor lacus, euismod tellus nunc eu. Velit malesuada quis non ornare egestas quam nunc adipiscing. Congue dui quam senectus mattis amet vitae malesuada. Pellentesque leo viverra posuere gravida felis at sed. Orci quis enim, curabitur quis nunc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-4">Recommended Articles</h2>

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

                <Footer />
            </div>
        </Fragment>
    );
};

export default BlogDetail;