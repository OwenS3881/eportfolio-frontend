import React from "react";

import styles from "@/app/styles/Projects.module.css";

import SkillIcon from "./SkillIcon";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "./Tooltip";

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardHeader}>
        <h2>PROJECT NAME</h2>
        <div className={styles.imgContainer}>
          <Image src={"/landscape.jpg"} fill={true} alt="project-image" />
        </div>
      </div>

      <p>
        SHORT DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Debitis consequatur inventore quidem nostrum obcaecati cumque ad
        at fugit hic laboriosam.
      </p>
      <h3>Skills Used:</h3>
      <div className={styles.skillsContainer}>
        <Tooltip text={"N/A Skill"} fontSize={"10px"}>
          <SkillIcon size={50} />
        </Tooltip>
        <Tooltip text={"N/A Skill"} fontSize={"10px"}>
          <SkillIcon size={50} />
        </Tooltip>
        <Tooltip text={"N/A Skill"} fontSize={"10px"}>
          <SkillIcon size={50} />
        </Tooltip>
        <Tooltip text={"N/A Skill"} fontSize={"10px"}>
          <SkillIcon size={50} />
        </Tooltip>
        <Tooltip text={"N/A Skill"} fontSize={"10px"}>
          <SkillIcon size={50} />
        </Tooltip>
      </div>
      <Link className={styles.checkLink} href={""}>
        Check it out!
      </Link>
    </div>
  );
};

export default ProjectCard;
