"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>404 - 找不到頁面</h1>
        <p>這個頁面不存在或已被移除。</p>
        <Link href="/">
          <button className="app-button">回首頁</button>
        </Link>
      </main>
    </div>
  );
}
