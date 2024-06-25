import React from "react";

import styles from "@/app/styles/Projects.module.css";

import SkillIcon from "./SkillIcon";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "./Tooltip";

import { getSkill } from "../functions/GetSkills";

const ProjectCard = ({ project }) => {
  const skills = project.skills.split(", ");

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardHeader}>
        <h2>{project.title}</h2>
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
