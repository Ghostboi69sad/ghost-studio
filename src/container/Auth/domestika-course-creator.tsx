import React from 'react';
import DomestikaCourseCreatorS3 from '../../course/components/domestika-course-creator-s3';
import type { Course } from '../../types/course';

const initialCourse: Course = {
  id: '',
  title: 'New Course',
  description: '',
  instructor: '',
  duration: '0h',
  level: 'Beginner',
  rating: 0,
  enrolledStudents: 0,
  price: 0,
  chapters: [],
  isPublic: false
};

const DomestikaCourseCreator: React.FC = () => {
  return <DomestikaCourseCreatorS3 course={initialCourse} />;
};

export default DomestikaCourseCreator;
