"use client";

import React, { useEffect } from "react";
import { useState } from "react";

import styles from "@/app/styles/Navbar.module.css";

import Link from "next/link";

//Global Navbar

const Nav = () => {
  const mobileWidth = 800; //width at which nav switches from desktop -> mobile
  const [desktop, setDesktop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  //check the screen width and update state
  useEffect(() => {
    const handleResize = () => {
      console.log("verifying");
      setDesktop(window.innerWidth > mobileWidth);
      if (desktop) setMobileOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    //for initial load
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <>
      {desktop ? (
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
      ) : (
        <>
          <header className={styles.mobileContainer}>
            <Link href={"/"}>
              <h2>Owen Szymanski</h2>
            </Link>
            <button
              className={`${styles.hamburger} ${
                mobileOpen && styles.hamburgerOpen
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={styles.hamburgerTop}></span>
              <span className={styles.hamburgerMiddle}></span>
              <span className={styles.hamburgerBottom}></span>
            </button>
          </header>
          <div className={`${styles.sidebar} ${mobileOpen ? "" : styles.hide}`}>
            <h3>Menu</h3>
            <hr />
            <div className={styles.sidebarLinks}>
              <Link href={"/projects/"}>Projects</Link>
              <Link href={"/coursework/"}>Coursework</Link>
              <Link href={"/research/"}>Research</Link>
              <Link href={"/photos/"}>Photos</Link>
              <Link href={"/journal/"}>Journal</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
