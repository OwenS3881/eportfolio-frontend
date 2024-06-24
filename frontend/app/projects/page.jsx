import React from "react";

import styles from "@/app/styles/Projects.module.css";

import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topInfo}>
        <h1>My Projects</h1>
        <p>
          In addition to my Computer Science coursework, I love to develop
          projects in my spare time. Here you can checkout all of the projects
          that I have created!
        </p>
      </div>

      <div className={styles.projectCardContainer}>
        <hr />
        <ProjectCard />
        <hr />
        <ProjectCard />
        <hr />
        <ProjectCard />
        <hr />
        <ProjectCard />
        <hr />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
