import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Login submitted", { email, password });
  };

  return (
    <Fragment>
      <div className="overflow-hidden bg__purple">
        <Navbar />
        <section className="pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="wrapper__form-auth">
                  <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm color__white mb-4">
                    Welcome Back
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email" className="medium font__size--14 text__14-1024 color__white">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="medium font__size--14 text__14-1024 color__white">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label medium font__size--14 text__14-1024 color__white" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <NavLink to="/forgot-password" className="medium font__size--14 text__14-1024 color__white">
                        Forgot Password?
                      </NavLink>
                    </div>
                    <button type="submit" className="btn btn__white color__purple shadow w-100">
                      Log In
                    </button>
                  </form>
                  <p className="medium font__size--14 text__14-1024 color__white mt-4 text-center">
                    Don't have an account? <NavLink to="/register" className="color__white">Sign up</NavLink>
                  </p>
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

export default Login;
