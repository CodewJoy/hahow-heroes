import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Hero World</h1>
        <Link href="/heroes">前往英雄列表</Link>
      </main>
    </div>
  );
}
