import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Check your email for the password reset link.");
      setError("");
      setTimeout(() => navigate("/login"), 5000);
    } catch (error) {
      setError("Error sending password reset email. Please try again.");
      setMessage("");
    }
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
                    Reset Password
                  </h2>
                  {message && <p className="alert alert-success">{message}</p>}
                  {error && <p className="alert alert-danger">{error}</p>}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email" className="medium font__size--14 text__14-1024 color__white">
                        Email Address
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
                    <button type="submit" className="btn btn__white color__purple shadow w-100 mt-4">
                      Send Reset Link
                    </button>
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

export default ForgotPassword; 