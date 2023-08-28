import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles["contact"]}>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-content-contact"]}>
          <div className={styles["contact-content-contact-box"]}>
            <h2 className={styles["contact-content-contact--h2"]}>
              CONTACTANOS
            </h2>
            <p className={styles["contact-content-contact--p"]}>
              Las Palomas 151 c/ Arroyo Fortin, Villa Elisa
            </p>
            <p className={styles["contact-content-contact--p"]}>
              Horarios de atencion: 07:00hs a 17:00hs
            </p>
            <a className="btn-primary" href="/">
              REALIZAR PEDIDO
            </a>
          </div>

          <div className={styles["contact-content-contact-icon"]}>
            <a
              className={styles["contact-content-contact-icon--a"]}
              href="https://wa.me/+595 971 929830"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
