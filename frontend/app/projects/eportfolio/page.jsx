import React from "react";

import styles from "@/app/styles/ProjectPages.module.css";

import IconLink from "@/app/components/IconLink";
import Link from "next/link";

const EportfolioPage = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.backButton} href={"/projects/"}>
        Back
      </Link>

      <div className={styles.header}>
        <h1>My ePortfolio</h1>
      </div>
      <div className={styles.overview}>
        <p>
          My ePortfolio is the website you are on right now! If you want to see
          the source code for the website, it can be accessed down below. If you
          want to see the project, keep exploring the various pages!
        </p>
      </div>
      <div className={styles.links}>
        <h2>View the Source Code</h2>
        <div className={styles.codeLinks}>
          <IconLink
            platform={"Github - Frontend"}
            href={"https://github.com/OwenS3881/eportfolio-frontend"}
            src={"/github-icon.png"}
          />
          <IconLink
            platform={"Github - Backend"}
            href={"https://github.com/OwenS3881/eportfolio-backend"}
            src={"/github-icon.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default EportfolioPage;
