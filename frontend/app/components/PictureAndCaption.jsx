import React from "react";

import Image from "next/image";
import styles from "@/app/styles/International.module.css";

const PictureAndCaption = ({ imgSrc, text }) => {
    const defaultText =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos labore quas in iste aliquid nulla commodi accusantium dolores ratione ipsum. Quam quia debitis iure dolor architecto iusto vero ipsa mollitia cum, minima iste enim. Facilis sapiente quae dolor, eligendi, nisi nesciunt illo, omnis numquam inventore ex sed quos! Ipsam iusto illo quisquam numquam mollitia, voluptatum sit aut accusamus corporis? At nihil fugiat recusandae accusamus beatae, aperiam cum non molestias laborum? Cupiditate recusandae, fugiat quibusdam adipisci et aut quia? Culpa, architecto quasi corrupti expedita eum illo ad officia iusto ipsum pariatur praesentium alias enim quaerat dolores unde explicabo sequi doloribus fugiat.";

    const defaultImgSrc = "/na.png";

    if (!imgSrc) imgSrc = defaultImgSrc;
    if (!text) text = defaultText;

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.textContainer}>{text}</div>
            <div className={styles.imageContainer}>
                <Image src={imgSrc} fill={true} alt="study_abroad_pic" />
            </div>
        </section>
    );
};

export default PictureAndCaption;
