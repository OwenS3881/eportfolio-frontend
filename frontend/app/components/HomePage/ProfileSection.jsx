import React from "react";

import styles from "@/app/styles/ProfileSection.module.css";

import Image from "next/image";
import Link from "next/link";
import ContactInfo from "../ContactInfo";
import ResumeButton from "../ResumeButton";

//Contains basic information about me to be displayed at the top of the home page

const ProfileSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/ProfilePictureSquare.jpg"}
          width={1000}
          height={1000}
          alt="OwenProfile"
        />
      </div>

      <div className={styles.aboutContainer}>
        <h1>Hi, I'm Owen</h1>
        <h2>Computer Science Major at the University of Florida.</h2>
        <p>
          Hello, I'm Owen Szymanski and I am an incoming freshman at the
          University of Florida. I am really excited to be majoring in Computer
          Science with the goal of becoming a software engineer. In addition to
          my CS major, I also want to earn a minor in Digital Arts and Sciences
          and a certificate in AI. I have also been accepted into UF's Honors
          Program and Undergraduate Research Scholars Program (URSP). For more
          about my research, check out my{" "}
          <Link href={"/research/"}>research</Link> page!
        </p>
        <ContactInfo className={styles.contactContainer} />
        <ResumeButton />
      </div>
    </section>
  );
};

export default ProfileSection;
