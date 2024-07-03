import React from "react";

import styles from "@/app/styles/RecentJournal.module.css";
import Link from "next/link";

//Retrieves the most recent journal entriy from the backend
async function fetchRecentEntry() {
  const res = await fetch(
    "https://owen-eportfolio-backend.vercel.app/api/journal/recent/",
    {
      next: {
        revalidate: 1,
      },
    }
  );

  const entries = await res.json();
  return entries[0];
}

//returns date in proper format
function formatDate(date) {
  const dateObj = new Date(date);

  return `${
    dateObj.getMonth() + 1
  }/${dateObj.getDate()}/${dateObj.getFullYear()}`;
}

//section of home page that displays most recent journal entry
const RecentJournal = async () => {
  const entry = await fetchRecentEntry();
  const charLimit = 500;

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>My Journal</h2>
      <p className={styles.description}>
        Throughout my time in UF's URSP, I will be keeping a journal documenting
        my experiences in research and at UF as a whole. Here is a sample of my
        most recent entry
      </p>
      <Link className={styles.mainLink} href={"/journal/"}>
        View My Full Journal
      </Link>
      <div className={styles.entry}>
        <h3>{entry.title}</h3>
        <h4>{formatDate(entry.date)}</h4>
        <p>
          {entry.content.substring(0, charLimit)}...
          <Link href={"/journal/"}>continue reading</Link>
        </p>
      </div>
    </section>
  );
};

export default RecentJournal;
