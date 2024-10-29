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
  level: string;
  rating: number;
  enrolledStudents: number;
  price: number;
  chapters: Chapter[];
  isPublic: boolean;
}

export interface CourseListingProps {
  onCourseSelect?: (course: Course) => void;
}

