import React from "react";

import styles from "@/app/styles/VirtualLearningLab.module.css";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

const VirutalLearningLabPage = () => {
    return (
        <main className={styles.container}>
            <Link className={styles.backButton} href={"/research/"}>
                Back
            </Link>
            <h1>The Virtual Learning Lab</h1>
            <Reveal>
                <div className={styles.subtitleContainer}>
                    <p>
                        The{" "}
                        <Link
                            href={"https://virtuallearninglab.org/"}
                            target="_blank"
                        >
                            Virtual Learning Lab
                        </Link>{" "}
                        is a research lab at the University of Florida's College
                        of Education focused on developing and exploring new
                        methodologies for educating students in the digital
                        world.
                    </p>

                    <p>
                        I received the opportunity to work with{" "}
                        <Link
                            href={
                                "https://education.ufl.edu/faculty/leite-walter/"
                            }
                            target="_blank"
                        >
                            Dr. Walter Leite
                        </Link>{" "}
                        in his lab through the University Research Scholars
                        Program{" "}
                        <Link
                            href={"https://cur.aa.ufl.edu/cure-2/"}
                            target="_blank"
                        >
                            CURE class
                        </Link>{" "}
                        program.
                    </p>

                    <p>
                        In my work with the Virtual Learning Lab, I have been a
                        part of the{" "}
                        <Link
                            href={
                                "https://virtuallearninglab.org/research/storiza/"
                            }
                            target="_blank"
                        >
                            Storiza
                        </Link>{" "}
                        project. Storiza is a reading application that leverages
                        artificial intelligence to allow for students to create
                        stories for reading practice that align with their own
                        interests.
                    </p>

                    <p>
                        My team's contribution to Storiza has been as part of
                        Project FUNLIT. Project FUNLIT is focused on the
                        development of a framework for gamifying the practice of
                        reading. By leveraging AI technologies, our research is
                        focused on developing unique, interactive, gamified
                        experiences to encourage reading practice in students.
                    </p>

                    <p>
                        Below, you can see the FUNLIT team's poster presentation
                        that we delivered at the annual Spring Undergraduate
                        Research Symposium in the Spring of 2025.
                    </p>
                </div>
            </Reveal>

            <Reveal>
                <div className={styles.posterContainer}>
                    <a
                        href="/research/funlit-poster.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/research/funlit-poster.jpg"}
                            width={2496}
                            height={1872}
                            layout="responsive"
                            alt="funlit-poster"
                        />
                    </a>
                </div>
            </Reveal>
        </main>
    );
};

export default VirutalLearningLabPage;
