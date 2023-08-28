import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import Img from "../../static/botella_1.webp";
import img1 from "../../static/bidonjpg.webp";
import img2 from "../../static/botella_2.webp";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Featured = () => {
  const carouselRef = useRef(null);
  const firstImg = useRef(null);

  let isDragStart = false;
  let prevPageX = 0;
  let prevScrollLeft = 0;

  const handleOnClickRight = () => {
    let firstImgWidth = firstImg.current.clientWidth + 30;
    carouselRef.current.scrollLeft += firstImgWidth;
    console.log(firstImg.current.clientWidth);
  };

  const handleOnClickLeft = () => {
    let firstImgWidth = firstImg.current.clientWidth + 15;
    carouselRef.current.scrollLeft -= firstImgWidth;
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;

    const dragStart = (e) => {
      if (e.pageX) {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carouselElement.scrollLeft;
      } else {
        isDragStart = true;
        prevPageX = e.touches[0].clientX;
        prevScrollLeft = carouselElement.scrollLeft;
      }
    };

    const handleDragging = (e) => {
      if (e.pageX) {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carouselElement.scrollLeft = prevScrollLeft - positionDiff;
      } else {
        let positionDiff = e.touches[0].clientX - prevPageX;
        carouselElement.scrollLeft = prevScrollLeft - positionDiff;
      }
    };

    const dragStop = (e) => {
      isDragStart = false;
    };

    carouselElement.addEventListener("mousedown", dragStart);
    carouselElement.addEventListener("mousemove", handleDragging);
    carouselElement.addEventListener("mouseup", dragStop);

    carouselElement.addEventListener("touchdown", dragStart);
    carouselElement.addEventListener("touchmove", handleDragging);
    carouselElement.addEventListener("touchup", dragStop);

    return () => {
      carouselElement.removeEventListener("mousedown", dragStart);
      carouselElement.removeEventListener("mousemove", handleDragging);
      carouselElement.removeEventListener("mouseup", dragStop);

      carouselElement.removeEventListener("touchdown", dragStart);
      carouselElement.removeEventListener("touchmove", handleDragging);
      carouselElement.removeEventListener("touchup", dragStop);
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
