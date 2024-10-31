import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

interface UserData {
  email: string;
  username?: string;
  subscriptionStatus?: string;
  subscriptionEndDate?: string;
  profileImage?: string;
}

const UserProfile: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const auth = getAuth();
  const navigate = useNavigate();
  const db = getDatabase();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserData(data);
          setEmail(data.email || user.email || '');
        }
        setLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [auth, db, navigate]);

  const handleUpdateEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    try {
      await updateEmail(user, email);
      await set(ref(db, `users/${user.uid}/email`), email);
      setMessage("Email updated successfully");
      setError("");
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to update email');
      setMessage("");
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      await updatePassword(user, newPassword);
      setMessage("Password updated successfully");
      setError("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to update password');
      setMessage("");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image-container">
            <img 
              src={userData?.profileImage || "./../images/profile.png"}
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <h2 className="bold font__size--42 text__40-1024 text__40-md text__40-mm color__purple mb-4">
            Profile Settings
          </h2>
          
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {userData?.subscriptionStatus && (
            <div className="profile-subscription">
              <h4 className="color__purple mb-2">Subscription Status</h4>
              <p className="mb-1">Status: {userData.subscriptionStatus}</p>
              {userData.subscriptionEndDate && (
                <p className="mb-0">Valid until: {new Date(userData.subscriptionEndDate).toLocaleDateString()}</p>
              )}
            </div>
          )}

          <form onSubmit={handleUpdateEmail} className="profile-form">
            <h4 className="color__purple mb-3">Update Email</h4>
            <div className="profile-form-group">
              <label htmlFor="email" className="profile-form-label medium font__size--14 text__14-1024">
                Email Address
              </label>
              <input
                type="email"
                className="profile-form-input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="profile-button">
              Update Email
            </button>
          </form>

          <form onSubmit={handleUpdatePassword} className="profile-form">
            <h4 className="color__purple mb-3">Change Password</h4>
            <div className="profile-form-group">
              <label htmlFor="newPassword" className="profile-form-label medium font__size--14 text__14-1024">
                New Password
              </label>
              <input
                type="password"
                className="profile-form-input"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="profile-form-group">
              <label htmlFor="confirmPassword" className="profile-form-label medium font__size--14 text__14-1024">
                Confirm Password
              </label>
              <input
                type="password"
                className="profile-form-input"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="profile-button">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile; 