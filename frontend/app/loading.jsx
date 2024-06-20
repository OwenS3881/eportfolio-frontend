import React from "react";

import styles from "@/app/styles/Loading.module.css";

//Placeholder that is displayed when a page is loading
//Note: naming this page "loading.jsx" tells Next.js to use this automatically for loading

const LoadingPage = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingPage;
