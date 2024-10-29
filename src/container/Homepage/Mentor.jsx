import React, { useState, Fragment, useRef } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { NavLink } from "react-router-dom";
import CardCourse from "../../component/card/CardCourse";

const Mentor = (props) => {
    const [descShow, setDescShow] = useState(true)

    const courses = [
        {
            title: "Basic UIUX Design for Beginner",
            review: 7,
            tag: "Design",
            img: "./../images/Image.jpg",
        },
        {
            title: "Basic UIUX Design for Beginner",
            review: 7,
            tag: "Programming",
            img: "./../images/Image-1.jpg",
        },
        {
            title: "Basic UIUX Design for Beginner",
            review: 7,
            tag: "Maketing",
            img: "./../images/Image-2.jpg",
        },
        {
            title: "Basic UIUX Design for Beginner",
            review: 7,
            tag: "Computer Science",
            img: "./../images/Image-3.jpg",
        },
    ];
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
                                    <h1 className="color__white bold text-sm-center font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">Hi, Let’s Connect</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <div className="row mt__min-11 md-0">
                                    <div className="col-lg-7 mb-4 mb-lg-0">
                                        <img src="./../images/Ellipse 16.png" className="images__profile-mentor mb-4" alt="" />

                                        <h2 className="bold font__size--28 text__28-1024 text__28-sm">Dominic Lovre</h2>
                                        <p className="medium font__size--14 text__14-1024 color__gray-2 mb-4">I’m Proffesional Design Mentor Based in Melbourne</p>

                                        <div className="d-flex mb-3">
                                            <div>
                                                <p className="medium font__size--14 text__14-1024 color__gray-2 mb-2">Total Course</p>
                                                <h4 className="bold font__size--28 text__28-1024 text__28-sm">12 Course</h4>
                                            </div>
                                            <div className="ml-4">
                                                <p className="medium font__size--14 text__14-1024 color__gray-2 mb-2">Rating</p>
                                                <h4 className="bold font__size--28 text__28-1024 text__28-sm">4,5 (20 Reviews)</h4>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h5 className="bold font__size--20 text__20-1024">Experience</h5>
                                            <p className="medium font__size--14 text__14-1024 mb-0">Since 1989 I've worked in the fields of human factors, <b>usability and user experience</b> and I've published three books on usability, including <b>"Think Like a UX Researcher"</b>. I'm now a <b>User Experience Strategist at Userfocus</b>, a consultancy specialising in user experience. I'm no longer in contact with Sting or Ray Winstone, whose career trajectories have been somewhat different. </p>
                                        </div>

                                        <div className={"mb-4 wrapper__show-desc " + (descShow ? "" : "close__wrap")}>
                                            <h5 className="bold font__size--20 text__20-1024">About Me</h5>
                                            <p className="medium font__size--14 text__14-1024">I'm on a mission to create more user experience professionals.  Eget felis nibh habitant quis sit eleifend egestas non id. Gravida donec viverra quisque bibendum. Ipsum ac ac hendrerit feugiat ac lectus congue. Sed egestas malesuada turpis enim in pulvinar tortor suspendisse. Nullam neque tristique aliquet turpis nec duis purus blandit id. Sed vivamus tristique scelerisque id diam feugiat penatibus pellentesque. Mi, odio lobortis nunc vitae. Tristique duis massa ac ullamcorper varius cursus.</p>
                                            <p className="medium font__size--14 text__14-1024">Elementum in pulvinar in pulvinar phasellus eget. Amet sagittis duis varius purus, nunc commodo. Viverra viverra est ornare tristique sit. Sed sed nunc aenean hac massa. Ut risus suscipit quam sit arcu lectus. Arcu non malesuada eget ut. Et parturient sed tempor integer eleifend tincidunt tincidunt enim urna.</p>
                                            <p className="medium font__size--14 text__14-1024">Diam nunc maecenas justo sit nisl, habitasse massa vestibulum, phasellus. Sem sit tortor habitant eu lobortis varius ornare. Mollis pellentesque amet cras aliquam. Risus duis et massa odio massa pharetra. Nunc, etiam ut tortor tortor molestie volutpat. Scelerisque sit praesent tortor, enim condimentum. Diam at quam urna, in ut commodo proin pretium. Luctus eget quis quis eget egestas. Neque, quis lacus, non eleifend molestie sed nibh. Quam tortor ullamcorper mi elementum tincidunt diam arcu, neque. Sem egestas donec nisl scelerisque sem urna habitasse auctor eros. Neque, amet, aliquam condimentum sapien a congue non, lacinia pharetra. In neque massa ac hendrerit nulla urna. Vitae eu, pellentesque mauris nisi pretium urna, enim, porttitor.</p>
                                        </div>

                                        <div className={"wrapper__show-content d-flex align-items-center pointer " + (descShow ? "" : "close__wrap")} onClick={() => setDescShow(!descShow)}>
                                            <span className="semi-bold font__size--16 text__16-1024 mr-2">Show Less</span>
                                            <img src="./../images/arrow-up.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-xl-4 offset-xl-1 mt__13 md-0">
                                        <div className="wrapper__detail-skill">
                                            <div className="mb-4">
                                                <h5 className="bold font__size--20 text__20-1024 mb-3">Skill</h5>

                                                <div className="wrapper__tag-skill d-flex flex-wrap medium font__size--16 text__16-1024">
                                                    <a href="#!" className="color__blue">UX Design</a>
                                                    <a href="#!" className="color__blue">Product Design</a>
                                                    <a href="#!" className="color__blue">FIgma</a>
                                                    <a href="#!" className="color__blue">Webflow</a>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="bold font__size--20 text__20-1024 mb-3">Location</h5>

                                                <div className="d-flex align-items-center">
                                                    <img src="./../images/dsdsadsad.png" alt="" />
                                                    <span className="semi-bold font__size--18 text__18-1024 ml-2">Melbourne,Australia</span>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="bold font__size--20 text__20-1024 mb-3">Website</h5>

                                                <a href="#!" className="semi-bold font__size--18 text__18-1024 color__black decoration">dominiclovre.com</a>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="bold font__size--20 text__20-1024 mb-3">Email</h5>

                                                <a href="#!" className="bold font__size--18 text__18-1024 color__black">hello.dominiclovre@gmail.com</a>
                                            </div>
                                            <div className="">
                                                <h5 className="bold font__size--20 text__20-1024 mb-3">Social Media</h5>

                                                <a href="#!" className="semi-bold font__size--18 text__18-1024 color__black d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <img src="./../images/dsds (1).png" alt="" />
                                                        <span className="ml-2">dominic.lovre</span>
                                                    </div>
                                                    <img src="./../images/dsds (2).png" alt="" />
                                                </a>
                                                <a href="#!" className="semi-bold font__size--18 text__18-1024 color__black d-flex align-items-center justify-content-between my-3">
                                                    <div className="d-flex align-items-center">
                                                        <img src="./../images/dsds (4).png" alt="" />
                                                        <span className="ml-2">dominic.lovre</span>
                                                    </div>
                                                    <img src="./../images/dsds (2).png" alt="" />
                                                </a>
                                                <a href="#!" className="semi-bold font__size--18 text__18-1024 color__black d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <img src="./../images/dsds (3).png" alt="" />
                                                        <span className="ml-2">dominic.lovre</span>
                                                    </div>
                                                    <img src="./../images/dsds (2).png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h4 className="bold font__size--24 text__24-1024 mb-4">My Course (12)</h4>
                        <div className="row">
                            {courses.map((obj) => {
                                return (
                                    <div className="col-md-6 col-sm-4 col-xl-3 mb-4">
                                        <CardCourse obj={obj} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
};

export default Mentor;
