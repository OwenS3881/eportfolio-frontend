import React from "react";

import styles from "@/app/styles/Photos.module.css";

import Image from "next/image";

import { promises as fs } from "fs";
import path from "path";

import GalleryPicture from "../components/GalleryPicture";

export const metadata = {
    title: "Photos",
};

const namesAndCaptions = new Map([
    [
        "good-hope.jpg",
        "Me at the Cape of Good Hope on my Summer 2025 Study Abroad in Cape Town, South Africa",
    ],
    [
        "cure-presentation.jpg",
        "My CURE team and I presenting our research at the Spring Undergraduate Research Symposium",
    ],
    ["hipergator.jpg", "Me taking a tour of UF's super computer HiPerGator"],
    [
        "honors-me.jpg",
        "Me standing outside the Honors Village on a tour of UF.",
    ],
    [
        "graduation.JPG",
        "Me giving the Salutatorian speech at my High School graduation.",
    ],
    [
        "young-me.jpg",
        "Me standing outside the Computer Science building when I was a kid.",
    ],
]);

const PhotosPage = async () => {
    return (
        <div className={styles.container}>
            <h1>Photo Gallery</h1>
            <div className={styles.gallery}>
                {Array.from(namesAndCaptions.entries()).map(
                    ([filename, caption], i) => (
                        <GalleryPicture
                            key={i}
                            src={`/gallery/${filename}`}
                            width={250}
                            height={250}
                            caption={caption}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default PhotosPage;
