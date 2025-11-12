"use client";
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className={styles.page}>
          <main className={styles.main}>
            <h1>系統錯誤</h1>
            <p>請稍後再試或聯絡管理員。</p>
            <Button onClick={reset}>重新整理</Button>
          </main>
        </div>
      </body>
    </html>
  );
}
