import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <Fragment>
      <section className="bg__black-2 pb-3 position-relative">
        <img src="./../images/img (3).png" className="path__6 d-none d-xl-block" alt="" />
        <div className="container position-realtive">
          <div className="row mb-5 text-center text-md-left">
            <div className="mb-4 mb-lg-0 col-md-4 col-lg-3">
              <img 
                src="./../images/GHOST LOGO11.PNG" 
                alt="Ghost Logo" 
                className="mb-3" 
                style={{ maxWidth: '200px', width: '100%' }} // تعديل الحجم هنا
              />
              <p className="semi-bold font__size--16 text__16-1024 color__white lh-2">
                Find the best way to learn new things to improve your skills
              </p>
              <hr className="hr__footer" />
              <ul className="list__contact">
                <li>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <img src="./../images/Frame (3).png" alt="" />
                    <span className="ml-2 mb-0 semi-bold font__size--16 text__16-1024 color__white">
                      +1 738 873 90
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <img src="./../images/Frame (4).png" alt="" />
                    <span className="ml-2 mb-0 semi-bold font__size--16 text__16-1024 color__white">
                      hi@slooshteam.co
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-lg-0 col-md offset-md-1 offset-xl-2">
              <h5 className="bold font__size--16 text__16-1024 color__white mb-3">Company</h5>

              <ul className="list__contact">
                <li>
                  <NavLink to="/about"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/podcast"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Podcast
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-lg-0 col-md">
              <h5 className="bold font__size--16 text__16-1024 color__white mb-3">
                Contact us
              </h5>

              <ul className="list__contact">
                <li>
                  <a
                    href="#!"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Phone
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Website
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-lg-0 col-md">
              <h5 className="bold font__size--16 text__16-1024 color__white mb-3">Support</h5>

              <ul className="list__contact">
                <li>
                  <NavLink to="/terms-of-service"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Terms of Condition
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq"
                    className="medium font__size--14 text__14-1024 color__white opacity__5 hover"
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className="bold font__size--16 text__16-1024 color__white mb-3">Find us</h5>

              <ul className="list__sosmed">
                <li>
                  <a href="#!">
                    <img src="./../images/img (1).png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/img (5).png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/img (4).png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="hr__footer" />

          <div className="text-center medium font__size--16 text__16-1024">
            2022 Sloosh inc. All Rights Reserved
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
