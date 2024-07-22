import React from "react";

import styles from "@/app/styles/ProjectPages.module.css";

import IconLink from "@/app/components/IconLink";
import Link from "next/link";

export const metadata = {
  title: "UTrack",
};

const UtrackPage = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.backButton} href={"/projects/"}>
        Back
      </Link>

      <div className={styles.header}>
        <h1>UTrack</h1>
      </div>
      <div className={styles.overview}>
        <p>
          UTrack was a prototype system I developed as part of my senior year
          Engineering Design and Development PLTW capstone project. UTrack is a
          new way to track the attendance of a school that allows for students
          to mark themselves present by using QR codes that are unique to the
          teacher and day. The mobile App Beta is currently available for iOS
          devices only at the moment and the web portal can be accessed through
          this web page.
        </p>
      </div>
      <div className={styles.links}>
        <h2>Check it out now</h2>
        <div className={styles.storeLinks}>
          <IconLink
            platform={"iOS Beta"}
            href={"https://testflight.apple.com/join/X0WtQTIj"}
            src={"/utrack-logo.png"}
          />
          <IconLink
            platform={"Web Portal"}
            href={"/projects/utrack/demo/"}
            src={"/utrack-logo.png"}
            external={true}
          />
        </div>
        <h2>View the Source Code</h2>
        <div className={styles.codeLinks}>
          <IconLink
            platform={"Github"}
            href={"https://github.com/OwenS3881/EDD_Attendance_System"}
            src={"/github-icon.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default UtrackPage;
