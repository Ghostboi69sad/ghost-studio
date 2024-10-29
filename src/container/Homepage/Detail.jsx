import React, { useState, Fragment, useRef } from "react";
import { Range, getTrackBackground } from "react-range";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardCourse from "../../component/card/CardCourse";
import CardCommand from "../../component/card/CardCommand";
import CardReview from "../../component/card/CardReview";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Detail = (props) => {
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

  const video = useRef(null);

  const [play, setPlay] = useState(false);


  const tootlePlay = () => {
    if (!play) {
      video.current.play();
    } else {
      video.current.pause();
    }

    setPlay(!play);
  };

  useEffect(() => {
    const videoData = document.getElementById("video__play")
    videoData.addEventListener("pause", () => {
      setPlay(!play);
    });
  }, [play])

  const telegramUrl = "https://www.youtube.com/watch?v=zfKa86o-9lg";

  return (
    <Fragment>
      <div className="overflow-hidden bg__gray-1">
        <div className="bg__purple position-relative">
          <Navbar />
          <section className="position-relative">
            <div className="container">
              <div className="row mb-4">
                <div className="col-lg-8 mb-4 mb-lg-0">
                  <div className="wrapper__video position-relative mb-4 mb-lg-0">
                    <img src="./../images/Button.png" onClick={tootlePlay} className={"play pointer " + (play ? "hidden" : "")} alt="" />
                    <video
                      ref={video}
                      poster="./../images/Rectangle 36.png"
                      className="path__video-bg"
                      id="video__play"
                      autoPlay={false}
                      controls={play}
                      playsInline
                      preload={true}
                      loop
                      muted
                    >
                      <source
                        src="https://www.youtube.com/watch?v=zfKa86o-9lg"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                  <div className="d-flex d-lg-none flex-wrap justify-content-between">
                    <div className="mb-3 mb-xl-0">
                      <h4 className="bosl color__white font__size--28 text__28-1024">
                        Basic UIUX Design for beginner
                      </h4>
                      <div className="wrapper__list-info flex-wrap">
                        <div className="items mb-3 mb-sm-0">
                          <div className="rate">
                            <div className="d-flex align-items-center">
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                            </div>
                            <span className="bosl font__size--18 text__18-1024 color__white">
                              (7)
                            </span>
                          </div>
                        </div>
                        <div className="items mb-3 mb-sm-0">
                          <span className="bold font__size--16 text__16-1024 color__white">
                            Intermediate
                          </span>
                        </div>
                        <div className="items mb-3 mb-sm-0">
                          <span className="bold font__size--16 text__16-1024 color__white tag">
                            Design
                          </span>
                        </div>
                        <div className="items mb-3 mb-sm-0">
                          <span className="bold font__size--16 text__16-1024 color__white">
                            12 Videos
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <a
                        href="#!"
                        className="btn__action bold font__size--16 text__16-1024 color__white"
                      >
                        <img
                          src="./../images/sdsas.png"
                          className="mr-3"
                          alt=""
                        />
                        Design
                      </a>
                      <a
                        href="#!"
                        className="btn__action bold font__size--16 text__16-1024 color__white ml-3"
                      >
                        <img
                          src="./../images/Frame (6).png"
                          className="mr-3"
                          alt=""
                        />
                        Share
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="wrapper__playlist mb-3">
                    <div className="head">
                      <h4 className="bold font__size--20 text__20-1024 color__white mb-0">
                        Playlist of topic
                      </h4>
                    </div>
                    <hr className="my-0" />
                    <div className="content">
                      <div className="scroll">
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                        <div className="item">
                          <h5 className="bold font__size--16 text__16-1024 color__white">
                            Elementum sapien ac ipsum pos
                          </h5>
                          <p className="mb-0 medium font__size--14 text__14-1024 color__gray-3">
                            1:32
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavLink to="/payment"
                    className="btn btn__white bold w-100 font__size--16 text__16-1024 color__purple shadow"
                  >
                    Buy this course ($24)
                  </NavLink>
                </div>
              </div>
              <div className="row d-none d-lg-block">
                <div className="col-md-8">
                  <div className="d-flex flex-wrap justify-content-between">
                    <div className="mb-3 mb-xl-0">
                      <h4 className="bosl color__white font__size--28 text__28-1024">
                        Basic UIUX Design for beginner
                      </h4>
                      <div className="wrapper__list-info">
                        <div className="items">
                          <div className="rate">
                            <div className="d-flex align-items-center">
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                              <img src="./../images/Frame (sasd5).png" alt="" />
                            </div>
                            <span className="bosl font__size--18 text__18-1024 color__white">
                              (7)
                            </span>
                          </div>
                        </div>
                        <div className="items">
                          <span className="bold font__size--16 text__16-1024 color__white">
                            Intermediate
                          </span>
                        </div>
                        <div className="items">
                          <span className="bold font__size--16 text__16-1024 color__white tag">
                            Design
                          </span>
                        </div>
                        <div className="items">
                          <span className="bold font__size--16 text__16-1024 color__white">
                            12 Videos
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <a
                        href="#!"
                        className="btn__action bold font__size--16 text__16-1024 color__white"
                      >
                        <img
                          src="./../images/sdsas.png"
                          className="mr-3"
                          alt=""
                        />
                        Design
                      </a>
                      <a
                        href="#!"
                        className="btn__action bold font__size--16 text__16-1024 color__white ml-3"
                      >
                        <img
                          src="./../images/Frame (6).png"
                          className="mr-3"
                          alt=""
                        />
                        Share
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
            <ul
              class="wrapper__navtab-wrap nav nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link bold font__size--28 text__28-1024 text__28-sm text__28-xxs text-capitalize color__black active"
                  id="pills-about-tab"
                  data-toggle="pill"
                  href="#pills-about"
                  role="tab"
                  aria-controls="pills-about"
                  aria-selected="true"
                >
                  about
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link bold command font__size--28 text__28-1024 text__28-sm text__28-xxs text-capitalize color__black"
                  id="pills-comment-tab"
                  data-toggle="pill"
                  href="#pills-comment"
                  role="tab"
                  aria-controls="pills-comment"
                  aria-selected="false"
                >
                  comment{" "}
                  <span className="bosl font__size--20 text__20-1024 text__20-sm color__gray-2">
                    (12)
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link bold font__size--28 text__28-1024 text__28-sm text__28-xxs text-capitalize color__black"
                  id="pills-Reviews-tab"
                  data-toggle="pill"
                  href="#pills-Reviews"
                  role="tab"
                  aria-controls="pills-Reviews"
                  aria-selected="false"
                >
                  Reviews
                </a>
              </li>
            </ul>
            <div className="row">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <hr className="hr__line mt-0" />
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-about"
                    role="tabpanel"
                    aria-labelledby="pills-about-tab"
                  >
                    <p className="meidum font__size--14 text__14-1024 color__gray-2 mb-4">
                      Eget felis nibh habitant quis sit eleifend egestas non id.
                      Gravida donec viverra quisque bibendum. Ipsum ac ac
                      hendrerit feugiat ac lectus congue. Sed egestas malesuada
                      turpis enim in pulvinar tortor suspendisse. Nullam neque
                      tristique aliquet turpis nec duis purus blandit id. Sed
                      vivamus tristique scelerisque id diam feugiat penatibus
                      pellentesque. Mi, odio lobortis nunc vitae. Tristique duis
                      massa ac ullamcorper varius cursus. Amet lorem ultricies
                      natoque non purus at odio eu. Aliquam velit ultrices ut
                      sagittis in pellentesque euismod at. Elementum in pulvinar
                      in pulvinar phasellus eget. Amet sagittis duis varius
                      purus, nunc commodo. Viverra viverra est ornare tristique
                      sit. Sed sed nunc aenean hac massa. Ut risus suscipit quam
                      sit arcu lectus. Arcu non malesuada eget ut. Et parturient
                      sed tempor integer eleifend tincidunt tincidunt enim urna.{" "}
                    </p>
                    <p className="meidum font__size--14 text__14-1024 color__gray-2 mb-4">
                      Sed tristique eget bibendum scelerisque mi. Diam nunc
                      maecenas justo sit nisl, habitasse massa vestibulum,
                      phasellus. Sem sit tortor habitant eu lobortis varius
                      ornare. Mollis pellentesque amet cras aliquam. Risus duis
                      et massa odio massa pharetra. Nunc, etiam ut tortor tortor
                      molestie volutpat. Scelerisque sit praesent tortor, enim
                      condimentum. Diam at quam urna, in ut commodo proin
                      pretium. Luctus eget quis quis eget egestas. Neque, quis
                      lacus, non eleifend molestie sed nibh. Quam tortor
                      ullamcorper mi elementum tincidunt diam arcu, neque. Sem
                      egestas donec nisl scelerisque sem urna habitasse auctor
                      eros. Neque, amet, aliquam condimentum sapien a congue
                      non, lacinia pharetra. In neque massa ac hendrerit nulla
                      urna. Vitae eu, pellentesque mauris nisi pretium urna,
                      enim, porttitor.
                    </p>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-comment"
                    role="tabpanel"
                    aria-labelledby="pills-comment-tab"
                  >
                    <div className="wrapper__write-command mb-4">
                      <img src="./../images/saad.png" className="user" alt="" />
                      <div className="write ml-3">
                        <input
                          type="text"
                          placeholder="Write a comment"
                          className="font__size--14 text__14-1024 color__gray-5"
                        />
                        <div className="send flex-shrink-0 ml-2">
                          <img src="./../images/fggfdg.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <CardCommand />
                    </div>
                    <div className="mb-4">
                      <CardCommand />
                    </div>
                    <div className="mb-4">
                      <CardCommand />
                    </div>
                    <div className="mb-4">
                      <CardCommand />
                    </div>
                    <div className="mb-4">
                      <CardCommand />
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-Reviews"
                    role="tabpanel"
                    aria-labelledby="pills-Reviews-tab"
                  >
                    <div className="mb-4">
                      <CardReview />
                    </div>
                    <div className="mb-4">
                      <CardReview />
                    </div>
                    <div className="mb-4">
                      <CardReview />
                    </div>
                    <div className="mb-4">
                      <CardReview />
                    </div>
                    <div className="mb-4">
                      <CardReview />
                    </div>
                    <div className="mb-4">
                      <CardReview />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="wrapper__profile-mentor mb-4">
                  <div className="head">
                    <h4 className="bold font__size--20 text__20-1024 mb-4">About Creator</h4>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="d-flex align-items-center mb-3 mb-sm-0 mb-lg-3 mb-xl-0">
                        <img
                          src="./../images/saad.png"
                          className="images__profile"
                          alt=""
                        />
                        <div className="ml-3">
                          <h5 className="bold font__size--14 text__14-1024 mb-0">
                            Dominic Lovre
                          </h5>
                          <p className="mb-0 medium font__size--12 text__12-1024">
                            Proffesional Design Mentor
                          </p>
                        </div>
                      </div>
                      <NavLink to="/mentor"
                        className="bold font__size--12 text__12-1024 btn btn__purple color__white shadow btn__profile"
                      >
                        See Full Profile
                      </NavLink>
                    </div>
                  </div>
                  <hr className="my-0" />
                  <div className="footer">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="items">
                        <h5 className="medium font__size--12 text__12-1024 color__gray-2 mb-0">
                          Total Course
                        </h5>
                        <p className="mb-0 bold font__size--14 text__14-1024">12 Course</p>
                      </div>
                      <div className="items">
                        <h5 className="medium font__size--12 text__12-1024 color__gray-2 mb-0">
                          Rating
                        </h5>
                        <p className="mb-0 bold font__size--14 text__14-1024">
                          4,5 (20 Reviews)
                        </p>
                      </div>
                      <div className="items mt-3 mt-sm-0 mt-lg-3 mt-xl-0 d-flex align-items-center">
                        <a href="#!" className="opacity__5 hover">
                          <img src="./../images/hjghjg.png" alt="" />
                        </a>
                        <a href="#!" className="mx-3 opacity__5 hover">
                          <img src="./../images/dsd.png" alt="" />
                        </a>
                        <a href="#!" className="opacity__5 hover">
                          <img src="./../images/Frame (7).png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrapper__rating-list">
                  <h5 className="bold font__size--20 text__20-1024">Rating</h5>

                  <div className="d-flex align-items-end">
                    <div className="rating flex-shrink-0">
                      <h5 className="bold font__size--42">4.5</h5>
                      <div className="star">
                        <img src="./../images/Frame (sasd5).png" alt="" />
                        <img src="./../images/Frame (sasd5).png" alt="" />
                        <img src="./../images/Frame (sasd5).png" alt="" />
                        <img src="./../images/Frame (sasd5).png" alt="" />
                        <img src="./../images/Frame (sasd5).png" alt="" />
                      </div>
                      <p className="medium mb-0 font__size--12 text__12-1024 color__gray-2">
                        60 Reviews
                      </p>
                    </div>
                    <div className="progress__wrap w-100 ml-3">
                      <div className="items">
                        <div className="d-flex align-items-center">
                          <img
                            src="./../images/Frame (sasd5).png"
                            className="mr-1"
                            alt=""
                          />
                          <span className="bold font__size--12 text__12-1024 mr-2">5</span>
                          <div class="progress w-100 mr-2">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span className="bold font__size--12 text__12-1024">100</span>
                        </div>
                      </div>
                      <div className="items">
                        <div className="d-flex align-items-center">
                          <img
                            src="./../images/Frame (sasd5).png"
                            className="mr-1"
                            alt=""
                          />
                          <span className="bold font__size--12 text__12-1024 mr-2">4</span>
                          <div class="progress w-100 mr-2">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span className="bold font__size--12 text__12-1024">44</span>
                        </div>
                      </div>
                      <div className="items">
                        <div className="d-flex align-items-center">
                          <img
                            src="./../images/Frame (sasd5).png"
                            className="mr-1"
                            alt=""
                          />
                          <span className="bold font__size--12 text__12-1024 mr-2">5</span>
                          <div class="progress w-100 mr-2">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "35%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span className="bold font__size--12 text__12-1024">7</span>
                        </div>
                      </div>
                      <div className="items">
                        <div className="d-flex align-items-center">
                          <img
                            src="./../images/Frame (sasd5).png"
                            className="mr-1"
                            alt=""
                          />
                          <span className="bold font__size--12 text__12-1024 mr-2">2</span>
                          <div class="progress w-100 mr-2">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span className="bold font__size--12 text__12-1024">0</span>
                        </div>
                      </div>
                      <div className="items">
                        <div className="d-flex align-items-center">
                          <img
                            src="./../images/Frame (sasd5).png"
                            className="mr-1"
                            alt=""
                          />
                          <span className="bold font__size--12 text__12-1024 mr-2">1</span>
                          <div class="progress w-100 mr-2">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span className="bold font__size--12 text__12-1024">0</span>
                        </div>
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
            <h4 className="bold font__size--24 text__24-1024 mb-4">Related Course</h4>
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
      <div className="telegram-container" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <h4 className="bold font__size--24 text__24-1024 mb-4">Telegram Content</h4>
        <iframe
          src={telegramUrl}
          width="100%"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          style={{ border: 'none', overflow: 'hidden', borderRadius: '10px' }}
          title="Telegram Embed"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Detail;
