import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/HeaderModule/Header";
import Sidebar from "./Sidebar";
import styles from "./DocumentationLayout.module.css";

interface DocumentationLayoutProps {
  children?: React.ReactNode;
}

export default function DocumentationLayout({ children }: DocumentationLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.center}>
        <div className={styles.mainContainer}>
          <Sidebar />
          <main className={styles.content}>{children ?? <Outlet />}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
