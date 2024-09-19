import React from "react";

import styles from "../styles/Footer.module.css";

import Link from "next/link";
import ContactInfo from "./ContactInfo";
import ResumeButton from "./ResumeButton";
import SocialIcon from "./SocialIcon";

//Global footer

const Footer = () => {
  return (
    <div className={styles.container}>
      <ContactInfo className={styles.contactInfo} />
      <div className={styles.socialContainer}>
        <SocialIcon
          href={"https://www.linkedin.com/in/oszymanski"}
          src={"/linkedin-logo.png"}
          size={25}
        />
        <SocialIcon
          href={"https://github.com/OwenS3881"}
          src={"/github-icon.png"}
          size={25}
        />
      </div>
      <hr />
      <ResumeButton className={styles.resumeButton} />
      <hr />
      <p>&copy;2024 Owen Szymanski</p>
    </div>
  );
};

export default Footer;
