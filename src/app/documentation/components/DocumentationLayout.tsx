import type { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Icon from "@/components/UI/Icon";
import PageBreadcrumb from "./Content/PageBreadcrumb";
import Sidebar from "./Sidebar";
import styles from "./DocumentationLayout.module.css";

interface DocumentationLayoutProps {
  children?: ReactNode;
}

export default function DocumentationLayout({ children }: DocumentationLayoutProps) {
  return (
    <Layout>
      <div className={styles.center}>
        <div className={styles.referenceHeader}>
          <Link to="/documentation" className={styles.referenceTitle}>Blue Boost Handbook</Link>
          <Link className={styles.referenceAction} to="/documentation/contact">Ask a question <Icon name="arrow-up-right" /></Link>
        </div>
        <div className={styles.mainContainer}>
          <Sidebar />
          <div className={styles.content}>
            <div className={styles.breadcrumb}><PageBreadcrumb /></div>
            <article className={styles.article}>
              {children ?? <Outlet />}
            </article>
            <nav className={styles.articleFooter} aria-label="More help">
              <Link to="/documentation">All guides</Link>
              <Link to="/documentation/contact">Need a hand? Contact support <Icon name="arrow-up-right" /></Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}
