import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "@/app/styles/SocialIcon.module.css";

const SocialIcon = ({ href, src, size }) => {
  return (
    <div>
      <Link href={href} target={"_blank"}>
        <Image
          className={styles.image}
          src={src ? src : "/na.png"}
          width={size}
          height={size}
          alt={`skill_icon_${src}`}
        />
      </Link>
    </div>
  );
};

export default SocialIcon;
