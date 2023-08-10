import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import img1 from "../../static/Logo.jpg";
import img2 from "../../static/portrait.png";
import img3 from "../../static/pixelcut4.jpeg";
import img4 from "../../static/pixelcut3.jpeg";
import Img from "../../static/pixelcut.jpeg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Featured = () => {
  const carouselRef = useRef(null);
  const firstImg = useRef(null);

  let isDragStart = false;
  let prevPageX = 0;
  let prevScrollLeft = 0;

  const handleOnClickRight = () => {
    let firstImgWidth = firstImg.current.clientWidth + 16;
    carouselRef.current.scrollLeft += firstImgWidth;
  };

  const handleOnClickLeft = () => {
    let firstImgWidth = firstImg.current.clientWidth + 16;
    carouselRef.current.scrollLeft -= firstImgWidth;
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;

    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = carouselElement.scrollLeft;
    };

    const handleDragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      let positionDiff = e.pageX - prevPageX;
      carouselElement.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = (e) => {
      isDragStart = false;
    };

    carouselElement.addEventListener("mousedown", dragStart);
    carouselElement.addEventListener("mousemove", handleDragging);
    carouselElement.addEventListener("mouseup", dragStop);

    return () => {
      carouselElement.removeEventListener("mousedown", dragStart);
      carouselElement.removeEventListener("mousemove", handleDragging);
      carouselElement.removeEventListener("mouseup", dragStop);
    };
  }, []);

  return (
    <section id="featured" className={styles["featured"]}>
      <h2 className={styles["featured--h2"]}>
        PRODUCTOS <span>DESTACADOS</span>
      </h2>
      <div className={styles["wrapper"]}>
        <AiOutlineArrowLeft
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
              ref={firstImg}
              className={styles["wrapper-carousel-container--img"]}
              src={img1}
              alt="vode"
            />
          </div>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              ref={firstImg}
              className={styles["wrapper-carousel-container--img"]}
              src={img2}
              alt="vode"
            />
          </div>
          <div className={styles["wrapper-carousel-container"]}>
            <img
              ref={firstImg}
              className={styles["wrapper-carousel-container--img"]}
              src={img3}
              alt="vode"
            />
          </div>
          <div>
            <img
              ref={firstImg}
              className={styles["wrapper-carousel-container--img"]}
              src={img4}
              alt="vode"
            />
          </div>
        </div>
        <AiOutlineArrowRight
          onClick={handleOnClickRight}
          className={`${styles["wrapper--arrow-right"]} ${styles["wrapper--arrow"]}`}
        />
      </div>
    </section>
  );
};

export default Featured;
