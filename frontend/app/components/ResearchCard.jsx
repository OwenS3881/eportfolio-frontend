import React from "react";

import styles from "@/app/styles/Research.module.css";

import { getSkill } from "@/app/functions/GetSkills";
import Tooltip from "@/app/components/Tooltip";
import SkillIcon from "@/app/components/SkillIcon";
import Image from "next/image";
import Link from "next/link";

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

const ResearchCard = ({ researchExperience }) => {
    const skills = researchExperience.skills.split(", ");

    const startDateObj = new Date(researchExperience.start_date);
    const startDate = `${startDateObj.toLocaleString("default", {
        month: "long",
    })} ${startDateObj.getFullYear()}`;

    const endDate = getEndDate(researchExperience.end_date);

    return (
        <div className={styles.cardContainer}>
            <h1>{researchExperience.title}</h1>
            <h3>{researchExperience.professor}</h3>

            <h4>
                {startDate} - {endDate}
            </h4>

            <div className={styles.imgContainer}>
                <Image
                    src={researchExperience.image}
                    fill={true}
                    alt="research-image"
                />
            </div>

            <p>{researchExperience.description}</p>

            <h5>Skills Used:</h5>

            <div className={styles.skillsContainer}>
                {skills.map((skill, i) => {
                    const skillObj = getSkill(skill);

                    return (
                        <Tooltip key={i} text={skill} fontSize={"10px"}>
                            <SkillIcon
                                href={skillObj.href}
                                src={skillObj.src}
                                isSquare={skillObj.isSquare}
                                size={30}
                            />
                        </Tooltip>
                    );
                })}
            </div>

            <Link className={styles.checkLink} href={researchExperience.url}>
                Check it out!
            </Link>
        </div>
    );
};

export default ResearchCard;
