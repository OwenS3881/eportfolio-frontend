import React from "react";

import styles from "@/app/styles/Courses.module.css";

import Course from "../components/Course";
import CourseSection from "../components/CourseSection";

//Get courses
async function fetchCourses() {
  const res = await fetch(
    "https://owen-eportfolio-backend.vercel.app/api/courses/",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const courses = await res.json();
  return courses;
}

//divide the courses into separate arrays based on category
function splitByCategory(courses) {
  let splitMap = new Map();

  courses.forEach((course) => {
    const category = course.category;
    if (splitMap.has(category) === false) {
      splitMap.set(category, []);
    }

    let current = splitMap.get(category);
    current.push(course);

    splitMap.set(category, current);
  });

  return splitMap;
}

//Displays my course history

const CourseworkPage = async () => {
  const courses = await fetchCourses();

  const courseMap = splitByCategory(courses);

  console.log(courseMap);

  console.log("For Eaching...");
  courseMap.forEach((values, keys) => {
    console.log("Iteration: ");
    console.log(keys);
    console.log(values);
  });

  return (
    <div className={styles.container}>
      <h1>Coursework</h1>
      <div>
        <p>Sort by:</p>
        <select>
          <option value="1">Placeholder</option>
          <option value="2">Use Next Dropdowns</option>
        </select>
      </div>

      <div className={styles.courseContainer}>
        {/* {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))} */}
      </div>
    </div>
  );
};

export default CourseworkPage;
