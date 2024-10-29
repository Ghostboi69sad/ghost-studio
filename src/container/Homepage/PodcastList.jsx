import React, { useState, Fragment, useRef } from "react";
import CardPodcastList from "../../component/card/CardPodcastList";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const PodcastList = (props) => {
    const upCOming = {
        img: "./../images/Rectangle 24.png",
        title: "2. The Search For Engaging Voice",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus aliquam pharetra eget platea lectus et purus mauris ultricies. Pharetra enim elementum dictum dolor amet feugiat odio iaculis. Etiam fames viverra ornare id id feugiat. Ac etiam sodales id commodo eget id aliquet. "
    };
    const listEpisode = [
        {
            img: "./../images/Rectangle 24.png",
            title: "1. Great Pitches Make Great Episode",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus aliquam pharetra eget platea lectus et purus mauris ultricies. Pharetra enim elementum dictum dolor amet feugiat odio iaculis. Etiam fames viverra ornare id id feugiat. Ac etiam sodales id commodo eget id aliquet. "
        },
        {
            img: "./../images/Rectangle 24.png",
            title: "2. The Search For Engaging Voice",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus aliquam pharetra eget platea lectus et purus mauris ultricies. Pharetra enim elementum dictum dolor amet feugiat odio iaculis. Etiam fames viverra ornare id id feugiat. Ac etiam sodales id commodo eget id aliquet. "
        },
        {
            img: "./../images/Rectangle 24.png",
            title: "3. Now That’s Good Tape",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus aliquam pharetra eget platea lectus et purus mauris ultricies. Pharetra enim elementum dictum dolor amet feugiat odio iaculis. Etiam fames viverra ornare id id feugiat. Ac etiam sodales id commodo eget id aliquet. "
        },
        {
            img: "./../images/Rectangle 24.png",
            title: "4. How To Get Good Tape",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus aliquam pharetra eget platea lectus et purus mauris ultricies. Pharetra enim elementum dictum dolor amet feugiat odio iaculis. Etiam fames viverra ornare id id feugiat. Ac etiam sodales id commodo eget id aliquet. "
        },
        {
            img: "./../images/Rectangle 24.png",
            title: "5. Putting It All Together",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus aliquam pharetra eget platea lectus et purus mauris ultricies. Pharetra enim elementum dictum dolor amet feugiat odio iaculis. Etiam fames viverra ornare id id feugiat. Ac etiam sodales id commodo eget id aliquet. "
        },
    ]
    return (
        <Fragment>
            <div className="overflow-hidden bg__gray-1">
                <div className="bg__purple position-relative">
                    <Navbar />
                    <section className="position-relative overflow-hidden">
                        <div className="container position-relative z-2">
                            <div className="d-flex align-items-center flex-wrap flex-md-nowrap">
                                <img src="./../images/Rectangle 24.png" className="images__cover-podcast-list mb-5 mb-md-0" alt="" />

                                <div className="wrapper__head-content w-100 ml-md-5">
                                    <div className="d-flex align-items-center medium font__size--16 text__16-1024 color__white tag mb-4">
                                        <div className="item">Career</div>
                                        <div className="item">Hobbies</div>
                                        <div className="item">How -To</div>
                                    </div>

                                    <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm color__white">Kanaya Jehnsen Academy</h2>
                                    <p className="meidum font__size--16 text__16-1024 color__gray-5 mb-lg-5 mb-3">Kanaya Jehnsen</p>


                                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
                                        <div className="wrapper__podcast-detail mb-4 mb-xl-0 w-100">
                                            <div className="d-flex align-items-center">
                                                <img src="./../images/icon (1).png" alt="" />
                                                <span className="ml-1 ml-sm-2 bold font__size--14 text__14-1024 text__14-sm text__14-xxs color__white">
                                                    300 Likes
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <img src="./../images/icon (4).png" alt="" />
                                                <span className="ml-1 ml-sm-2 bold font__size--14 text__14-1024 text__14-sm text__14-xxs color__white">
                                                    35 Episode
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <img src="./../images/icon (2).png" alt="" />
                                                <span className="ml-1 ml-sm-2 bold font__size--14 text__14-1024 text__14-sm text__14-xxs color__white">
                                                    1hr 23Mins
                                                </span>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center wrapper__btn-action flex-shrink-0">
                                            <a href="#!" className="d-flex align-items-center bold font__size--16 text__16-1024 color__white">
                                                <img src="./../images/profile-add.png" alt="" />
                                                <span className="ml-2">Follow</span>
                                            </a>
                                            <a href="#!" className="d-flex align-items-center bold font__size--16 text__16-1024 color__white ml-4">
                                                <img src="./../images/fsdfdsf.png" alt="" />
                                                <span className="ml-2">Share</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mb-4 mb-md-0">
                                <div className="mb-5">
                                    <h3 className="bold font__size--24 text__24-1024 mb-4">Up Next</h3>

                                    <CardPodcastList img={upCOming.img} title={upCOming.title} desc={upCOming.desc} />
                                </div>

                                <h3 className="bold font__size--24 text__24-1024 mb-4">All Episodes</h3>
                                {
                                    listEpisode.map((obj) => {
                                        return <div className="mb-4">
                                            <CardPodcastList img={obj.img} title={obj.title} desc={obj.desc} />
                                        </div>
                                    })
                                }

                            </div>
                            <div className="col-md-4">
                                <h3 className="bold font__size--24 text__24-1024 mb-4">About</h3>
                                <p className="normal font__size--12 text__12-1024 color__gray-2 mb-4">Hendrerit quam massa vitae volutpat morbi mauris, fermentum et tempus. Ipsum sodales morbi duis ut consectetur ut ullamcorper ullamcorper ultrices. Risus morbi non vitae semper consequat id fermentum diam ipsum. In sem enim enim in viverra lectus. Ullamcorper arcu, potenti sed pharetra, molestie turpis ac mollis. Condimentum sed turpis sed eu faucibus magna fermentum id. Porttitor ullamcorper quam quis sem risus neque, mi. Commodo id sit pellentesque tincidunt. Mi mus sem natoque magna accumsan volutpat habitasse varius. Euismod fermentum proin velit habitant. Adipiscing ultricies purus at at non. Tortor, maecenas sit ut purus vestibulum mattis sit. Neque quis ultrices imperdiet vulputate libero enim amet, non, mi.</p>

                                <div className="wrapper__tag-singgle">
                                    <a href="#!" className="item medium font__size--16 text__16-1024 color__blue">Career</a>
                                    <a href="#!" className="item medium font__size--16 text__16-1024 color__blue">Hobbies</a>
                                    <a href="#!" className="item medium font__size--16 text__16-1024 color__blue">How -To</a>
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

export default PodcastList;
