import React, { useState } from "react";
import styles from "./styles.module.css";
import { BsPlayFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import VideoModal from "../VideoModel/index";
import Bottle from "../../static/portrait.png";
import Video from "../../static/video.mp4";
const Header = () => {
  const videoUrl = Video;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className={styles["h"]}>
      {/* Start Wave */}
      <div className={styles["header"]}>
        <div className={styles["bg-color"]}></div>
        <div className={`${styles["wave"]} ${styles["w1"]}`}></div>
        <div className={`${styles["wave"]} ${styles["w2"]}`}></div>
        {/* End Wave */}
        <div className={styles["header-container"]}>
          <div className={styles["left-content"]}>
            <h3>
              BIENVENIDO A <span>VODE</span>
            </h3>
            <h1>
              <span>Vode:</span> Protegiendo el Futuro, una <span>Gota</span> a
              la Vez
            </h1>
            <div className={styles["buttons"]}>
              <a href="/products" className={styles["product-button"]}>
                Productos <FiArrowRight className={styles["flecha"]} />
              </a>
              <a
                className={`${styles["boton"]} ${styles["video-button"]}`}
                onClick={handleVideoButtonClick}
              >
                <BsPlayFill className={styles["icono-video"]} />
              </a>
            </div>
          </div>
          <div className={styles["right-content"]}>
            <img
              className={styles["right-content--img"]}
              src={Bottle}
              alt="botella vode"
            />
          </div>
          {isModalOpen && (
            <VideoModal videoUrl={videoUrl} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
