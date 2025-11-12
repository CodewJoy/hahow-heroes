"use client";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="content-wrapper">
      <h2>無法載入英雄資料</h2>
      <p>{error.message || "發生未知錯誤"}</p>
      <Button onClick={() => reset()}>重新嘗試</Button>
    </div>
  );
}
