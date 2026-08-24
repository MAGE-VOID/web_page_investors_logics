import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <Layout>
      <article className={styles.page}>
        <h1>This page is outside the product map.</h1>
        <p className={styles.body}>
          The address may have changed or the page may no longer be available.
          Return to the product overview or browse the public reference.
        </p>
        <div className={styles.actions}>
          <Link to="/">Return to overview <span aria-hidden="true">↗</span></Link>
          <Link to="/documentation">Browse documentation <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
    </Layout>
  );
}
