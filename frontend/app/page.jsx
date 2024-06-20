import React from "react";

import styles from "./styles/Home.module.css";

//Home page sections
import ProfileSection from "./components/HomePage/ProfileSection";
import SkillsSection from "./components/HomePage/SkillsSection";

import SkillIcon from "./components/SkillIcon";
import Tooltip from "./components/Tooltip";

//Home Page

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileSection />

      <SkillsSection />

      <div className={styles.todo}>
        <h3>TO DO: Sections to implement</h3>
        <ul>
          <li>Most Recent Project</li>
          <li>Most Recent Coursework</li>
          <li>Most Recent Research</li>
          <li>Recent Journal Entry</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
