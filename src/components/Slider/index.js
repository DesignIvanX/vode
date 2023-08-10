import React from "react";
import img1 from "../../static/Logo.jpg";
import img2 from "../../static/portrait.png";
import img3 from "../../static/pixelcut4.jpeg";
import img4 from "../../static/pixelcut3.jpeg";
import Img from "../../static/pixelcut.jpeg";
import styles from "./styles.module.css";
const Slider = () => {
  return (
    <div className={styles["slider"]}>
      <img className={styles["slider--img"]} src={Img} alt="vode" />

      <img className={styles["slider--img"]} src={img1} alt="vode" />

      <img className={styles["slider--img"]} src={img2} alt="vode" />

      <img className={styles["slider--img"]} src={img3} alt="vode" />

      <img className={styles["slider--img"]} src={img4} alt="vode" />
    </div>
  );
};

export default Slider;
