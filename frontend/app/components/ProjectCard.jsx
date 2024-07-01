import React from "react";

import styles from "@/app/styles/Projects.module.css";

import SkillIcon from "./SkillIcon";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "./Tooltip";

import { getSkill } from "../functions/GetSkills";

function getEndDate(date) {
  if (date) {
    const endDateObj = new Date(date);
    const endDate = `${endDateObj.toLocaleString("default", {
      month: "long",
    })} ${endDateObj.getFullYear()}`;
    return endDate;
  } else {
    return "Present";
  }
}

const ProjectCard = ({ project }) => {
  const skills = project.skills.split(", ");

  const startDateObj = new Date(project.start_date);
  const startDate = `${startDateObj.toLocaleString("default", {
    month: "long",
  })} ${startDateObj.getFullYear()}`;

  const endDate = getEndDate(project.end_date);

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardHeader}>
        <div className={styles.projectTitle}>
          <h2>{project.title}</h2>
          <h5>
            {startDate} - {endDate}
          </h5>
        </div>
        <div className={styles.imgContainer}>
          <Image src={project.image} fill={true} alt="project-image" />
        </div>
      </div>

      <p>{project.description}</p>
      <h3>Skills Used:</h3>
      <div className={styles.skillsContainer}>
        {skills.map((skill, i) => {
          const skillObj = getSkill(skill);

          return (
            <Tooltip key={i} text={skill} fontSize={"10px"}>
              <SkillIcon
                href={skillObj.href}
                src={skillObj.src}
                isSquare={skillObj.isSquare}
                size={50}
              />
            </Tooltip>
          );
        })}
      </div>
      <Link className={styles.checkLink} href={project.url}>
        Check it out!
      </Link>
    </div>
  );
};

export default ProjectCard;
