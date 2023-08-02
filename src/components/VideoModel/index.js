import React from "react";
import styles from "./styles.module.css";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className={styles["video-modal-overlay"]}>
      <div className="video-modal">
        <video
          src={videoUrl}
          type="video/mp4"
          controls
          preload="metadata"
        ></video>
        <button className={styles["close-button"]} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
