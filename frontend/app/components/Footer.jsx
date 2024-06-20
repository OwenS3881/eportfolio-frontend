import React from "react";

import styles from "../styles/Footer.module.css";

import Link from "next/link";
import ContactInfo from "./ContactInfo";
import ResumeButton from "./ResumeButton";

//Global footer

const Footer = () => {
  return (
    <div className={styles.container}>
      <ContactInfo className={styles.contactInfo} />
      <hr />
      <ResumeButton className={styles.resumeButton} />
      <hr />
      <p>&copy;2024 Owen Szymanski</p>
    </div>
  );
};

export default Footer;
