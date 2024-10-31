export interface Chapter {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  order: number;
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'image' | 'link';
  url: string;
}

export interface Course {
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
  accessType: 'free' | 'paid';
}

export interface CourseListingProps {
  onCourseSelect?: (course: Course) => void;
} 