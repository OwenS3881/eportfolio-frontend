import React from "react";

import styles from "./styles/Home.module.css";

//Home page sections
import ProfileSection from "./components/HomePage/ProfileSection";
import SkillsSection from "./components/HomePage/SkillsSection";
import RecentCourses from "./components/HomePage/RecentCourses";

//Home Page

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileSection />
      <SkillsSection />
      <RecentCourses />

      <section className={styles.todo}>
        <h3>TO DO: Sections to implement!!!</h3>
        <ul>
          <li>
            <s>Skills Section</s>
          </li>
          <li>Most Recent Project</li>
          <li>
            <s>Most Recent Coursework</s>
          </li>
          <li>Most Recent Research</li>
          <li>Most Recent Journal Entry</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
