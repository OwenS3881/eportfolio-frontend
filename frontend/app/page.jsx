import React from "react";

import styles from "./styles/Home.module.css";

//Home page sections
import ProfileSection from "./components/HomePage/ProfileSection";
import SkillsSection from "./components/HomePage/SkillsSection";
import ProjectsSection from "./components/HomePage/ProjectsSection";
import RecentCourses from "./components/HomePage/RecentCourses";
import RecentJournal from "./components/HomePage/RecentJournal";

//Home Page

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <RecentCourses />
      <RecentJournal />
    </div>
  );
};

export default HomePage;
