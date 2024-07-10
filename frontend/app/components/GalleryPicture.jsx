"use client";

import React from "react";
import { useState } from "react";

import styles from "@/app/styles/GalleryPicture.module.css";

import Image from "next/image";

import { FaWindowClose } from "react-icons/fa";

const GalleryPicture = ({ src, width, height, alt }) => {
  const [clicked, setClicked] = useState(false);

  const openImage = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  const closeImage = (e) => {
    e.preventDefault();
    setClicked(false);
  };

  return (
    <>
      <button className={styles.galleryButton} onClick={openImage}>
        <Image src={src} width={width} height={height} alt={alt} />
      </button>
      {clicked && (
        <div className={styles.zoomed}>
          <div className={styles.zoomedImage}>
            <button onClick={closeImage}>
              <FaWindowClose />
            </button>
            <Image src={src} fill={true} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPicture;
