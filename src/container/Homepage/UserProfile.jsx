import React, { Fragment, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const UserProfile = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log("Password reset requested");
  };

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    // Implement email update logic here
    console.log("Email update requested:", email);
  };

  return (
    <Fragment>
      <div className="overflow-hidden bg__gray-1">
        <div className="bg__purple position-relative">
          <Navbar />
          <section className="position-relative">
            <div className="container">
              <h1 className="color__white bold font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5 text-center mb-5">
                User Profile
              </h1>
            </div>
          </section>
        </div>

        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="wrapper__card-profile bg__white p-4 rounded shadow">
                  <div className="text-center mb-4">
                    <img 
                      src="./../images/profile.png" 
                      alt="Profile" 
                      className="profile-image" 
                      style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} 
                    />
                  </div>
                  <form onSubmit={handleUpdateEmail}>
                    <div className="form-group">
                      <label htmlFor="email" className="bold font__size--16 text__16-1024">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button 
                        type="button" 
                        onClick={handleResetPassword}
                        className="btn btn__purple color__white shadow"
                      >
                        Reset Password
                      </button>
                      <button 
                        type="submit" 
                        className="btn btn__purple color__white shadow"
                      >
                        Update Email
                      </button>
                    </div>
                  </form>
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

export default UserProfile;
