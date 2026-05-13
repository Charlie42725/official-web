import type { Metadata } from "next";

const title = "Charlie · 台科大資管系 個人接案";
const description =
  "台科大資管系全端開發者，協助品牌、店家與團隊打造可實際營運的網站、系統與 AI 工具。承接品牌官網、電商平台、LINE Bot、AI 工具、企業系統整合等專案。";
const url = "";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Charlie Dev",
  },
  description,
  icons: {
    icon: [{ rel: "icon", url: "/favicon.ico" }],
  },
  authors: [{ name: "Charlie", url: "https://github.com/Charlie42725" }],
  keywords: [
    "接案",
    "全端開發",
    "Next.js",
    "React",
    "台科大",
    "資管系",
    "LINE Bot",
    "AI 工具",
    "網站開發",
    "系統整合",
    "自動化",
  ],
  alternates: {
    canonical: url,
  },
};
