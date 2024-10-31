import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { ref, get, set } from "firebase/database";
import { database } from '../../../lib/firebase/config';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

interface FirebaseError extends Error {
  code?: string;
  message: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        await auth.signOut();
        setError("Please verify your email before logging in. Check your inbox.");
        return;
      }

      const userRef = ref(database, `users/${user.uid}`);
      const snapshot = await get(userRef);
      
      if (!snapshot.exists()) {
        setError("User account not found. Please register.");
        await auth.signOut();
        return;
      }

      await set(ref(database, `users/${user.uid}/lastLogin`), new Date().toISOString());

      const userData = snapshot.val();
      if (userData.role === 'admin') {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code) {
        switch (firebaseError.code) {
          case 'auth/user-not-found':
            setError('No account found with this email');
            break;
          case 'auth/wrong-password':
            setError('Incorrect password');
            break;
          case 'auth/too-many-requests':
            setError('Too many failed attempts. Please try again later');
            break;
          case 'auth/user-disabled':
            setError('This account has been disabled');
            break;
          default:
            setError('Failed to login. Please try again');
        }
      } else {
        setError('An unexpected error occurred');
      }
      console.error(error);
    } finally {
      setLoading(false);
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
                    Welcome Back
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
                        disabled={loading}
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
                        disabled={loading}
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
                    <button 
                      type="submit" 
                      className="btn btn__white color__purple shadow w-100"
                      disabled={loading}
                    >
                      {loading ? 'Logging in...' : 'Log In'}
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