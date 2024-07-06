import React from "react";

import styles from "@/app/styles/ProjectsSection.module.css";

import Link from "next/link";

import ProjectCard from "../ProjectCard";

//Retrieves the most recent project from the backend
async function fetchRecentProject() {
  const res = await fetch(
    "https://owen-eportfolio-backend.vercel.app/api/projects/recent/",
    {
      next: {
        revalidate: 1,
      },
    }
  );

  const projects = await res.json();
  return projects[0];
}

const ProjectsSection = async () => {
  const project = await fetchRecentProject();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>My Projects</h2>
      <p className={styles.description}>
        Aside from my coursework, I like to develop my own projects. Here is my
        most recent one!
      </p>
      <Link className={styles.mainLink} href={"/projects/"}>
        View All My Projects
      </Link>
      <ProjectCard project={project} />
    </section>
  );
};

export default ProjectsSection;
