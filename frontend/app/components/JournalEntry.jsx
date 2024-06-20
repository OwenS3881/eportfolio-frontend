import React from "react";

import styles from "@/app/styles/JournalEntry.module.css";

const JournalEntry = ({ title, date, content }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{content}</p>
    </div>
  );
};

export default JournalEntry;
