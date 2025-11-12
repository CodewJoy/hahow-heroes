[Demo Link](https://hahow-heroes.vercel.app/)

### 如何執行專案

```
# 1. 安裝依賴
npm install

# 2. 啟動開發伺服器
npm run dev

# 3. 於瀏覽器開啟
http://localhost:3000
```

### Environment

- Node.js: 22.13.0
- Package Manager:
  - npm 11.0.0
  - yarn 1.22.22

### 專案的資料夾架構與設計理念

- 打 API 邏輯放在 Server Component：
  由伺服端先行取得資料，能更快顯示有意義的內容，但總載入時間可能更長。另外可降低 JS bundle 體積，並集中錯誤處理（透過 notFound() 與全域 error.tsx）。

- heroes 頁面包含使用者互動邏輯（例如事件處理與狀態管理）：
  因此該部分採用 Client Component，以支援動態互動與 Context 狀態共享。

```
src/
 ├─ app/                       # 使用 Next.js App Router 架構
 │   ├─ heroes/                # Hero 頁面
 │   ├─ layout.tsx             # 全域版面配置，含 styled-components Registry (避免 SSR 閃爍)
 │   └─ page.tsx               # 首頁
 ├─ components/                # 可重用元件
 ├─ context/                   # 全域狀態管理 (React Context, 僅在 Client Side 使用)
 ├─ lib/                       # 工具函式或框架整合，如 styled-components registry
 ├─ constant/                  # 常數定義
 ├─ services/                  # API 服務層
 └─ types/                     # TypeScript 型別定義

```

### 核心技術與為什麼使用

| 技術                  | 版本   | 理由                                                        |
| --------------------- | ------ | ----------------------------------------------------------- |
| **Next.js**           | 16.0.1 | 內建 Router、支援 nested layout 與 SSR。                    |
| **React**             | 19.2.0 | 最新穩定版本。                                              |
| **styled-components** | 6.1.19 | CSS-in-JS 解決方案，雖進入 Maintenance mode，整體生態系穩定 |
| **TypeScript**        | 5.9.3  | 提供靜態型別。                                              |
| **axios**             | 1.13.2 | 最新穩定版本。支援自動轉 JSON，設定 timeout，統一錯誤處理。 |

### 寫註解的原則，遇到什麼狀況會寫註解

1. 程式邏輯提醒與說明
2. 特殊商業邏輯

### 遇到的問題與解決方法

問題 1: 切換 Hero 連結時避免整個列表 re-render

- 原因：最初將 heroId 由父層 props 傳入，導致 Router 切換時父層 props 改變，觸發整個 List 重繪。
- 解法：改用 Context 儲存 heroId，子元件直接讀取選取狀態，避免 props 傳遞造成的 re-render。

問題 2：圖片 Mixed Content 錯誤

- 原因：後端圖片 URL 為 HTTP，造成 HTTPS 網頁有 Mixed Content 錯誤。
- 解法：透過 Next.js Image Optimization 代理圖片，並於 next.config.mjs 設定允許來源網域，統一以 HTTPS 載入，避免混合內容問題。

### 加分項目

- 使用 CSS-in-JS library: styled-components
- 使用 claude.ai 和 ChatGPT 產 boilerplate，debug 與 程式優化
