import React from "react";

import styles from "@/app/styles/FruitForce.module.css";

import Image from "next/image";
import Link from "next/link";

import IconLink from "@/app/components/IconLink";

const FruitForcePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Fruit Force</h1>
      </div>
      <div className={styles.overview}>
        <p>
          Fruit Force is a game in which the player takes control of a cast of
          different fruits trapped on a hostile, extraterrestrial planet with
          the goal of escaping back to their home. The player will have to
          navigate through dangerous levels using their blaster to propel them
          and to defend themselves against the alien species that occupies the
          planet.
        </p>
        <div className={styles.overviewImg}>
          <Image src={"/fruit-force.png"} fill={true} alt="fruit-force" />
        </div>
      </div>
      <div className={styles.links}>
        <h2>Get it now</h2>
        <div className={styles.storeLinks}>
          <IconLink
            platform={"Apple"}
            href={"https://apps.apple.com/us/app/fruit-force/id1585557870"}
            src={"/fruit-force-icon.png"}
          />
          <IconLink
            platform={"Android"}
            href={
              "https://play.google.com/store/apps/details?id=com.owenszymanski.fruitforce"
            }
            src={"/fruit-force-icon.png"}
          />
        </div>
        <h2>View the Source Code</h2>
        <div className={styles.codeLinks}>
          <IconLink
            platform={"Github"}
            href={"https://github.com/OwenS3881/fruit-force"}
            src={"/github-icon.png"}
          />
        </div>
      </div>
      <div className={styles.characters}>
        <h2>Characters</h2>
        <p>
          Every character in Fruit Force is based upon a different type of
          fruit. Additionally, each character has their own ability that is
          unique to them, allowing the player to deal with combat in a variety
          of ways. The player unlocks each new character upon the completion of
          a level.
        </p>
        <div className={styles.characterInfo}>
          <p>
            Bennie Banana’s ability is that he can fire a banana projectile.
            When the banana is fired, time completely stops and the player gains
            control of the banana projectile and is able to direct in any way
            using a joystick. Bennie’s ability allows the player to target a
            single, hard to kill enemy with one shot.
          </p>
          <div className={styles.charImgContainer}>
            <Image src={"/bennie.png"} fill={true} alt="character" />
          </div>
        </div>
        <div className={styles.characterInfo}>
          <p>
            Maggie Melon’s unique ability is the melon smash. Upon activation of
            the ability, the player’s momentum is set to zero and the player
            rapidly descends. During this period, the player is invincible to
            damage and any enemies that make contact with the player will die
            immediately. Upon contact with the ground, a shockwave is unleashed
            in both horizontal directions that will kill all enemies it comes in
            contact with.
          </p>
          <div className={styles.charImgContainer}>
            <Image src={"/fruit-force.png"} fill={true} alt="character" />
          </div>
        </div>
        <div className={styles.characterInfo}>
          <p>
            Mr. Cherry’s ability is a special cherry bomb projectile that he can
            fire. The cherry bomb does not deal damage upon contact and will
            instead roll until activated. Once the bomb is detonated by the
            player, time will stop and a large explosion will be unleashed,
            killing any enemies within the blast radius. Mr. Cherry’s ability is
            best used to kill many enemies in a densely packed area.
          </p>
          <div className={styles.charImgContainer}>
            <Image src={"/fruit-force.png"} fill={true} alt="character" />
          </div>
        </div>
        <div className={styles.characterInfo}>
          <p>
            Petey Pineapple’s special ability is he can fire a ring of pineapple
            spikes out from his body. Upon activation, roughly twenty pineapple
            spikes fire out in a ring formation. The spikes travel at a constant
            speed and will kill any enemy they come in contact with
          </p>
          <div className={styles.charImgContainer}>
            <Image src={"/fruit-force.png"} fill={true} alt="character" />
          </div>
        </div>
        <div className={styles.characterInfo}>
          <p>
            Divine Dragonfruit’s special ability is a fireball that can be
            launched directly from the player without the use of a blaster. Upon
            activation, the fireball will launch out in whatever direction the
            player is facing and travel through any obstacle, destroying all
            enemies along its path.
          </p>
          <div className={styles.charImgContainer}>
            <Image src={"/fruit-force.png"} fill={true} alt="character" />
          </div>
        </div>
        <div className={styles.characterInfo}>
          <p>
            Loco Coco’s special ability is that he can curl his arms and legs
            into a ball and become an invincible bouncy ball. Upon activation,
            the player loses control of Loco as he bounces around in random
            directions. If Loco makes contact with an enemy, that enemy dies
            immediately.
          </p>
          <div className={styles.charImgContainer}>
            <Image src={"/fruit-force.png"} fill={true} alt="character" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitForcePage;
