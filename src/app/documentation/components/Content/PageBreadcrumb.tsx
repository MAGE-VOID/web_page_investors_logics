import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./PageBreadcrumb.module.css";

function transformSlugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const labels: Record<string, string> = {
  introduction: "Product introduction",
  "table-of-contents": "Product & platform",
  infrastructure: "Operations & safety",
  "assistance-and-policies": "Support & policies",
  "best-brokers": "Broker checklist",
};

export default function PageBreadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean).slice(1);

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {segments.length ? <Link to="/documentation">Guides</Link> : <span aria-current="page">All guides</span>}
      {segments.map((segment, index) => (
        <Fragment key={`${segment}-${index}`}>
          <span className={styles.separator} aria-hidden="true">/</span>
          <span className={styles.current} aria-current={index === segments.length - 1 ? "page" : undefined}>{labels[segment] ?? transformSlugToTitle(segment)}</span>
        </Fragment>
      ))}
    </nav>
  );
}
