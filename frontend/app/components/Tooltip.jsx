import React from "react";

import styles from "@/app/styles/Tooltip.module.css";

//Component that will display a message upon the child element being hovered
//Component must wrap everything that needs to be hovered upon

const Tooltip = ({ children, text, fontSize }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext} style={{ fontSize: `${fontSize}` }}>
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
