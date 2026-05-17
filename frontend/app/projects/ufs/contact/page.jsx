import React from "react";

import Link from "next/link";

import styles from "@/app/styles/Legal.module.css";

export const metadata = {
    title: "Contact | UFS",
};

const FruitForcePrivacy = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.backButton} href={"./"}>
                Back
            </Link>
            <h2>Contact for UFS</h2>
            <p>
                If you have any questions or requests regarding UFS including
                requesting account deletion please email owenski08@gmail.com
            </p>
        </div>
    );
};

export default FruitForcePrivacy;
