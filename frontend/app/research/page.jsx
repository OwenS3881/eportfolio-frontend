import React from "react";

import styles from "@/app/styles/Research.module.css";

import RecentJournal from "@/app/components/RecentJournal";
import Reveal from "../components/Reveal";
import ResearchCard from "@/app/components/ResearchCard";
import Link from "next/link";

export const metadata = {
    title: "Research",
};

//Retrieves the research experiences from the backend
async function fetchResearch() {
    const res = await fetch(
        "https://owen-eportfolio-backend.vercel.app/api/research/",
        {
            next: {
                revalidate: 1,
            },
        }
    );

    const research = await res.json();
    return research;
}

const ResearchPage = async () => {
    const researchList = await fetchResearch();

    return (
        <div className={styles.container}>
            <h1>Research</h1>
            <p>
                As a member of{" "}
                <Link
                    href={
                        "https://cur.aa.ufl.edu/programs-university-research-scholars-program/"
                    }
                    target="_blank"
                >
                    UF's University Research Scholars Program (URSP)
                </Link>
                , I have and will continue to have the opportunity to
                participate in many meaningful research projects across
                disciplines at UF. Below are some of the projects I have worked
                on so far.
            </p>
            <div className={styles.researchCardsContainer}>
                {researchList.map((researchExperience) => (
                    <>
                        <Reveal key={researchExperience.id}>
                            <ResearchCard
                                key={researchExperience.id}
                                researchExperience={researchExperience}
                            />
                        </Reveal>
                    </>
                ))}
            </div>
            <Reveal>
                <hr />
            </Reveal>
            <Reveal>
                <RecentJournal />
            </Reveal>
        </div>
    );
};

export default ResearchPage;
