import React from "react";

import styles from "@/app/styles/Courses.module.css";

//Component to display a single course
const Course = ({ course }) => {
  return (
    <div className={styles.courseCard}>
      <h2 className={styles.code}>{course.uf_code}</h2>
      <h3 className={styles.title}>{course.uf_title}</h3>
      <h3 className={styles.term}>Term: {course.term}</h3>
      {(course.high_school_title !== null ||
        course.high_school_code !== null) && (
        <h4 className={styles.highSchool}>
          {course.high_school_title}
          {course.high_school_code !== null && (
            <>{" - " + course.high_school_code}</>
          )}
        </h4>
      )}
      <h3 className={styles.credits}>Credits: {course.credits}</h3>
      <h3 className={styles.category}>Category: {course.category}</h3>
    </div>
  );
};

export default Course;
