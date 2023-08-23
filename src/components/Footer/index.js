import React from "react";
import Logo from "../../static/vode.jpg";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-content-box"]}>
          <img
            className={styles["footer-content-box--img"]}
            src={Logo}
            alt="vode"
          />
          <p className={styles["footer-content-box--p"]}>
            Las Palomas 151 c/ Arroyo Fortin, Villa Elisa
          </p>
          <p className={styles["footer-content-box--p"]}>vode@gmail.com</p>
        </div>
        <div className={styles["footer-content-box"]}>
          <h3 className={styles["footer-content-box--h3"]}>VODE</h3>
          <p className={styles["footer-content-box--p"]}> Inicio</p>
          <p className={styles["footer-content-box--p"]}>Nosotros</p>
          <p className={styles["footer-content-box--p"]}>Productos</p>
          <p className={styles["footer-content-box--p"]}>Contacto</p>
        </div>
        <div className={styles["footer-content-box"]}>
          <h3 className={styles["footer-content-box--h3"]}>SERVICES</h3>
          <p className={styles["footer-content-box--p"]}>Agua</p>
          <p className={styles["footer-content-box--p"]}>Recarga</p>
        </div>
        <div className={styles["footer-content-box"]}>
          <h3 className={styles["footer-content-box--h3"]}>REDES</h3>
          <p className={styles["footer-content-box--p"]}>Instagram</p>
        </div>
      </div>
      <div className={styles["foot"]}>
        <div className={styles["foot-text"]}>
          <a
            className={styles["foot-text--a"]}
            href="https://www.google.com/maps/place/25%C2%B021'49.3%22S+57%C2%B035'36.1%22W/@-25.3636951,-57.595932,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-25.3636951!4d-57.5933571?hl=es&entry=ttu"
          >
            Ubicacion
          </a>
        </div>
        <div className={styles["foot-copyright"]}>
          <p className={styles["foot-copyright--p"]}>© Copyright 2023 vode</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
