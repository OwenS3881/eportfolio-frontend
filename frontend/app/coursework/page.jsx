"use client";

import React, { useEffect } from "react";
import { useState } from "react";

import styles from "@/app/styles/Courses.module.css";

import CourseSection from "../components/CourseSection";

//Get courses
// async function fetchCourses() {
//   const res = await fetch(
//     "https://owen-eportfolio-backend.vercel.app/api/courses/",
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   const courses = await res.json();
//   return courses;
// }

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

const CourseworkPage = () => {
  const [sortKey, setSortKey] = useState("term");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://owen-eportfolio-backend.vercel.app/api/courses/")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  });

  const splitCourses = splitBy(courses, sortKey);

  if (sortKey === "term") {
    splitCourses.sort((a, b) => {
      return orderValues.get(b.category) - orderValues.get(a.category);
    });
  }

  return (
    <div className={styles.container}>
      <h1>Coursework</h1>
      <div className={styles.sortContainer}>
        <p>Sort by:</p>
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="term">Term</option>
          <option value="category">Category</option>
        </select>
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
