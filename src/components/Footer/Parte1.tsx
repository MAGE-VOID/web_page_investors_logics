import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Info1 from "./Info1";

function Parte1() {
  return (
    <div>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="/Logos/Logo_white90.png"
            alt="Logo"
            width={300}
            height={300}
            loading="eager"
            fetchPriority="high"
          />
        </Link>
      </div>
      <div className="w-4/5">
        <Info1 />
      </div>
    </div>
  );
}

export default Parte1;
