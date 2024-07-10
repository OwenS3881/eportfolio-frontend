import React from "react";

import styles from "@/app/styles/ProjectPages.module.css";

import Link from "next/link";
import UTrackUnity from "@/app/components/UTrackUnity";

const UTrackDemo = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.backButton} href={"/projects/utrack/"}>
        Back
      </Link>
      <UTrackUnity />
    </div>
  );
};

export default UTrackDemo;
