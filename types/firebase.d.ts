export interface FirebaseUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
}

export interface UserData {
  email: string;
  role: 'user' | 'admin';
  subscription?: {
    status: 'active' | 'inactive' | 'canceled';
    planId?: string;
    stripeCustomerId?: string;
    currentPeriodEnd?: string;
  };
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolledStudents: number;
  price: number;
  isPremium: boolean;
  chapters: Chapter[];
  isPublic: boolean;
  thumbnail: string;
  imageUrl?: string;
  videoCount?: number;
  category?: string;
  tag?: string;
  review?: number;
  createdAt: string;
  updatedAt: string;
  accessType: 'free' | 'subscription' | 'paid';
} 