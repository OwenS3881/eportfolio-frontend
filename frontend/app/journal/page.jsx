import React from "react";

import styles from "@/app/styles/Journal.module.css";

import JournalEntry from "../components/JournalEntry";

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
  const formatObj = new Intl.DateTimeFormat("en-us");
  return formatObj.format(dateObj);
}

//Displays my journal

const JournalPage = async () => {
  const entries = await fetchEntries();

  return (
    <div className={styles.container}>
      <h1>My Journal</h1>
      <div className={styles.entryContainer}>
        {entries.map((entry, i) => (
          <>
            <JournalEntry
              key={entry.id}
              title={entry.title}
              date={formatDate(entry.date)}
              content={entry.content}
            />
            {i < entries.length - 1 ? <hr key={entry.id} /> : ""}
          </>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
