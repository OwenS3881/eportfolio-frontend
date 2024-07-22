import React from "react";

import styles from "@/app/styles/Photos.module.css";

import Image from "next/image";

import { promises as fs } from "fs";
import path from "path";

import GalleryPicture from "../components/GalleryPicture";

export const metadata = {
  title: "Photos",
};

const captions = new Map([
  [
    "graduation.JPG",
    "Me giving the Salutatorian speech at my High School graduation.",
  ],
  ["uf-honors.jpg", "UF Honors Class of 2028!"],
  [
    "ursp.png",
    "UF's Center For Undergraduate Research which I will be actively involved in as part of the URSP.",
  ],
  ["honors-me.jpg", "Me standing outside the Honors Village on a tour of UF."],
  [
    "young-me.jpg",
    "Me standing outside the Computer Science building when I was a kid.",
  ],
]);

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
            caption={captions.get(srcFile)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
