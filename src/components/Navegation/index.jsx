import React from "react";
import styles from "./styles.module.css";
import Logo from "../../static/vode.jpg";
const index = () => {
  const handleOnClickHamburger = () => {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav-ul");
    hamburger.classList.toggle("toggleBurger");
    nav.classList.toggle("toggleNav");
  };
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-logo"]}>
        <img className={styles["nav-logo--img"]} src={Logo} alt="vode" />
      </div>

      <ul className={styles["nav-ul"]} id="nav-ul">
        <li className={styles["nav-ul-li"]}>
          <a className={`${styles["nav-ul-li--a"]} color--active`} href="">
            Home
          </a>
        </li>
        <li className={styles["nav-ul-li"]}>
          <a className={styles["nav-ul-li--a"]} href="">
            Services
          </a>
        </li>
        <li className={styles["nav-ul-li"]}>
          <a className={styles["nav-ul-li--a"]} href="">
            About us
          </a>
        </li>
        <li className={styles["nav-ul-li"]}>
          <a className={styles["nav-ul-li--a"]} href="">
            Contact us
          </a>
        </li>
        <div className={styles["nav-btns"]}>
          <a className="btn-primary" href="">
            Sing in
          </a>
          <a className="btn-transparent" href="">
            Sing up
          </a>
        </div>
      </ul>

      <div
        className={styles["hamburger"]}
        id="hamburger"
        onClick={handleOnClickHamburger}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default index;
