import React from "react";

import styles from "./styles/Home.module.css";

import Reveal from "./components/Reveal";

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
      <Reveal>
        <ProfileSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <RecentCourses />
      </Reveal>
      <Reveal>
        <RecentJournal />
      </Reveal>
    </div>
  );
};

export default HomePage;
