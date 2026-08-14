// Import React, CSS module for Footer Component
import React from "react";
import styles from "./Footer.module.css";
import Info2 from "./Info2";
import Parte1 from "./Parte1";
import Parte2 from "./Parte2";
import Parte3 from "./Parte3";
import Parte4 from "./Parte4";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.upperSection}>
          <div className={styles.part}>
            <Parte1 />
          </div>
          <div className={styles.part}>
            <Parte2 />
          </div>
          <div className={styles.part}>
            <Parte3 />
          </div>
          <div className={styles.part}>
            <Parte4 />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.lowerSection}>
          <Info2 />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
