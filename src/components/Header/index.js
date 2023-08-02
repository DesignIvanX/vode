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
    <header className={styles["header-container"]}>
      <div className={styles["left-content"]}>
        <h3>
          WELCOME TO <span>VODE</span>
        </h3>
        <h1>
          Highest Quality Water <span>Services</span> 24 Hours.
        </h1>
        <div className={styles["buttons"]}>
          <a className={styles["product-button"]}>
            Our Products <FiArrowRight className={styles["flecha"]} />
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
    </header>
  );
};

export default Header;
