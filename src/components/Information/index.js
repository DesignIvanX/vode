import React from "react";
import {
  FaRegSmile,
  FaRegAngry,
  FaRegSadTear,
  FaRegLaughWink,
} from "react-icons/fa";
import styles from "./styles.module.css";

const InfoSection = () => {
  return (
    <div className={styles["info-container"]}>
      <div className={styles["info-text"]}>
        <h2>Our Company Was Founded in 1903</h2>
      </div>
      <div className={styles["emoji-group"]}>
        <div className={styles["emoji-item"]}>
          <FaRegSmile className={styles["emoji"]} />
          <p>Emotion 1 - Information here</p>
        </div>
        <div className={styles["emoji-item"]}>
          <FaRegAngry className={styles["emoji"]} />
          <p>Emotion 2 - Information here</p>
        </div>
        <div className={styles["emoji-item"]}>
          <FaRegSadTear className={styles["emoji"]} />
          <p>Emotion 3 - Information here</p>
        </div>
        <div className={styles["emoji-item"]}>
          <FaRegLaughWink className="emoji" />
          <p>Emotion 4 - Information here</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
