/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // 啟用 styled-components SSR 支援
  },
  images: {
    domains: ["i.annihil.us"], // 允許該網域的圖片載入
  },
};

export default nextConfig;
