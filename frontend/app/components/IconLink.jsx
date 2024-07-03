import React from "react";

import styles from "@/app/styles/Projects.module.css";

import Link from "next/link";
import Image from "next/image";

const IconLink = ({ platform, href, src }) => {
  return (
    <div className={styles.iconLink}>
      <h3>{platform}</h3>
      <Link href={href} target="_blank">
        <Image src={src} width={100} height={100} alt={src} />
      </Link>
    </div>
  );
};

export default IconLink;
