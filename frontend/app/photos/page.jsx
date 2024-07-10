import React from "react";

import styles from "@/app/styles/Photos.module.css";

import Image from "next/image";

import { promises as fs } from "fs";
import path from "path";

import GalleryPicture from "../components/GalleryPicture";

const PhotosPage = async () => {
  //get all images from the "gallery" folder
  const imageDirectory = path.join(process.cwd(), "/public/gallery");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className={styles.container}>
      <h1>Photo Gallery</h1>
      <div className={styles.gallery}>
        {imageFilenames.map((srcFile, i) => (
          <GalleryPicture
            key={i}
            src={`/gallery/${srcFile}`}
            width={250}
            height={250}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
