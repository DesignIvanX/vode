import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import Vode from "../../static/pixelcut3.jpeg";
import Img from "../../static/pixelcut.jpeg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const index = () => {
  const carouselRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const firstImg = useRef(null);

  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

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

  const handleOnClickLeft = () => {
    console.log("Hola Left!");
    let firstImgWidth = firstImg.current.clientWidth + 16;
    carouselRef.current.scrollLeft -= firstImgWidth;
  };
  const handleOnClickRigth = () => {
    console.log("Hola Rigth!");

    let firstImgWidth = firstImg.current.clientWidth + 16;
    console.log(firstImg.current.clientWidth);
    carouselRef.current.scrollLeft += firstImgWidth;
  };

  return (
    <section id="featured" className={styles["featured"]}>
      <h2 className={styles["featured--h2"]}>
        PRODUCTOS <span>DESTACADOS</span>
      </h2>
      <div className={styles["wrapper"]}>
        <AiOutlineArrowLeft
          ref={leftRef}
          onClick={handleOnClickLeft}
          className={`${styles["wrapper--arrow-left"]} ${styles["wrapper--arrow"]}`}
        />
        <div ref={carouselRef} className={styles["wrapper-carousel"]}>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              ref={firstImg}
              className={styles["wrapper-carousel-container--img"]}
              src={Img}
              alt="vode"
            />
          </div>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              className={styles["wrapper-carousel-container--img"]}
              src={Vode}
              alt="vode"
            />
          </div>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              className={styles["wrapper-carousel-container--img"]}
              src={Vode}
              alt="vode"
            />
          </div>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              className={styles["wrapper-carousel-container--img"]}
              src={Vode}
              alt="vode"
            />
          </div>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              className={styles["wrapper-carousel-container--img"]}
              src={Vode}
              alt="vode"
            />
          </div>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              className={styles["wrapper-carousel-container--img"]}
              src={Vode}
              alt="vode"
            />
          </div>
        </div>
        <AiOutlineArrowRight
          ref={rightRef}
          onClick={handleOnClickRigth}
          className={`${styles["wrapper--arrow-right"]} ${styles["wrapper--arrow"]}`}
        />
      </div>
    </section>
  );
};

export default index;
