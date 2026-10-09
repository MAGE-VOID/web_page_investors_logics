import { Link } from "react-router-dom";
import Icon from "@/components/UI/Icon";
import styles from "./ProductNavigation.module.css";

export default function ProductNavigation() {
  return (
    <nav className={styles.navigation} aria-label="Explore this page">
      <div className={styles.inner}>
        <a href="#bot-overview">The bot</a>
        <a href="#license-options">Licenses</a>
        <a href="#how-it-works">Getting started</a>
        <a href="#questions">Questions</a>
        <Link className={styles.support} to="/documentation/contact">Ask the team <Icon name="arrow-up-right" /></Link>
      </div>
    </nav>
  );
}
