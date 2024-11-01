import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg wrapper__navbar position-relative z-2">
        <div className="container position-relative">
          <NavLink to="/" className="navbar-brand">
            <img 
              src="/images/Branding/GHOST LOGO11.png" 
              alt="Ghost Logo" 
              className="navbar-logo" 
            />
          </NavLink>

          <button
            className="navbar-toggler nav__button position-relative"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link bold font__size--14 text__14-1024 active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className="nav-link bold font__size--14 text__14-1024"
                >
                  Pricing Plan
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/course"
                  className="nav-link bold font__size--14 text__14-1024"
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link bold font__size--14 text__14-1024"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contact"
                  className="nav-link bold font__size--14 text__14-1024"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item d-lg-none">
                <div className="d-flex justify-content-end align-items-center">
                  <NavLink
                    to="/login"
                    className="btn btn__white white-version semi-bold font__size--14 text__14-1024"
                  >
                    Log in
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="semi-bold font__size--14 text__14-1024 color__purple btn btn__white shadow btn__head"
                  >
                    Get Started
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-flex align-items-center">
            <NavLink
              to="/profile"
              className="profile-link mr-3"
            >
              <img 
                src="/images/profiles/Profile.png" 
                alt="Profile" 
                className="profile-image" 
              />
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn__white white-version semi-bold font__size--14 text__14-1024"
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="semi-bold font__size--14 text__14-1024 color__purple btn btn__white shadow btn__head"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar; 