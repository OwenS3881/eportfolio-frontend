import React from "react";
import Link from "next/link";

import styles from "@/app/styles/Journal.module.css";

import JournalEntry from "@/app/components/JournalEntry";

import Reveal from "@/app/components/Reveal";

export const metadata = {
    title: "Journal",
};

//Retrieves the journal entries from the backend
async function fetchEntries() {
    const res = await fetch(
        "https://owen-eportfolio-backend.vercel.app/api/journal/",
        {
            next: {
                revalidate: 1,
            },
        }
    );

    //sort entries by date
    const entries = await res.json();
    entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    return entries;
}

//returns date in proper format
function formatDate(date) {
    const dateObj = new Date(date);

    return `${
        dateObj.getMonth() + 1
    }/${dateObj.getDate()}/${dateObj.getFullYear()}`;
}

//Displays my journal

const JournalPage = async () => {
    const entries = await fetchEntries();

    return (
        <div className={styles.container}>
            <Link className={styles.backButton} href={"/research/"}>
                Back
            </Link>
            <h1>My Research Journal</h1>
            <div className={styles.entryContainer}>
                {entries.map((entry, i) => (
                    <>
                        <Reveal key={entry.id}>
                            <JournalEntry
                                key={entry.id}
                                title={entry.title}
                                date={formatDate(entry.date)}
                                content={entry.content}
                            />
                        </Reveal>
                        {i < entries.length - 1 ? <hr key={entry.id} /> : ""}
                    </>
                ))}
            </div>
        </div>
    );
};

export default JournalPage;
