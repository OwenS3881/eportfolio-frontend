import React from "react";

import styles from "@/app/styles/NotFound.module.css";

import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1>404 Page Not Found</h1>
            <Link className={styles.homeLink} href={"/"}>
                Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
