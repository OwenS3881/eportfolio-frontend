import React from "react";

import styles from "@/app/styles/Research.module.css";

export const metadata = {
    title: "Research",
};

const ResearchPage = () => {
    return (
        <div className={styles.container}>
            <h1>Research</h1>
            <p>
                As I am only just beginning my work in UF's University Research
                Scholars Program (URSP), I am yet to conduct any actual
                research. However, I am taking Research and Creativity this
                semester and will take a Course-Based Undergraduate Research
                Experience (CURE) class next semester. So check back at a later
                date to see my future research!
            </p>
            <h2 className={styles.warningBanner}>
                This page is under construction, check back later for the
                finished product!
            </h2>
        </div>
    );
};

export default ResearchPage;
