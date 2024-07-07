"use client";

import React from "react";

import styles from "@/app/styles/Reveal.module.css";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Reveal = ({ children }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const [activated, setActivated] = useState(false);

  if (!activated && inView) setActivated(true);

  return (
    <div
      ref={ref}
      className={`${styles.rest} ${activated ? styles.active : ""}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
