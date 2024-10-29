declare module '*.jsx';
declare module '*.js';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

// تصريحات المكونات
declare module '../container/Homepage/PricingPlan.jsx' {
  import { ComponentType } from 'react';
  const PricingPlan: ComponentType;
  export default PricingPlan;
}

declare module '../container/Auth/Login.jsx' {
  import { ComponentType } from 'react';
  const Login: ComponentType;
  export default Login;
}

declare module '../container/Auth/Register.jsx' {
  import { ComponentType } from 'react';
  const Register: ComponentType;
  export default Register;
}

declare module '../container/Homepage/UserProfile.jsx' {
  import { ComponentType } from 'react';
  const UserProfile: ComponentType;
  export default UserProfile;
}

declare module '../container/Homepage/homepage.tsx' {
  import { ComponentType } from 'react';
  const Homepage: ComponentType;
  export default Homepage;
}

declare module '../course-listing/components/course-listing' {
  import { ComponentType } from 'react';
  const CourseListing: ComponentType;
  export default CourseListing;
}

declare module 'web-vitals' {
  export interface Metric {
    id: string;
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
    entries: PerformanceEntry[];
  }

  export type ReportHandler = (metric: Metric) => void;

  export function getCLS(onReport: ReportHandler, reportAllChanges?: boolean): void;
  export function getFID(onReport: ReportHandler): void;
  export function getFCP(onReport: ReportHandler): void;
  export function getLCP(onReport: ReportHandler, reportAllChanges?: boolean): void;
  export function getTTFB(onReport: ReportHandler): void;
}

declare module '../../component/Navbar/Navbar' {
  import { ComponentType } from 'react';
  const Navbar: ComponentType;
  export default Navbar;
}

declare module '../../component/footer/Footer' {
  import { ComponentType } from 'react';
  const Footer: ComponentType;
  export default Footer;
}
