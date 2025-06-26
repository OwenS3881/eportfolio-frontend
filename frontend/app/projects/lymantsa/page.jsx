import React from "react";

import styles from "@/app/styles/ProjectPages.module.css";

import IconLink from "@/app/components/IconLink";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";

export const metadata = {
    title: "LymanTSA.org",
};

const LymanTSAPage = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.backButton} href={"/projects/"}>
                Back
            </Link>

            <div className={styles.header}>
                <h1>LymanTSA.org</h1>
            </div>
            <Reveal>
                <div className={styles.overview}>
                    <p>
                        LymanTSA.org was a website that I developed during my
                        time as President of my high school's Technology Student
                        Association club. Unfortunately, as I have graduated and
                        can no longer maintain the website, it is no longer
                        active. However, on this page you can view the full
                        source code of the website and multiple pictures of what
                        it looked like!
                    </p>
                </div>
            </Reveal>
            <div className={styles.links}>
                <Reveal>
                    <h2>View the Source Code</h2>
                    <div className={styles.codeLinks}>
                        <IconLink
                            platform={"Github"}
                            href={"https://github.com/OwenS3881/lymantsa"}
                            src={"/github-icon.png"}
                        />
                    </div>
                </Reveal>
                <h2>Original Pictures</h2>
                <div className={styles.pictures}>
                    <Reveal>
                        <Image src={"/tsa-1.png"} fill={true} alt="tsa-1" />
                    </Reveal>
                    <Reveal>
                        <Image src={"/tsa-2.png"} fill={true} alt="tsa-2" />
                    </Reveal>
                    <Reveal>
                        <Image src={"/tsa-3.png"} fill={true} alt="tsa-3" />
                    </Reveal>
                    <Reveal>
                        <Image src={"/tsa-4.png"} fill={true} alt="tsa-4" />
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default LymanTSAPage;
