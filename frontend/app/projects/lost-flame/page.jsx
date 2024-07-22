import React from "react";

import styles from "@/app/styles/ProjectPages.module.css";

import IconLink from "@/app/components/IconLink";
import Link from "next/link";

export const metadata = {
  title: "Lost Flame",
};

const LostFlamePage = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.backButton} href={"/projects/"}>
        Back
      </Link>
      <div className={styles.header}>
        <h1>Lost Flame</h1>
      </div>
      <div className={styles.overview}>
        <p>
          Lost Flame is a game in which the player takes control of a lonely
          flame on a quest to save his people from the evil beasts of the
          forest. The player will have to navigate an ever-changing enchanted
          forest filled with a wide variety of unique enemies. Along the way,
          the player will gain more skills and power and be able to defeat even
          the toughest of obstacles that stand in their way.
        </p>
      </div>
      <div className={styles.links}>
        <h2>Get it now</h2>
        <div className={styles.storeLinks}>
          <IconLink
            platform={"Apple"}
            href={"https://apps.apple.com/au/app/lost-flame/id1617540856"}
            src={"/lost-flame-icon.png"}
          />
          <IconLink
            platform={"Android"}
            href={
              "https://play.google.com/store/apps/details?id=com.owenszymanski.lostlflame"
            }
            src={"/lost-flame-icon.png"}
          />
        </div>
        <h2>View the Source Code</h2>
        <div className={styles.codeLinks}>
          <IconLink
            platform={"Github"}
            href={"https://github.com/OwenS3881/lost-flame"}
            src={"/github-icon.png"}
          />
        </div>

        <h2>Legal Information</h2>

        <div className={styles.legal}>
          <Link href={"/projects/lost-flame/privacy/"}>Privacy Policy</Link>
          <Link href={"/projects/lost-flame/terms/"}>Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default LostFlamePage;
