import React from "react";

import styles from "@/app/styles/SkillsSection.module.css";

import SkillCard from "../SkillCard";

//Displays all of my technical skills

const SkillsSection = () => {
  return (
    <section className={styles.container}>
      <h2>Technical Skills</h2>

      <div className={styles.skillCardContainer}>
        <SkillCard
          href={"https://unity.com/"}
          src={"/unity-icon.png"}
          title={"Unity"}
          size={50}
        />
        <SkillCard
          href={"https://learn.microsoft.com/en-us/dotnet/csharp/"}
          src={"/csharp-icon.png"}
          title={"C#"}
          size={50}
        />
        <SkillCard
          href={"https://developer.apple.com/wwdc24/"}
          src={"/ios-icon.png"}
          title={"iOS Development"}
          size={50}
        />
        <SkillCard
          href={"https://play.google.com/console/about/"}
          src={"/android-icon.jpg"}
          title={"Android Development"}
          size={50}
        />
        <SkillCard
          href={"https://nextjs.org/"}
          src={"/next-icon.jpg"}
          title={"Next JS"}
          size={50}
        />
        <SkillCard
          href={"https://react.dev/"}
          src={"/react-icon.png"}
          title={"React JS"}
          size={50}
        />
        <SkillCard
          href={"https://www.djangoproject.com/"}
          src={"/django-icon.svg"}
          title={"Django"}
          size={50}
        />
        <SkillCard
          href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          src={"/js-icon.png"}
          title={"Javascript"}
          size={50}
          isSquare={true}
        />
        <SkillCard
          href={"https://www.python.org/"}
          src={"/python-icon.png"}
          title={"Python"}
          size={50}
        />
        <SkillCard
          href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          src={"/css-icon.svg"}
          title={"CSS"}
          size={50}
        />
        <SkillCard
          href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          src={"/html-icon.png"}
          title={"HTML"}
          size={50}
        />
        <SkillCard
          href={"https://www.java.com/en/"}
          src={"/java-icon.png"}
          title={"Java"}
          size={50}
        />
        <SkillCard
          href={"https://visualstudio.microsoft.com/vs/features/cplusplus/"}
          src={"/cpp-icon.jpg"}
          title={"C++"}
          size={50}
        />
        <SkillCard
          href={"https://krita.org/en/"}
          src={"/krita-icon.svg"}
          title={"Krita"}
          size={50}
        />
        <SkillCard
          href={"https://www.php.net/"}
          src={"/php-icon.svg"}
          title={"PHP"}
          size={50}
        />
        <SkillCard
          href={"https://firebase.google.com/"}
          src={"/firebase-icon.png"}
          title={"Firebase"}
          size={50}
        />
        <SkillCard
          href={""}
          src={"/database-icon.png"}
          title={"Databases/SQL"}
          size={50}
        />
        <SkillCard
          href={"https://code.visualstudio.com/"}
          src={"/vscode-icon.png"}
          title={"VS Code"}
          size={50}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
