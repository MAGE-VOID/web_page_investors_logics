import React from "react";
import styles from "./Section_2.module.css"; // Importar archivo CSS para estilos

const Section_2 = () => {
  return (
    <div className={styles.section_2}>
      <div className={styles.card}>
        <div className={styles.cardText}>
          <h1>The Future of Investing</h1>
          <p>
            Algorithmic trading is revolutionizing the way people invest by
            using advanced algorithms and cutting-edge technology to make
            data-driven investment decisions. With algorithmic trading, you can
            take advantage of market opportunities in real-time, minimize your
            risk, and maximize your returns.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.cardImage}>
          <img
            src="/Logos/Images/image_3.webp"
            alt="Logo"
            width={300}
            height={300}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_2;
