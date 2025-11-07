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

```
src/
 ├─ app/                       # 使用 Next.js App Router 架構
 │   ├─ heroes/                # Hero 頁面
 │   ├─ layout.tsx             # 全域版面設定
 │   └─ page.tsx               # 首頁
 ├─ components/                # 可重用元件
 ├─ context/                   # 狀態管理(React Context)
 ├─ hooks/                     # 自訂 Hooks
 ├─ constant/                  # 常數定義
 ├─ services/                  # API 服務層
 └─ types/                     # TypeScript 型別定義

```

### 核心技術與為什麼使用

| 技術                  | 版本   | 理由                                                                               |
| --------------------- | ------ | ---------------------------------------------------------------------------------- |
| **Next.js**           | 16.0.1 | 內建 Router、支援 nested layout 與 SSR。                                           |
| **React**             | 19.2.0 | 最新穩定版本。                                                                     |
| **styled-components** | 6.1.19 | CSS-in-JS 解決方案，支援動態樣式與 theme。雖然進入 Maintenance，但整體生態系穩定。 |
| **TypeScript**        | 5.9.3  | 提供靜態型別。                                                                     |

### 寫註解的原則，遇到什麼狀況會寫註解

1. 程式邏輯提醒與說明
   - 邏輯需要思考幾步才能理解
   - 有潛在陷阱、依賴順序或副作用
   - 記錄為什麼選擇這種實作方式
2. 特殊商業邏輯
   - 邏輯跟產品規則或業務需求強綁定時
   - 命名無法完全傳達業務語意

### 遇到的問題與解決方法

- 問題 1：Hero List 切換連結時重新 render - 在題目中要求 Hero List 維持在相同位置，切換 router 時不重新 render。一開始嘗試將 heroId（URL params）自上層 layout 傳遞至每個 HeroCard，導致每次切換 heroId 時整個列表 re-render。 - 原因：
  React 偵測到父層元件的 props 發生變化時，會重新執行該元件的 render 流程。由於 heroId 是從父層 props 傳入，因此每次切換 router 時都觸發整個 Hero List 被重新渲染。 - 解決方法:
  將 URL 參數 heroId 存入 context，HeroCard 直接從 context 讀取選取狀態，而非透過 props 傳遞，這樣可以父層 props 改變導致整個 List re-render 進而提升效能。
- 問題 2：Mixed Content（圖片載入錯誤）
  - 從後端拿到 Hero image 的網址是 http 開頭，但整體網頁是 https 開頭，會導致 [mixed content error](https://blog.chromium.org/2019/10/no-more-mixed-messages-about-https.html)
  - 解決方法:
    透過 Next.js 的 Image Optimization 功能，由 Next 自動代理圖片，確保圖片以安全的 HTTPS 方式載入，同時在 next.config.mjs 中設定允許的圖片來源網域。這樣即使原始網址為 http，Next 仍會以安全的 proxy 方式轉為 https 載入，避免混合內容錯誤。
    ```
    // next.config.mjs
    export default {
      images: {
        domains: ['i.annihil.us'], // 允許載入該網域的圖片
      },
    };
    ```
