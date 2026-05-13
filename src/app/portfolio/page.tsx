"use client";

import { motion } from "framer-motion";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import { OutsideLink } from "fanyucomponents";
import { LinkOutlined, SendOutlined } from "@ant-design/icons";
import "@/styles/portfolio.css";

const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&to=wulinux42%40gmail.com&su=%E6%8E%A5%E6%A1%88%E8%A9%A2%E5%95%8F";

const T = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=800`;

const projects = [
  {
    url: "https://inventory-e39j.onrender.com/dashboard.php",
    img: "/portfolio/inventory.jpg",
    title: "進銷存管理系統",
    category: "企業系統",
    desc: "全功能進銷存系統，支援庫存管理、訂單追蹤與報表匯出。",
    tags: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
  },
  {
    url: "https://erp-website-five.vercel.app/",
    img: T("https://erp-website-five.vercel.app/"),
    title: "企業官網",
    category: "品牌官網",
    desc: "現代化企業形象網站，展示公司服務、團隊與聯絡資訊。",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    url: "https://esim-orpin.vercel.app/",
    img: T("https://esim-orpin.vercel.app/"),
    title: "eSIM 電商平台",
    category: "電商平台",
    desc: "eSIM 線上銷售平台，整合方案選購與線上結帳流程。",
    tags: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    url: "https://erp-eta-six.vercel.app/",
    img: T("https://erp-eta-six.vercel.app/"),
    title: "全端 ERP 系統",
    category: "企業系統",
    desc: "完整 ERP 平台，涵蓋人員管理、財務模組與儀表板。",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    url: "https://ai-trader-ten-rose.vercel.app/",
    img: T("https://ai-trader-ten-rose.vercel.app/"),
    title: "AI 交易分析 APP",
    category: "AI 工具",
    desc: "AI 驅動的股票 / 加密貨幣交易分析工具，提供智能建議與視覺化圖表。",
    tags: ["React", "OpenAI API", "Recharts", "Vercel"],
  },
  {
    url: "https://claw-machine-beryl.vercel.app/",
    img: T("https://claw-machine-beryl.vercel.app/"),
    title: "夾娃娃期望值計算機",
    category: "趣味工具",
    desc: "計算夾娃娃機期望值的互動工具，幫助用戶評估投入成本與預期回報。",
    tags: ["React", "Tailwind", "Vercel"],
  },
  {
    url: "https://ai-math-seven.vercel.app/",
    img: T("https://ai-math-seven.vercel.app/"),
    title: "AI 數學學習平台",
    category: "AI 工具",
    desc: "AI 輔助數學學習網站，支援題目解析、步驟說明與個人化練習。",
    tags: ["Next.js", "OpenAI API", "Tailwind"],
  },
  {
    url: "https://firework-henna.vercel.app/products",
    img: T("https://firework-henna.vercel.app/products"),
    title: "企業官網（產品頁）",
    category: "品牌官網",
    desc: "企業產品展示官網，具備完整產品目錄與品牌形象頁面設計。",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    url: "https://longmen-amber.vercel.app/",
    img: T("https://longmen-amber.vercel.app/"),
    title: "射龍門計算機",
    category: "趣味工具",
    desc: "麻將「射龍門」機率計算工具，即時計算勝率與賠率。",
    tags: ["React", "Tailwind", "Vercel"],
  },
  {
    url: "https://buyoutside.vercel.app/",
    img: T("https://buyoutside.vercel.app/"),
    title: "代購記帳軟體",
    category: "財務工具",
    desc: "專為代購業者設計的記帳系統，管理訂單、成本與利潤分析。",
    tags: ["React", "Supabase", "Tailwind"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container">
          <motion.div
            initial="hiddenBottom"
            animate="show"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.p variants={fadeInItem} className="mb-4">
              <span className="section-label">PORTFOLIO</span>
            </motion.p>
            <motion.h1
              variants={fadeInItem}
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
            >
              <span className="gradient-text">作品集</span>
            </motion.h1>
            <motion.p
              variants={fadeInItem}
              className="text-[var(--text-color-muted)] text-lg leading-relaxed"
            >
              部分實際交付的專案，涵蓋企業系統、AI 工具、電商平台與品牌官網。
              <br />
              持續更新中，歡迎聯繫了解更多。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="pt-0 pb-20">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hiddenBottom"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((item, index) => (
              <motion.article
                key={index}
                variants={fadeInItem}
                className="flex flex-col rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--background-color-tertiary)] hover:border-[rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_2rem_rgba(99,102,241,0.15)] group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--background-color-secondary)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={`${item.title} 截圖預覽`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".img-fallback")) {
                        const fb = document.createElement("div");
                        fb.className = "img-fallback absolute inset-0 flex flex-col items-center justify-center gap-2";
                        fb.style.cssText = "background:linear-gradient(135deg,#0f0f1a,#1a1a35)";
                        fb.innerHTML = `<span style="font-family:monospace;font-size:11px;color:#818cf8;letter-spacing:2px;opacity:.7">${item.category.toUpperCase()}</span><span style="font-size:13px;font-weight:600;color:#f1f1f8;padding:0 1rem;text-align:center">${item.title}</span>`;
                        parent.appendChild(fb);
                      }
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--background-color)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <OutsideLink
                      href={item.url}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-color-secondary)] text-white text-sm font-semibold hover:bg-[var(--text-color-tertiary)] transition-colors"
                      aria-label={`查看 ${item.title}`}
                    >
                      <LinkOutlined />
                      查看專案
                    </OutsideLink>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-[var(--background-color)]/80 border border-[rgba(99,102,241,0.3)] text-[var(--text-color-primary)] tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h2
                      className="text-base font-semibold text-[var(--text-color)] mb-1"
                      style={{
                        fontFamily: "var(--font-heading), system-ui, sans-serif",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-sm text-[var(--text-color-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.18)] text-[var(--text-color-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-0 pb-24">
        <div className="container">
          <motion.div
            initial="hiddenBottom"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInItem}
            className="text-center max-w-lg mx-auto"
          >
            <div className="card p-8 border-[var(--border-color-light)]/30">
              <h3
                className="text-xl font-bold text-[var(--text-color)] mb-3"
                style={{
                  fontFamily: "var(--font-heading), system-ui, sans-serif",
                }}
              >
                想討論你的專案？
              </h3>
              <p className="text-[var(--text-color-muted)] text-sm mb-6 leading-relaxed">
                上面只是部分公開作品，還有更多 NDA 專案無法展示。
                <br />
                歡迎直接聯繫，我會分享更多細節與報價。
              </p>
              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white"
              >
                <SendOutlined />
                開啟 Gmail 聯繫
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
