import React, { useState, Fragment, useRef } from "react";
import CardCourse from "../../component/card/CardCourse";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "./../../component/footer/Footer";
import SliderTestimonial from "../../component/slider/SliderTestimonial";
import Subscribe from "../../component/Other/Subscribe";

const Index = (props) => {
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
      img: "./../images/Image-5.jpg",
    },
    {
      title: "Basic UIUX Design for Beginner",
      review: 7,
      tag: "Maketing",
      img: "./../images/Image-6.jpg",
    },
    {
      title: "Basic UIUX Design for Beginner",
      review: 7,
      tag: "Computer Science",
      img: "./../images/Image-7.jpg",
    },
  ];

  const slider1 = useRef(null);

  const previous = () => {
    slider1.current.slickNext();
  };

  const next = () => {
    slider1.current.slickPrev();
  };

  return (
    <Fragment>
      <div className="overflow-hidden bg__gray-1">
        <div className="bg__purple position-relative">
          <Navbar />
          <section className="position-relative">
            <img
              src="./../images/Group 162757.png"
              className="path__2 d-none d-lg-block"
              alt=""
            />
            <div className="container position-relative z-2">
              <div className="row mb-4 mb-lg-0">
                <div className="col-lg-7">
                  <div className="position-relative">
                    <h1 className="color__white bold font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">
                      Find the best way to learn new things to improve <br />{" "}
                      your skills
                    </h1>
                    <img
                      src="./../images/Underline_06.png"
                      className="path__1"
                      alt=""
                    />
                  </div>
                  <p className="normal font__size--14 text__14-1024 color__gray-2 my-4">
                    Vitae integer pellentesque platea ipsum tristique turpis
                    eros, ante <br className="d-none d-lg-block" />{" "}
                    sollicitudin. Ut sed eleifend duis morbi. Turpis id in nam
                    aliquam amet, <br className="d-none d-lg-block" /> duis
                    sedvolutpat sit ipsum facilisis. Mauris id fusce lectus
                    justo{" "}
                  </p>

                  <div className="d-sm-flex align-items-center">
                    <a
                      href="#!"
                      className="bold font__size--16 text__16-1024 btn btn__white wrapper__width-mm-100 shadow color__purple mb-4 mb-sm-0 mr-sm-3"
                    >
                      Get Started
                    </a>
                    <a
                      href="#!"
                      className="bold font__size--16 text__16-1024 btn btn__outlined--white wrapper__width-mm-100 no__opacity shadow h__purple color__white"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="./../images/Group 162757.png"
                className="d-lg-none"
                alt=""
              />
            </div>
          </section>
        </div>
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

        <section className="wrapper__bg-md-white">
          <div className="container">
            <div className="wrapper__work-wrap">
              <div className="row mb__5">
                <div className="col-md-6 my-auto">
                  <img src="./../images/Group 14.png" alt="" />
                </div>
                <div className="col-md-6 my-auto">
                  <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-0">
                    Learn with various materials and various fields in a modern
                    way
                  </h3>
                  <p className="normal font__size--14 text__14-1024 color__gray-2 my-4">
                    Elit quam cras sollicitudin ridiculus commodo a eget.
                    Quisque magna tempus urna lectus. Nec tortor, vehicula nunc,
                    duis orci. Nunc urna, vitae sit sapien diam diam cursus.
                    Cras tempus venenatis consequat, in amet urna, tempor. Augue
                    elit, ultrices sapien tellus. Tellus sapien, risus mauris
                    pretium. At tortor, blandit lorem sit ac, malesuada.
                  </p>

                  <a
                    href="#!"
                    className="bold font__size--16 text__16-1024 color__black"
                  >
                    <div className="d-flex align-items-center">
                      About us{" "}
                      <img
                        src="./../images/Frame.png"
                        className="ml-2"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>

              <div className="text-center mb-5">
                <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-0">
                  How it works
                </h3>
                <p className="normal font__size--14 text__14-1024 color__gray-2 mt-4">
                  Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
                  magna tempus urna lectus. Nec{" "}
                  <br className="d-none d-md-block" /> tortor, vehicula nunc,
                  duis orci. Nunc urna, vitae sit sapien diam diam cursus. Cras
                  tempus <br className="d-none d-md-block" /> venenatis
                  consequat.
                </p>
              </div>

              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="wrapper__card-works z-2">
                        <div className="icon mb__5">
                          <img
                            src="./../images/Group 162758.png"
                            className="bg"
                            alt=""
                          />
                          <img
                            src="./../images/fdsfsd.png"
                            className="position-relative z-2"
                            alt=""
                          />
                        </div>

                        <h5 className="bols font__size--20 text__20-1024 text__20-md mb-3">
                          Discover Course
                        </h5>
                        <p className="normal font__size--12 text__12-1024 lh-2 color__gray-2">
                          Elit quam cras sollicitudin ridiculus commodo a eget.
                          Quisque magna tempus urna lectus. Nec tortor, vehicula
                          nunc, duis orci. Nunc urna.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="wrapper__card-works z-1">
                        <div className="icon mb__5">
                          <img
                            src="./../images/Group 162758.png"
                            className="bg"
                            alt=""
                          />
                          <img
                            src="./../images/Frame (1).png"
                            className="position-relative z-2"
                            alt=""
                          />
                        </div>

                        <h5 className="bols font__size--20 text__20-1024 text__20-md mb-3">
                          Watch videos online
                        </h5>
                        <p className="normal font__size--12 text__12-1024 lh-2 color__gray-2">
                          Elit quam cras sollicitudin ridiculus commodo a eget.
                          Quisque magna tempus urna lectus. Nec tortor, vehicula
                          nunc, duis orci. Nunc urna.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wrapper__card-works">
                        <div className="icon mb__5">
                          <img
                            src="./../images/Group 162758.png"
                            className="bg"
                            alt=""
                          />
                          <img
                            src="./../images/Frame (2).png"
                            className="position-relative z-2"
                            alt=""
                          />
                        </div>

                        <h5 className="bols font__size--20 text__20-1024 text__20-md mb-3">
                          Share to your friends
                        </h5>
                        <p className="normal font__size--12 text__12-1024 lh-2 color__gray-2">
                          Elit quam cras sollicitudin ridiculus commodo a eget.
                          Quisque magna tempus urna lectus. Nec tortor, vehicula
                          nunc, duis orci. Nunc urna.
                        </p>
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
            <div className="text-center mb-5">
              <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-0">
                Featured Course
              </h3>
              <p className="normal font__size--14 text__14-1024 color__gray-2 mt-4 mb-4">
                Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
                magna <br className="d-none d-sm-block" /> tempus urna lectus.
                Nec tortor, vehicula nunc, duis orci.
              </p>

              <div className="wrapper__width-res">
                <div className="wrapper__nav-tab-center mb-3">
                  <ul
                    class="nav nav-pills justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024 active"
                        id="pills-all-tab"
                        data-toggle="pill"
                        href="#pills-all"
                        role="tab"
                        aria-controls="pills-all"
                        aria-selected="true"
                      >
                        all
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024"
                        id="pills-Design-tab"
                        data-toggle="pill"
                        href="#pills-Design"
                        role="tab"
                        aria-controls="pills-Design"
                        aria-selected="false"
                      >
                        Design
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024"
                        id="pills-Programming-tab"
                        data-toggle="pill"
                        href="#pills-Programming"
                        role="tab"
                        aria-controls="pills-Programming"
                        aria-selected="false"
                      >
                        Programming
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024"
                        id="pills-Finance-tab"
                        data-toggle="pill"
                        href="#pills-Finance"
                        role="tab"
                        aria-controls="pills-Finance"
                        aria-selected="false"
                      >
                        Finance
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024"
                        id="pills-Art-tab"
                        data-toggle="pill"
                        href="#pills-Art"
                        role="tab"
                        aria-controls="pills-Art"
                        aria-selected="false"
                      >
                        Art
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024"
                        id="pills-Science-tab"
                        data-toggle="pill"
                        href="#pills-Science"
                        role="tab"
                        aria-controls="pills-Science"
                        aria-selected="false"
                      >
                        Science
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024"
                        id="pills-BigData-tab"
                        data-toggle="pill"
                        href="#pills-BigData"
                        role="tab"
                        aria-controls="pills-BigData"
                        aria-selected="false"
                      >
                        Big Data
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link color__black bold font__size--14 text__14-1024"
                        id="pills-Management-tab"
                        data-toggle="pill"
                        href="#pills-Management"
                        role="tab"
                        aria-controls="pills-Management"
                        aria-selected="false"
                      >
                        Management
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-all"
                role="tabpanel"
                aria-labelledby="pills-all-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Design"
                role="tabpanel"
                aria-labelledby="pills-Design-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Programming"
                role="tabpanel"
                aria-labelledby="pills-Programming-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Finance"
                role="tabpanel"
                aria-labelledby="pills-Finance-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Art"
                role="tabpanel"
                aria-labelledby="pills-Art-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Science"
                role="tabpanel"
                aria-labelledby="pills-Science-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-BigData"
                role="tabpanel"
                aria-labelledby="pills-BigData-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Management"
                role="tabpanel"
                aria-labelledby="pills-Management-tab"
              >
                <div className="row">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Subscribe />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Index;
