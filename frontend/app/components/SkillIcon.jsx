import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "@/app/styles/SkillIcon.module.css";

//Icon that displays a skill that I have

const SkillIcon = ({ href, src, size, target, isSquare, className }) => {
  return (
    <div className={className}>
      <Link
        href={href ? href : ""}
        target={target ? target : href ? "_blank" : "_self"}
      >
        <Image
          className={`${styles.image} ${isSquare ? "" : styles.circle}`}
          src={src ? src : "/na.png"}
          width={size}
          height={size}
          alt={`skill_icon_${src}`}
        />
      </Link>
    </div>
  );
};

export default SkillIcon;
