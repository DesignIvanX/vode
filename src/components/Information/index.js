import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaBottleDroplet } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import styles from "./styles.module.css";

const InfoSection = () => {
  const [text] = useTypewriter({
    words: [
      "A veces lo mas productivo que puedes hacer es relajarte.",
      "Nuestra compañia se fundo en 2023.",
      "Si hay magia en el planeta, esta contenida en el agua.",
      "Vode, conecta con tu esencia.",
      "100% pura y mineral.",
    ],
    loop: {},
  });
  return (
    <div className={styles["info-container"]}>
      <div className={styles["info-text"]}>
        <h2 className={styles["info-text--h2"]}>
          {text} <Cursor />
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
      </div>
    </div>
  );
};

export default InfoSection;
