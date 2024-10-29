import React, { useState, Fragment, useRef } from "react";
import { Range, getTrackBackground } from "react-range";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardCourse from "../../component/card/CardCourse";

const Course = (props) => {
  const Category = [
    "all",
    "Design",
    "Business",
    "Programming",
    "Health",
    "Finance",
    "Art",
  ];

  const discount = ["all", "Year sale", "Flash sale"];

  const STEP = 0.1;
  const MIN = 0;
  const MAX = 200;
  const rtl = false;

  const [values, setValues] = useState([0, 200]);

  const [sortBy, setSortBy] = useState("Newest");

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

  return (
    <Fragment>
      <div className="overflow-hidden bg__gray-1">
        <div className="bg__purple position-relative">
          <Navbar />
          <section className="position-relative">
            <img src="./../images/Group 3086.png" className="path__13" alt="" />
            <div className="container position-relative z-2">
              <div className="position-relative">
                <img
                  src="./../images/ZZZ - 2021-07-12.png"
                  className="path__12 d-none d-sm-block"
                  alt=""
                />
                <div className="row justify-content-sm-center">
                  <div className="col-lg-7">
                    <div className="position-relative">
                      <div className="position-relative d-inline-block">
                        <img
                          src="./../images/Highlight.png"
                          className="path__10 d-none d-sm-block"
                          alt=""
                        />
                        <h1 className="color__white bold text-sm-center font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">
                          We provide various courses to improve{" "}
                          <div className="position-relative d-inline-block">
                            your skills
                            <img
                              src="./../images/Underline.png"
                              className="path__11"
                              alt=""
                            />
                          </div>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3 mt-sm-5">
                <div className="col-md-8">
                  <div className="position-realtive z-2">
                    <div className="wrapper__search">
                      <h5 className="bold font__size--14 text__14-1024">Search courses</h5>
                      <div className="serach d-flex align-items-center position-relative">
                        <input
                          type="text"
                          placeholder="UX Design |"
                          className="medium font__size--12 text__12-1024"
                        />
                        <button>
                          <img src="./../images/Frame (5).png" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper__count-about d-flex justify-content-center align-items-center mt-5">
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
          </section>
        </div>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 d-none d-lg-block">
                <div className="wrapper__filter-bar bg__white">
                  <div className="d-flex laign-items-center justify-content-between">
                    <h4 className="mb-0 bold font__size--16 text__16-1024">Filter</h4>
                    <p className="mb-0 bold font__size--12 text__12-1024 pointer color__blue">
                      Reset Filter
                    </p>
                  </div>
                  <hr />

                  <div className="mb-3">
                    <h5 className="bold font__size--12 text__12-1024">Category</h5>

                    {Category.map((obj) => {
                      return (
                        <div className="mb-2">
                          <label class="wrapper__checkbox position-relative medium font__size--14 text__14-1024 color__gray-2 d-flex align-items-center">
                            <input type="checkbox" className="select" />
                            <span class="checkmark mb-0 mr-2">
                              <div className="box"></div>
                            </span>
                            {obj}
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-3">
                    <h5 className="bold font__size--12 text__12-1024">Price</h5>

                    <div className="wrapper__range-price normal font__size--14 text__14-1024 text__14-1024 d-md-flex align-items-center justify-content-between mb-3  d-none">
                      <p className="mb-0 medium font__size--14 text__14-1024 color__gray-2">
                        ${Math.round(values[0])}
                      </p>
                      <p className="mb-0 medium font__size--14 text__14-1024 color__gray-2">
                        ${Math.round(values[1])}
                      </p>
                    </div>

                    <div
                      className="px-2  d-none d-md-flex"
                      style={{
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        rtl={rtl}
                        onChange={(values) => {
                          setValues(values);
                        }}
                        renderTrack={({ props, children }) => (
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: "36px",
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <div
                              ref={props.ref}
                              style={{
                                height: "5px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                  values,
                                  colors: ["#D8D1E2", "#ff8057", "#D8D1E2"],
                                  min: MIN,
                                  max: MAX,
                                  rtl,
                                }),
                                alignSelf: "center",
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: "18px",
                              width: "18px",
                              borderRadius: "50%",
                              backgroundColor: "white",
                              border: "4px solid #ff8057",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow: "none",
                              outlineStyle: "none",
                            }}
                          ></div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <h5 className="bold font__size--12 text__12-1024">Discount</h5>

                    {discount.map((obj) => {
                      return (
                        <div className="mb-2">
                          <label class="wrapper__checkbox position-relative medium font__size--14 text__14-1024 color__gray-2 d-flex align-items-center">
                            <input type="checkbox" className="select" />
                            <span class="checkmark mb-0 mr-2">
                              <div className="box"></div>
                            </span>
                            {obj}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="wrapper__filter-head mb-4 d-flex align-items-center justify-content-between">
                  <h5 className="mb-0 font__size--16 text__16-1024 semi-bold d-none d-lg-block">
                    Showing : 126 Result
                  </h5>

                  <div className="wrapper__filter d-lg-none">
                    <img src="./../images/sdsdasd.png" alt="" />
                    <span className="font__size--16 text__16-1024 semi-bold ml-2">Filter</span>
                  </div>

                  <div className="sortBy mb-0">
                    <div class="dropdown">
                      <button
                        class="button semi-bold font__size--16 text__16-1024"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center color__gray-2">
                          Sort By :{" "}
                          <span className="ml-2 color__black">{sortBy}</span>
                          <img
                            src="./../images/eva_arrow-ios-forward-fill.png"
                            alt=""
                            className="ml-2 arrow"
                          />
                        </div>
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          onClick={() => setSortBy("Featured")}
                          href="#!"
                        >
                          Featured
                        </a>
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          onClick={() => setSortBy("Newest")}
                          href="#!"
                        >
                          Newest
                        </a>
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          onClick={() => setSortBy(" Price High - Low")}
                          href="#!"
                        >
                          Price High - Low
                        </a>
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          onClick={() => setSortBy("Price Low - High")}
                          href="#!"
                        >
                          Price Low - High
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-5">
                  {courses.map((obj) => {
                    return (
                      <div className="col-md-6 col-xl-4 mb-4">
                        <CardCourse obj={obj} />
                      </div>
                    );
                  })}
                </div>

                <nav aria-label="Page navigation example">
                  <ul class="wrapper__pagination pagination justify-content-center">
                    <li class="page-item">
                      <a
                        class="page-link color__black bold font__size--14 text__14-1024"
                        href="#"
                        aria-label="Previous"
                      >
                        <svg
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.29303 11.707L0.586032 5.99997L6.29303 0.292969L7.70703 1.70697L3.41403 5.99997L7.70703 10.293L6.29303 11.707Z"
                            fill="#A79FB3"
                          />
                        </svg>
                      </a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link color__black bold font__size--14 text__14-1024"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link color__black bold font__size--14 text__14-1024 active"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link color__black bold font__size--14 text__14-1024"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link color__black bold font__size--14 text__14-1024"
                        href="#"
                        aria-label="Next"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z"
                            fill="#A79FB3"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Course;
