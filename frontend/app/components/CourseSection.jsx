import React from "react";

import styles from "@/app/styles/Courses.module.css";

import Course from "./Course";

//Component to display a group of courses
const CourseSection = ({ title, courses }) => {
  return (
    <div className={styles.courseSection}>
      <h1>{title}</h1>
      <div className={styles.courseSectionContainer}>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
