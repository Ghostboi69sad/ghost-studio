export interface ContentItem {
  id: string;
  type: 'video' | 'file' | 'text';
  name: string;
  url: string;
  duration?: string;
  description?: string;
}

export interface Chapter {
  id: string;
  title: string;
  content: ContentItem[];
}

export interface Course {
  id: string;
  title: string;
  name?: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolledStudents: number;
  price: number;
  chapters: Chapter[];
  isPublic: boolean;
  isPremium: boolean;
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

