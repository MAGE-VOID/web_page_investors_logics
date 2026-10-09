import { Link } from "react-router-dom";
import { productQuestions } from "@/data/product";
import Icon from "@/components/UI/Icon";
import styles from "./ProductFAQ.module.css";

export default function ProductFAQ() {
  return (
    <section id="questions" className={styles.section} aria-labelledby="questions-heading">
      <div className={styles.intro}>
        <h2 id="questions-heading">Before you decide.</h2>
        <p>Straight answers about the bot, your setup and the license.</p>
        <Link className="text-link" to="/documentation/contact">Ask a different question <Icon name="arrow-up-right" /></Link>
      </div>
      <div className={styles.questions}>
        {productQuestions.map((item) => (
          <details name="product-questions" key={item.question}>
            <summary>{item.question}<span className={styles.toggle} aria-hidden="true" /></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
