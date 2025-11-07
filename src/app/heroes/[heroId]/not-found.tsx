import Link from "next/link";

export default function NotFound() {
  return (
    <div className="content-wrapper">
      <p>404 - 找不到頁面</p>
      <Link href="/heroes">
        <button className="app-button">返回英雄列表</button>
      </Link>
    </div>
  );
}
