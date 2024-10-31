import { getDatabase, ref, get } from 'firebase/database';
import type { Course } from '../../types/course';

export async function getCourse(courseId: string): Promise<Course | null> {
  const db = getDatabase();
  const courseRef = ref(db, `courses/${courseId}`);
  const snapshot = await get(courseRef);
  
  if (snapshot.exists()) {
    const data = snapshot.val();
    return {
      id: courseId,
      title: data.title,
      description: data.description,
      instructor: data.instructor,
      duration: data.duration,
      level: data.level,
      rating: data.rating || 0,
      enrolledStudents: data.enrolledStudents || 0,
      price: data.price || 0,
      isPremium: data.isPremium || false,
      chapters: data.chapters || [],
      isPublic: data.isPublic || false,
      thumbnail: data.thumbnail || data.imageUrl,
      imageUrl: data.imageUrl || data.thumbnail,
      videoCount: data.videoCount || data.chapters?.reduce((total: number, chapter: any) => total + (chapter.lessons?.length || 0), 0) || 0,
      category: data.category || data.tag,
      tag: data.tag || data.category,
      review: data.review || data.rating,
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
      accessType: data.isPremium ? 'paid' : 'free'
    } as Course;
  }
  
  return null;
}

export function transformCourseData(data: any): Course {
    const determineAccessType = (price: number) => {
        if (price > 0) {
          return 'paid';
        }
        return 'free';
      };    
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    instructor: data.instructor,
    duration: data.duration,
    level: data.level,
    rating: data.rating || 0,
    enrolledStudents: data.enrolledStudents || 0,
    price: data.price || 0,
    chapters: data.chapters || [],
    isPublic: data.isPublic || false,
    videoCount: data.videoCount || data.chapters?.reduce((total: number, chapter: any) => total + (chapter.lessons?.length || 0), 0) || 0,
    category: data.category || data.tag,
    tag: data.tag || data.category,
    review: data.review || data.rating,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
    accessType: determineAccessType(data.price),
    isPremium: data.isPremium || false,
    thumbnail: data.thumbnail || ''
  };
} 