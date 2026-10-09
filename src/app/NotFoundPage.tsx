import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Icon from "@/components/UI/Icon";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <Layout>
      <article className={styles.page}>
        <div className={styles.message}>
          <div>
            <h1>Let’s get you<br />back on course.</h1>
            <p className={styles.body}>We couldn’t find this page. The address may have changed, but the product and its guides are right here.</p>
          </div>
          <p className={styles.code} aria-label="Error 404">404</p>
        </div>
        <nav className={styles.recovery} aria-label="Find your way back">
          <div className={styles.actions}>
            <Link className="button button-primary" to="/">Back to Blue Boost Bot <Icon name="arrow-right" /></Link>
            <Link className="button button-secondary" to="/products">Explore licenses</Link>
          </div>
          <Link className={styles.help} to="/documentation">Find a guide <Icon name="arrow-up-right" /></Link>
        </nav>
      </article>
    </Layout>
  );
}
