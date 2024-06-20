import React from "react";

import styles from "@/app/styles/Nav.module.css";

import Link from "next/link";

//Global Navbar

const Nav = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href={"/"}>
          <h2>Owen Szymanski</h2>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <Link href={"/projects/"}>Projects</Link>
        <Link href={"/coursework/"}>Coursework</Link>
        <Link href={"/research/"}>Research</Link>
        <Link href={"/photos/"}>Photos</Link>
        <Link href={"/journal/"}>Journal</Link>
      </div>
    </header>
  );
};

export default Nav;
