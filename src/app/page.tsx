import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Hero World</h1>
        <Link href="/heroes">
          <button className="app-button">前往英雄列表</button>
        </Link>
      </main>
    </div>
  );
}
