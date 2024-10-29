import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";


const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log("Registration submitted", { username, email, password });
  };

  return (
    <Fragment>
      <div className="overflow-hidden bg__purple">
        <Navbar />
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="wrapper__form-auth">
                  <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm color__white mb-4">
                    Create an Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username" className="medium font__size--14 text__14-1024 color__white">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
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
                    <button type="submit" className="btn btn__white color__purple shadow w-100 mt-4">
                      Register
                    </button>
                  </form>
                  <p className="medium font__size--14 text__14-1024 color__white mt-4 text-center">
                    Already have an account? <NavLink to="/login" className="color__white">Log in</NavLink>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
             
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Register;
