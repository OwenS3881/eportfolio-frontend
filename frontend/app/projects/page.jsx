import React from "react";

import styles from "@/app/styles/Projects.module.css";

import ProjectCard from "../components/ProjectCard";

//Retrieves the projects from the backend
async function fetchProjects() {
  const res = await fetch(
    "https://owen-eportfolio-backend.vercel.app/api/projects/",
    {
      next: {
        revalidate: 1,
      },
    }
  );

  const projects = await res.json();
  return projects;
}

const ProjectsPage = async () => {
  const projects = await fetchProjects();

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
        {projects.map((project) => (
          <>
            <hr key={project.id} />
            <ProjectCard key={project.id} project={project} />
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
