import React from "react";
import Logo from "../../static/vode.jpg";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-content-box"]}>
          <img
            className={styles["footer-content-box--img"]}
            src={Logo}
            alt="vode"
          />
          <p className={styles["footer-content-box--p"]}>
            Lorem VR, 423-324 W Hastingds SE Vancouver, BC Canada
          </p>
          <p className={styles["footer-content-box--p"]}>vode@gmail.com</p>
        </div>
        <div className={styles["footer-content-box"]}>
          <h3 className={styles["footer-content-box--h3"]}>VODE</h3>
          <p className={styles["footer-content-box--p"]}> Home</p>
          <p className={styles["footer-content-box--p"]}>About</p>
          <p className={styles["footer-content-box--p"]}>Products</p>
          <p className={styles["footer-content-box--p"]}>Contact</p>
        </div>
        <div className={styles["footer-content-box"]}>
          <h3 className={styles["footer-content-box--h3"]}>SERVICES</h3>
          <p className={styles["footer-content-box--p"]}>Solutions</p>
          <p className={styles["footer-content-box--p"]}>Water</p>
          <p className={styles["footer-content-box--p"]}>Bottle</p>
        </div>
        <div className={styles["footer-content-box"]}>
          <h3 className={styles["footer-content-box--h3"]}>EVENTS</h3>
          <p className={styles["footer-content-box--p"]}>CRV</p>
          <p className={styles["footer-content-box--p"]}>Game Jams</p>
        </div>
        <div className={styles["footer-content-box"]}>
          <h3 className={styles["footer-content-box--h3"]}>FOLLOW</h3>
          <p className={styles["footer-content-box--p"]}>Instagram</p>
          <p className={styles["footer-content-box--p"]}>Twitter</p>
          <p className={styles["footer-content-box--p"]}>Facebook</p>
        </div>
      </div>
      <div className={styles["foot"]}>
        <div className={styles["foot-text"]}>
          <a className={styles["foot-text--a"]} href="/">
            Terms & Conditions
          </a>
          <a className={styles["foot-text--a"]} href="/">
            Privacity Policy
          </a>
          <a className={styles["foot-text--a"]} href="/">
            Sitemap
          </a>
        </div>
        <div className={styles["foot-copyright"]}>
          <p className={styles["foot-copyright--p"]}>
            © Copyright 2023 vode <br />
            Website by NippyWit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
