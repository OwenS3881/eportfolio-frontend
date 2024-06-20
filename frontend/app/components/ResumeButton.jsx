import React from "react";

import Link from "next/link";

import styles from "@/app/styles/ResumeButton.module.css";

import { FaFileDownload } from "react-icons/fa";

//Button component to download my Resume

const ResumeButton = ({ className }) => {
  return (
    <Link className={`${styles.button} ${className}`} href={"/api/resume"}>
      <FaFileDownload />
      Download Resume
    </Link>
  );
};

export default ResumeButton;
