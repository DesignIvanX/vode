import React from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./styles.module.css";
import Bottle from "../../static/pixelcut4.jpeg";
const index = () => {
  return (
    <section className={styles["about"]}>
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
            En el corazón de la naturaleza, encontramos la inspiración para
            Vode, nuestra marca de agua. Como amantes del medio ambiente,
            buscamos proteger y preservar la pureza de imágenes y documentos.
            Vode no es solo una marca de agua, es una promesa de conservación y
            solidaridad global. Únete a nosotros para trazar un camino hacia un
            futuro sostenible donde el arte y la naturaleza coexistan en
            armonía.
          </p>
          <div className={styles["button"]}>
            <a className={styles["product-button"]}>
              Our Products <FiArrowRight className={styles["flecha"]} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
