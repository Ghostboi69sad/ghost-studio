import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="/images/Branding/GHOST LOGO11.png" alt="Logo" className="footer-logo mb-4" />
            <p className="normal font__size--14 text__14-1024 color__gray-2 mb-4">
              Ghost Studio Academy is your gateway to mastering creative skills. Join our community of learners and transform your passion into expertise.
            </p>
            <div className="wrapper__sosmed d-flex align-items-center">
              <a href="#!" className="mr-3">
                <img src="/images/social/Facebook.png" alt="Facebook" />
              </a>
              <a href="#!" className="mr-3">
                <img src="/images/social/Instagram.png" alt="Instagram" />
              </a>
              <a href="#!">
                <img src="/images/social/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h6 className="semi-bold font__size--16 text__16-1024 color__white mb-4">
              Company
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-3">
                <NavLink to="/about" className="normal font__size--14 text__14-1024 color__gray-2">
                  About Us
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink to="/contact" className="normal font__size--14 text__14-1024 color__gray-2">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="normal font__size--14 text__14-1024 color__gray-2">
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h6 className="semi-bold font__size--16 text__16-1024 color__white mb-4">
              Support
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-3">
                <NavLink to="/faq" className="normal font__size--14 text__14-1024 color__gray-2">
                  FAQ
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink to="/terms-of-service" className="normal font__size--14 text__14-1024 color__gray-2">
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="normal font__size--14 text__14-1024 color__gray-2">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="semi-bold font__size--16 text__16-1024 color__white mb-4">
              Subscribe to Our Newsletter
            </h6>
            <form className="wrapper__newsletter mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn__purple">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="normal font__size--14 text__14-1024 color__gray-2 mb-0">
            © {new Date().getFullYear()} Ghost Studio Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 