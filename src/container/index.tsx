import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserProfile from './Homepage/UserProfile';

const Homepage = lazy(() => import('./Homepage/homepage'));
const Login = lazy(() => import('./Auth/Login'));
const Register = lazy(() => import('./Auth/Register'));
const ForgotPassword = lazy(() => import('./Auth/ForgotPassword'));
const Podcast = lazy(() => import('./Homepage/Podcast'));
const Course = lazy(() => import('./Homepage/Course'));
const CourseListing = lazy(() => import('../course-listing/components/course-listing'));
const Detail = lazy(() => import('./Homepage/Detail'));
const Blog = lazy(() => import('./Homepage/Blog'));
const BlogDetail = lazy(() => import('./Homepage/BlogDetail'));
const About = lazy(() => import('./Homepage/About'));
const Faq = lazy(() => import('./Homepage/Faq'));
const Terms = lazy(() => import('./Homepage/Terms'));
const Privacy = lazy(() => import('./Homepage/Privacy'));
const Payment = lazy(() => import('./Homepage/Payment'));
const PodcastList = lazy(() => import('./Homepage/PodcastList'));
const Contact = lazy(() => import('./Homepage/Contact'));
const Mentor = lazy(() => import('./Homepage/Mentor'));
const PricingPlan = lazy(() => import('./Homepage/PricingPlan'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>جاري التحميل...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/course" element={<CourseListing />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail-blog" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/podcast-list" element={<PodcastList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/pricing" element={<PricingPlan />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App; 