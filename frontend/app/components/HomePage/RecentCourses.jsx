import React from "react";

import styles from "@/app/styles/RecentCourses.module.css";
import Link from "next/link";

import CourseSection from "../CourseSection";
import Course from "../Course";

//Retrieves the recent courses from the backend
async function fetchRecentCourses(currentTerm) {
  const res = await fetch(
    "https://owen-eportfolio-backend.vercel.app/api/courses/",
    {
      next: {
        revalidate: 1,
      },
    }
  );
  const courses = await res.json();
  const filteredCourses = courses.filter((course) => {
    return course.term === currentTerm;
  });
  return filteredCourses;
}

const RecentCourses = async () => {
  const currentTerm = "Fall 2024";

  const courses = await fetchRecentCourses(currentTerm);

  return (
    <section className={styles.container}>
      <h2>{currentTerm} Courses</h2>
      <Link className={styles.link} href={"/coursework/"}>
        View My Full Coursework
      </Link>
      <div className={styles.courseContainer}>
        {courses.map((course, i) => (
          <Course
            hideTerm={true}
            className={styles.courseCard}
            key={i}
            course={course}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentCourses;
