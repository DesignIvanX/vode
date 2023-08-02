import React from "react";
import { FaBottleDroplet } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";
import styles from "./styles.module.css";

const InfoSection = () => {
  return (
    <div className={styles["info-container"]}>
      <div className={styles["info-text"]}>
        <h2 className={styles["info-text--h2"]}>
          Our company was founded in 1975
        </h2>
      </div>
      <div className={styles["emoji-group"]}>
        <div className={styles["emoji-item"]}>
          <FaBottleDroplet className={styles["emoji"]} />
          <p>100% Pura</p>
        </div>
        <div className={styles["emoji-item"]}>
          <MdWaterDrop className={styles["emoji"]} />
          <p>Mejor salud e hidratacion</p>
        </div>
        <div className={styles["emoji-item"]}>
          <FaLessThan className={styles["emoji"]} />
          <p>Menos sodio</p>
        </div>
        <div className={styles["emoji-item"]}>
          <VscDebugBreakpointUnsupported className={styles["emoji"]} />
          <p>Soporte 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
