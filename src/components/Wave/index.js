import React from "react";
import styles from "./styles.module.css";
const index = ({ text }) => {
  return (
    <div>
      <h2 className={styles["border"]}>{text}</h2>
      <h2 className={styles["wave"]}>{text}</h2>
    </div>
  );
};

export default index;
