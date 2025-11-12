import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="content-wrapper">
      <p>404 - 找不到頁面</p>
      <Link href="/heroes">
        <Button>返回英雄列表</Button>
      </Link>
    </div>
  );
}
