import Link from "next/link";
import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Hero World</h1>
        <Link href="/heroes">
          <Button>前往英雄列表</Button>
        </Link>
      </main>
    </div>
  );
}
