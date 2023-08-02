import React from "react";
import styles from "./styles.module.css";
const index = () => {
  return (
    <section className={styles["collection"]}>
      <div className={styles["collection-box"]}>
        <img
          className={styles["collection-box--img"]}
          src="/static/bottle.webp"
          alt="vode"
        />
        <h2 className={styles["collection-box--h2"]}>
          Agua de Manantial Alcalinizada
        </h2>
        <a className="btn-primary" href="">
          Conoce Mas
        </a>
      </div>
      <div className={styles["collection-box"]}>
        <img
          className={styles["collection-box--img"]}
          src="/static/bottle.webp"
          alt="vode"
        />
        <h2 className={styles["collection-box--h2"]}>
          Agua de Manantial Alcalinizada
        </h2>
        <a className="btn-primary" href="">
          Conoce Mas
        </a>
      </div>
    </section>
  );
};

export default index;
