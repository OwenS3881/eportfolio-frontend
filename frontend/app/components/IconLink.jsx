import React from "react";

import styles from "@/app/styles/ProjectPages.module.css";

import Link from "next/link";
import Image from "next/image";

const IconLink = ({ platform, href, src, external }) => {
  return (
    <div className={styles.iconLink}>
      <h3>{platform}</h3>
      <Link href={href} target={external ? "" : "_blank"}>
        <Image src={src} width={100} height={100} alt={src} />
      </Link>
    </div>
  );
};

export default IconLink;
