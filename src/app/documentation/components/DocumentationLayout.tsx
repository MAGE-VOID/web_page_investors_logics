import type { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
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
          <div>
            <p>BLUE BOOST BOT <span>/</span> PUBLIC GUIDE</p>
            <strong>Product documentation</strong>
          </div>
          <div className={styles.referenceMeta}>
            <p>Simple answers for the product, MT5 setup and access request.</p>
            <Link to="/products">View the bot <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <Sidebar />
          <div className={styles.content}>
            <div className={styles.article}>
              <PageBreadcrumb />
              {children ?? <Outlet />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
