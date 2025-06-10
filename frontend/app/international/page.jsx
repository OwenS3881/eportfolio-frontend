import React from "react";

import styles from "@/app/styles/International.module.css";
import PictureAndCaption from "@/app/components/PictureAndCaption";

export const metadata = {
    title: "Study Abroad",
};

//Page for all of the information from my study abroad experience
const InternationalPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titleText}>Study Abroad</h1>
            <h2 className={styles.subTitleText}>
                UF in Cape Town: Software Engineering and UX Design Internship
                Abroad
            </h2>

            <div className={styles.captionsContainer}>
                <PictureAndCaption imgSrc={"/abroad-pics/good-hope.jpg"} />
                <PictureAndCaption
                    imgSrc={"/abroad-pics/safe-cities-meeting.jpg"}
                />
                <PictureAndCaption
                    imgSrc={"/abroad-pics/safe-cities-farm.jpg"}
                />
                <PictureAndCaption imgSrc={"/abroad-pics/hs-curro.jpg"} />
                <PictureAndCaption imgSrc={"/abroad-pics/paragliding.jpg"} />
            </div>
        </div>
    );
};

export default InternationalPage;
