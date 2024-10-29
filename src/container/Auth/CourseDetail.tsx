import React from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  rating: number;
  enrolledStudents: number;
  price: number;
  // Add any other properties that your course object might have
}

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div className="course-info">
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
        <p>Level: {course.level}</p>
        <p>Rating: {course.rating}</p>
        <p>Enrolled Students: {course.enrolledStudents}</p>
        <p>Price: ${course.price}</p>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default CourseDetail;
