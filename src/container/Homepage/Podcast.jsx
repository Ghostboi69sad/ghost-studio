import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import CardPodcast from "../../component/card/CardPodcast";
import CardRecomendation from "../../component/card/CardRecomendation";
import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Other/Subscribe";
import Footer from "../../component/footer/Footer";
const Podcast = (props) => {
  const category = [
    {
      img: "./../images/Image (25).png",
      title: "Business",
    },
    {
      img: "./../images/Image (26).png",
      title: "Design",
    },
    {
      img: "./../images/Image (27).png",
      title: "Photograph",
    },
    {
      img: "./../images/Image (28).png",
      title: "Technology",
    },
  ];

  return (
    <Fragment>
      <div className="overflow-hidden bg__gray-1">
        <div className="bg__purple position-relative">
          <Navbar />
          <section className="position-relative">
            <img
              src="./../images/Group 162759.png"
              className="path__2 d-lg-block d-none"
              alt=""
            />
            <div className="container position-relative z-2">
              <div className="row mb-4 mb-lg-0">
                <div className="col-lg-7">
                  <div className="position-relative">
                    <h1 className="color__white bold font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5">
                      Make your learning <br /> process more exciting <br />{" "}
                      with podcasts
                    </h1>
                    <img
                      src="./../images/Underline_06.png"
                      className="path__1 podcast"
                      alt=""
                    />
                  </div>
                  <p className="normal font__size--14 text__14-1024 color__gray-2 my-4">
                    Vitae integer pellentesque platea ipsum tristique turpis
                    eros, ante <br className="d-none d-lg-block" /> sollicitudin. Ut sed eleifend duis morbi.
                    Turpis id in nam aliquam amet, <br className="d-none d-lg-block" /> duis sedvolutpat sit
                    ipsum facilisis. Mauris id fusce lectus justo{" "}
                  </p>

                  <div className="d-sm-flex align-items-center">
                    <NavLink to="/podcast-list"
                      className="bols font__size--16 text__16-1024 btn btn__white shadow color__purple mb-4 mb-sm-0 mr-sm-3 wrapper__width-mm-100"
                    >
                      Get Started
                    </NavLink>
                    <a
                      href="#!"
                      className="bols font__size--16 text__16-1024 btn btn__outlined--white no__opacity shadow h__purple color__white wrapper__width-mm-100"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <img
                  src="./../images/Group 162759.png"
                  className="d-lg-none"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="container">
            <div className="text-center">
              <h4 className="bold font__size--24 text__24-1024 text__24-sm mb-5">
                Listen to our podcasts on your favorite platforms
              </h4>
              <div className="wrapper__audio-cloud justify-content-center d-flex flex-xl-nowrap flex-wrap align-items-center justify-content-xl-between">
                <div className="icon d-flex align-items-center">
                  <img src="./../images/Google.png" alt="" />
                  <span className="bold font__size--24 text__24-1024 text__24-sm ml-3">
                    Google Podcasts
                  </span>
                </div>
                <div className="icon d-flex align-items-center">
                  <img src="./../images/Apple.png" alt="" />
                  <span className="bold font__size--24 text__24-1024 text__24-sm ml-3">
                    Apple Podcasts
                  </span>
                </div>
                <div className="icon d-flex align-items-center">
                  <img src="./../images/Spotify.png" alt="" />
                  <span className="bold font__size--24 text__24-1024 text__24-sm ml-3">Spotify</span>
                </div>
                <div className="icon d-flex align-items-center">
                  <img src="./../images/youtube.png" alt="" />
                  <span className="bold font__size--24 text__24-1024 text__24-sm ml-3">YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg__white">
          <div className="container">
            <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm text-center mb-4">
              Popular Podcast This Week
            </h3>

            <div className="wrapper__podcast-card">
              <div className="row">
                <div className="col-md-4 col-xl-3 mb-4 mb-md-0">
                  <img
                    src="./../images/Rectangle 24.png"
                    className="preview"
                    alt=""
                  />
                </div>
                <div className="col-md-8 col-xl-9">
                  <div className="d-flex flex-wrap h-100 align-content-between">
                    <div className="w-100 mb-4">
                      <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm mb-3 color__white">
                        Get Ready for Your Careers
                      </h3>
                      <p className="medium font__size--16 text__16-1024 lh-2 color__white mb-3">
                        Vestibulum mi, turpis donec hac. Ut dictumst iaculis est
                        non nisl, porttitor vitae odio id. Eget <br className="d-none d-xl-block" /> ultrices
                        odio blandit non nibh mauris sit et. Ultricies eu ac
                        orci, facilisis vestibulum tortor.{" "}
                      </p>

                      <div className="wrapper__podcast-detail">
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
                    </div>

                    <a href="#!" className="btn btn__white shadow d-none d-md-block">
                      <div className="d-flex align-items-center">
                        <img src="./../images/icon (3).png" alt="" />{" "}
                        <span className="ml-2 bold font__size--16 text__16-1024">
                          Play Now
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm text-center mb-5">
              Latest Podcast Episode
            </h3>

            <div className="row mb-5">
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <CardPodcast />
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <CardPodcast />
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <CardPodcast />
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <CardPodcast />
              </div>
            </div>

            <div className="text-center">
              <a
                href="#!"
                className="btn btn__outlined--black color__black bold font__size--16 text__16-1024 no__opacity"
              >
                See More
              </a>
            </div>
          </div>
        </section>

        <section className="bg__black-2">
          <div className="container">
            <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm text-center color__white mb-5">
              Top Podcaster
            </h3>

            <div className="wrapper__scroll-podcaster">
              <div className="wrap">
                <div className="row">
                  <div className="col-3">
                    <div className="wrapper__podcast-people position-relative">
                      <img
                        src="./../images/Mask group.png"
                        className="img"
                        alt=""
                      />
                      <div className="bg"></div>
                      <div className="position-relative z-2">
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm color__white mb-1">
                          Kanaya Jehnsen
                        </h5>
                        <p className="semi-bold font__size--14 text__14-1024 color__gray-4">
                          LongLiveLove
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="wrapper__podcast-people position-relative">
                      <img
                        src="./../images/Mask group (1).png"
                        className="img"
                        alt=""
                      />
                      <div className="bg"></div>
                      <div className="position-relative z-2">
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm color__white mb-1">
                          James Drimond
                        </h5>
                        <p className="semi-bold font__size--14 text__14-1024 color__gray-4">
                          Workaholike
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="wrapper__podcast-people position-relative">
                      <img
                        src="./../images/Mask group (2).png"
                        className="img"
                        alt=""
                      />
                      <div className="bg"></div>
                      <div className="position-relative z-2">
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm color__white mb-1">
                          Simmons Key
                        </h5>
                        <p className="semi-bold font__size--14 text__14-1024 color__gray-4">
                          ColorsDamn
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="wrapper__podcast-people position-relative">
                      <img
                        src="./../images/Mask group (3).png"
                        className="img"
                        alt=""
                      />
                      <div className="bg"></div>
                      <div className="position-relative z-2">
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm color__white mb-1">
                          Billy Jake
                        </h5>
                        <p className="semi-bold font__size--14 text__14-1024 color__gray-4">
                          Dimensions
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
            <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm text-center mb-5">
              Weekly Category Recommendations
            </h3>

            <div className="wrapper__scroll-category">
              <div className="wrap">
                <div className="row">
                  {category.map((obj) => {
                    return (
                      <div className="col-3">
                        <CardRecomendation data={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg__purple position-relative mb__5">
          <img src="./../images/Map (1).png" className="path__8 d-none d-lg-block" alt="" />
          <img src="./../images/Podcaster.png" className="path__9 d-none d-md-block" alt="" />
          <img src="./../images/Group 3125.png" className="path__9 d-md-none" alt="" />
          <div className="container position-relative z-2">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="text-center wrapper__platform">
                  <h3 className="bold font__size--42 text__40-1024 text__40-md text__40-mm color__white mb-4">
                    Our platform is trusted by more than 200+ podcasters in the
                    world
                  </h3>
                  <p className="medium font__size--14 text__14-1024 lh-2 color__gray-3">
                    Elit quam cras sollicitudin ridiculus commodo a eget.
                    Quisque magna tempus urna lectus. Nec tortor, vehicula nunc,
                    duis orci. Nunc urna, vitae sit sapien diam diam cursus.
                    Cras tempus venenatis consequat, in amet urna, tempor. Augue
                    elit, ultrices sapien tellus. Tellus sapien, risus mauris
                    pretium. At tortor, blandit lorem sit ac, malesuada.
                  </p>
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

export default Podcast;
