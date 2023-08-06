import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import Vode from "../../static/pixelcut3.jpeg";
import Img from "../../static/pixelcut.jpeg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const index = () => {
  const carouselRef = useRef(null);
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouselRef.current.scrollLeft;
  };

  const handleDragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };
  const dragStop = (e) => {
    isDragStart = false;
  };

  const handleOnClick = () => {
    console.log("hola");
  };
  useEffect(() => {
    const carouselElement = carouselRef.current;

    carouselElement.addEventListener("mousedown", dragStart);
    carouselElement.addEventListener("mousemove", handleDragging);
    carouselElement.addEventListener("mouseup", dragStop);

    return () => {
      carouselElement.addEventListener("mousedown", dragStart);
      carouselElement.removeEventListener("mousemove", handleDragging);
      carouselElement.addEventListener("mouseup", dragStop);
    };
  }, []);

  return (
    <section className={styles["featured"]}>
      <h2 className={styles["featured--h2"]}>PRODUCTOS DESTACADOS</h2>
      <div className={styles["wrapper"]}>
        <AiOutlineArrowLeft
          onClick={handleOnClick}
          className={`${styles["wrapper--arrow-left"]} ${styles["wrapper--arrow"]}`}
        />
        <div
          ref={carouselRef}
          id="carousel"
          className={styles["wrapper-carousel"]}
        >
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Img}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Img}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Img}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Img}
            alt="vode"
          />
          <img
            className={styles["wrapper-carousel--img"]}
            src={Vode}
            alt="vode"
          />
        </div>
        <AiOutlineArrowRight
          onClick={handleOnClick}
          className={`${styles["wrapper--arrow-right"]} ${styles["wrapper--arrow"]}`}
        />
      </div>
    </section>
  );
};

export default index;
