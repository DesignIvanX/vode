import React from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./styles.module.css";
import Bottle from "../../static/flayer.webp";
const index = () => {
  return (
    <section id="about" className={styles["about"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-container-box"]}>
          <img
            className={styles["about-container-box--img"]}
            src={Bottle}
            alt="botella vode"
          />
        </div>
        <div className={styles["about-container-text"]}>
          <h3 className={styles["about-container-text--h3"]}>
            ---- Solucion Real, Real y Rapida
          </h3>
          <h2 className={styles["about-container-text--h2"]}>
            "Trazando Nuestro Camino: Vode, el Resguardo de la Esencia Natural"
          </h2>
          <p className={styles["about-container-text--p"]}>
            Vode no es solo una marca de agua, es una promesa de una experiencia
            de revitalización y frescura profundas. Creemos en un mundo mejor y
            eso comienza con una mejor versión de ti. Vode contribuye con tu
            salud mental y física para que tu sumes a un mejor mañana para
            todos.
          </p>
          <div className={styles["button"]}>
            <a href="/products" className={styles["product-button"]}>
              Productos <FiArrowRight className={styles["flecha"]} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
