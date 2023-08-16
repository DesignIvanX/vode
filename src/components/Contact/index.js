import React from "react";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <section className={styles["contact"]}>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-content-contact"]}>
          <h2 className={styles["contact-content-contact--h2"]}>CONTACTANOS</h2>
          <p className={styles["contact-content-contact--p"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <a href="https://www.xn--diseowebmurcia1-1qb.es/crear-pagina-contacto-de-web/">
              <AiFillInstagram />
            </a>
            <a href="">
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
        <div className={styles["contact-content-information"]}>
          <h2 className={styles["contact-content-box--h2"]}>INFORMACION</h2>
          <div>
            <FaLocationDot />
            <p>Las Palomas 151 c/ Arroyo Fortin, Villa Elisa</p>
          </div>
          <div>
            <FaClock />
            <p>Horarios de atencion: 07:00hs a 17:00hs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
