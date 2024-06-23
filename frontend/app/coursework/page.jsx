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

//convert a map of courses into an array for JSX
function mapToArray(map) {
  const arr = Array.from(map, ([category, courses]) => ({
    category,
    courses,
  }));

  return arr;
}

//divide the courses into separate arrays based on a property
function splitBy(courses, property) {
  let splitMap = new Map();

  courses.forEach((course) => {
    const propKey = course[property];
    if (splitMap.has(propKey) === false) {
      splitMap.set(propKey, []);
    }

    let current = splitMap.get(propKey);
    current.push(course);

    splitMap.set(propKey, current);
  });

  return mapToArray(splitMap);
}

const orderValues = new Map([
  ["High School", 0],
  ["Fall 2024", 1],
  ["Spring 2025", 2],
  ["Summer 2025", 3],
  ["Fall 2025", 4],
  ["Spring 2026", 5],
  ["Summer 2026", 6],
  ["Fall 2026", 7],
  ["Spring 2027", 8],
  ["Summer 2027", 9],
  ["Fall 2027", 10],
  ["Spring 2028", 11],
  ["Summer 2028", 12],
  ["Fall 2028", 13],
  ["Spring 2029", 14],
  ["Summer 2029", 15],
  ["Fall 2029", 16],
]);

//sort courses by term
function sortByTerm(splitCourses) {
  return splitCourses;
}

//Displays my course history

const CourseworkPage = async () => {
  const courses = await fetchCourses();

  const key = "category";

  const splitCourses = splitBy(courses, key);

  if (key === "term") {
    splitCourses.sort((a, b) => {
      return orderValues.get(b.category) - orderValues.get(a.category);
    });
  }

  return (
    <div className={styles.container}>
      <h1>Coursework</h1>
      <div>
        {/* <p>Sort by:</p>
        <select>
          <option value="1">Placeholder</option>
          <option value="2">Use Next Dropdowns</option>
        </select> */}
      </div>

      <div className={styles.courseContainer}>
        {splitCourses.map((arr) => (
          <CourseSection
            key={arr.category}
            title={arr.category}
            courses={arr.courses}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseworkPage;
