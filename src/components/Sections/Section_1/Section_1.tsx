import { useState, useEffect } from "react";
import styles from "./Section_1.module.css";
import App from "../Section_1/Carousel.jsx";

const Section_1 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.bg}>
      <div
        className={styles.section_1}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1.5s ease" }}
      >
        {loaded && <App />}
      </div>
    </div>
  );
};

export default Section_1;
