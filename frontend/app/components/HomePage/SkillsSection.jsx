import React from "react";

import styles from "@/app/styles/SkillsSection.module.css";

import SkillCard from "../SkillCard";

import { getSkill } from "@/app/functions/GetSkills";

//Displays all of my technical skills
const SkillsSection = () => {
    const skillsList = [
        "Unity",
        "C#",
        "iOS Development",
        "Android Development",
        "Next JS",
        "React JS",
        "React Native",
        "Express JS",
        "MongoDB",
        "Flask",
        "Django",
        "Javascript",
        "Python",
        "CSS",
        "HTML",
        "Java",
        "C++",
        "Krita",
        "ARM",
        "PHP",
        "Firebase",
        "Databases/SQL",
        "VS Code",
    ];

    return (
        <section className={styles.container}>
            <h2>Technical Skills</h2>

            <div className={styles.skillCardContainer}>
                {skillsList.map((item, index) => {
                    const skillItem = getSkill(item);
                    return (
                        <SkillCard
                            key={index}
                            href={skillItem.href}
                            src={skillItem.src}
                            title={skillItem.title}
                            size={50}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default SkillsSection;
