import React from "react";

import styles from "@/app/styles/SkillsSection.module.css";

import Image from "next/image";

import SkillIcon from "./SkillIcon";

const SkillCard = ({ src, href, title, size, isSquare }) => {
  return (
    <div className={styles.skillCard}>
      <SkillIcon src={src} href={href} size={size} isSquare={isSquare} />
      <h3>{title}</h3>
    </div>
  );
};

export default SkillCard;
