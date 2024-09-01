import React from "react";

import styles from "@/app/styles/ProjectPages.module.css";

import IconLink from "@/app/components/IconLink";
import Link from "next/link";

export const metadata = {
  title: "Fruit Force",
};

const FruitForcePage = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.backButton} href={"/projects/"}>
        Back
      </Link>

      <div className={styles.header}>
        <h1>Fruit Force</h1>
      </div>
      <div className={styles.overview}>
        <p>
          Fruit Force is a game in which the player takes control of a cast of
          different fruits trapped on a hostile, extraterrestrial planet with
          the goal of escaping back to their home. The player will have to
          navigate through dangerous levels using their blaster to propel them
          and to defend themselves against the alien species that occupies the
          planet.
        </p>
      </div>
      <div className={styles.links}>
        <h2>Get it now</h2>
        <div className={styles.storeLinks}>
          <IconLink
            platform={"Apple"}
            href={"https://apps.apple.com/us/app/fruit-force/id1585557870"}
            src={"/fruit-force-icon.png"}
          />
          <IconLink
            platform={"Android"}
            href={
              "https://play.google.com/store/apps/details?id=com.owenszymanski.fruitforce"
            }
            src={"/fruit-force-icon.png"}
          />
        </div>
        <h2>View the Source Code</h2>
        <div className={styles.codeLinks}>
          <IconLink
            platform={"Github"}
            href={"https://github.com/OwenS3881/fruit-force"}
            src={"/github-icon.png"}
          />
        </div>
        <h2>Legal Information</h2>

        <div className={styles.legal}>
          <Link href={"/projects/fruit-force/privacy/"}>Privacy Policy</Link>
          <Link href={"/projects/fruit-force/terms/"}>Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default FruitForcePage;
