import React, { Fragment, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { database } from '../../../lib/firebase/config';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await set(ref(database, `users/${user.uid}`), {
        email: user.email,
        role: 'user',
        createdAt: new Date().toISOString(),
        emailVerified: false
      });

      await sendEmailVerification(user);
      navigate('/verify-email');
    } catch (error) {
      if (error instanceof Error) {
        switch (error.message) {
          case 'auth/email-already-in-use':
            setError('Email already exists');
            break;
          case 'auth/invalid-email':
            setError('Invalid email address');
            break;
          default:
            setError('Failed to create account');
        }
      }
      console.error(error);
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
                    Create an Account
                  </h2>
                  {error && <p className="alert alert-danger">{error}</p>}
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
                    <button type="submit" className="btn btn__white color__purple shadow w-100">
                      Register
                    </button>
                  </form>
                  <p className="medium font__size--14 text__14-1024 color__white mt-4 text-center">
                    Already have an account? <NavLink to="/login" className="color__white">Log in</NavLink>
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

export default Register;
