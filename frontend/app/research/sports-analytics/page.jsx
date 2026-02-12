import React from "react";

import styles from "@/app/styles/SportsAnalyticsLab.module.css";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

const SportsAnalyticsLabPage = () => {
    return (
        <main className={styles.container}>
            <Link className={styles.backButton} href={"/research/"}>
                Back
            </Link>
            <h1>Sports Analytics Lab</h1>
            <Reveal>
                <div className={styles.subtitleContainer}>
                    <p>
                        The{" "}
                        <Link
                            href={
                                "https://hhp.ufl.edu/research-faculty/sports-analytics-laboratory/"
                            }
                            target="_blank"
                        >
                            Sports Analytics Lab
                        </Link>{" "}
                        is a research lab at the University of Florida's College
                        of Health and Human Performance that works directly with
                        the UF Gator's sports teams.
                    </p>

                    <p>
                        My team and I work specifically with the UF women's
                        gymnastics team to use computer vision and machine
                        learning to evaluate performances from meets.
                    </p>
                </div>
            </Reveal>

            <Reveal>
                <div className={styles.imageGrid}>
                    <div className={styles.imageContainer}>
                        <a
                            href="/research/gymnastics-roster.webp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={"/research/gymnastics-roster.webp"}
                                fill
                                alt="gymnastics-roster"
                            />
                        </a>
                    </div>
                    <div className={styles.imageContainer}>
                        <a
                            href="/research/gymnastics-pose.webp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={"/research/gymnastics-pose.webp"}
                                fill
                                alt="gymnastics-pose"
                            />
                        </a>
                    </div>
                    <div className={styles.imageContainer}>
                        <a
                            href="/research/gymnastics-bars.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={"/research/gymnastics-bars.jpg"}
                                fill
                                alt="gymnastics-bars"
                            />
                        </a>
                    </div>
                    <div className={styles.imageContainer}>
                        <a
                            href="/research/gymnastics-beam.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={"/research/gymnastics-beam.jpg"}
                                fill
                                alt="gymnastics-beam"
                            />
                        </a>
                    </div>
                </div>
            </Reveal>
        </main>
    );
};

export default SportsAnalyticsLabPage;
