import Link from "next/link";
import styles from "./page.module.css";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>404 - 找不到頁面</h1>
        <p>這個頁面不存在或已被移除。</p>
        <Link href="/">
          <Button>回首頁</Button>
        </Link>
      </main>
    </div>
  );
}
