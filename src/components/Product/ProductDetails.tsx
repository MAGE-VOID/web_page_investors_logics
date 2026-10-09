import { Link } from "react-router-dom";
import { productFeatures } from "@/data/product";
import Icon from "@/components/UI/Icon";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  return (
    <section id="demo" className={styles.section} aria-labelledby="bot-heading">
      <div id="product-scope" className={styles.inner}>
        <header className={styles.intro}>
          <h2 id="bot-heading">One workflow.<br />From start to finish.</h2>
          <div>
            <p>Blue Boost connects three parts of your trading process through programmed rules. You bring the account. The Expert Advisor brings the method.</p>
            <Link to="/documentation/introduction" className={styles.guide}>
              Inside the Expert Advisor <Icon name="arrow-up-right" />
            </Link>
          </div>
        </header>
        <ol className={styles.process}>
          {productFeatures.map((feature, index) => (
            <li key={feature.title}>
              <span className={styles.marker} aria-hidden="true">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              {index < productFeatures.length - 1 && <Icon className={styles.direction} name="arrow-right" />}
            </li>
          ))}
        </ol>
        <div className={styles.boundary}>
          <p><strong>Your account. Your control.</strong> You choose the broker, provide the capital and monitor the platform.</p>
          <Link to="/documentation/best-brokers">Check compatibility <Icon name="arrow-up-right" /></Link>
        </div>
      </div>
    </section>
  );
}
