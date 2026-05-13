"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import { Title } from "../custom/Title";
import { CheckOutlined, SendOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&to=wulinux42%40gmail.com&su=%E6%8E%A5%E6%A1%88%E8%A9%A2%E5%95%8F";

/* ── Count-up hook ── */
const useCountUp = (target: number, active: boolean, duration = 1400) => {
  const [val, setVal] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!active || reduced) { setVal(target); return; }
    let start = 0;
    const step = 16;
    const inc = target / (duration / step);
    const id = setInterval(() => {
      start += inc;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(Math.floor(start));
    }, step);
    return () => clearInterval(id);
  }, [active, target, duration, reduced]);
  return val;
};

/* ── Price display with count-up ── */
const AnimatedPrice = ({ raw }: { raw: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const num = parseInt(raw.replace(/,/g, ""), 10);
  const val = useCountUp(num, inView);
  return <span ref={ref}>{val.toLocaleString()}</span>;
};

const packages = [
  {
    id: "starter",
    name: "靜態方案",
    nameEn: "Starter",
    desc: "適合品牌形象、活動推廣、個人展示",
    price: "6,000",
    timeline: "5 – 14 天",
    features: [
      "Landing Page / 一頁式網站",
      "品牌形象官網（多頁）",
      "RWD 響應式設計",
      "基礎 SEO 優化",
      "部署上線",
    ],
    popular: false,
  },
  {
    id: "pro",
    name: "功能型方案",
    nameEn: "Pro",
    desc: "適合需要系統、金流、自動化的商業應用",
    price: "18,000",
    timeline: "2 – 6 週",
    features: [
      "會員 / 預約 / 點餐系統",
      "金流串接（綠界 / 藍新 / Stripe）",
      "LINE Bot 開發",
      "管理後台",
      "n8n 自動化流程",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "商業系統",
    nameEn: "Enterprise",
    desc: "適合企業完整平台、AI 工具、複雜系統整合",
    price: "30,000",
    timeline: "4 – 12 週",
    features: [
      "電商平台完整建置",
      "ERP / CRM 系統開發",
      "AI 工具整合",
      "數據分析 Dashboard",
      "長期維護 & 技術支援",
    ],
    popular: false,
  },
];

const priceList = [
  { name: "Landing Page",         price: "6,000 – 12,000",  timeline: "5–14 天" },
  { name: "品牌官網（多頁）",      price: "12,000 – 25,000", timeline: "2–4 週"  },
  { name: "會員 / 預約系統",      price: "18,000 – 35,000", timeline: "3–6 週"  },
  { name: "LINE Bot",              price: "8,000 – 18,000",  timeline: "1–3 週"  },
  { name: "AI 問答 / 客服工具",   price: "18,000 – 45,000", timeline: "2–5 週"  },
  { name: "電商平台",              price: "25,000 – 50,000", timeline: "4–8 週"  },
  { name: "ERP / CRM 系統",       price: "35,000 起",        timeline: "6–12 週" },
  { name: "自動化流程（n8n/Make）", price: "8,000 – 20,000", timeline: "1–3 週"  },
];

export const PricingSection = () => {
  const openGmail = (pkgName?: string) => {
    const sub = encodeURIComponent(pkgName ? `接案詢問：${pkgName}` : "接案詢問");
    window.open(
      `https://mail.google.com/mail/?view=cm&to=wulinux42%40gmail.com&su=${sub}`,
      "_blank"
    );
  };

  return (
    <section id="pricing">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
        >
          <p className="section-label mb-4">03 // PRICING</p>
          <Title>報價方案</Title>
          <p className="text-[var(--text-color-muted)] text-lg max-w-xl mx-auto mt-2">
            學生開的價，做得到市場水準。依需求討論，沒有隱藏費用。
          </p>
        </motion.div>

        {/* Package Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeInItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
                pkg.popular
                  ? "rotating-border"
                  : "border border-[var(--border-color)] bg-[var(--background-color-tertiary)] hover:border-[var(--border-color-light)]"
              }`}
              style={pkg.popular ? { background: "var(--background-color-primary)" } : {}}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <motion.span
                    animate={{ boxShadow: ["0 0 10px #6366f1", "0 0 25px #a78bfa", "0 0 10px #6366f1"] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="block bg-gradient-to-r from-[var(--text-color-secondary)] to-[var(--text-color-tertiary)] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                  >
                    最多人選擇
                  </motion.span>
                </div>
              )}

              <p className="text-[10px] font-mono text-[var(--text-color-muted)] mb-1 tracking-widest uppercase">
                {pkg.nameEn}
              </p>
              <h3
                className="text-xl font-bold text-[var(--text-color)] mb-1"
                style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
              >
                {pkg.name}
              </h3>
              <p className="text-sm text-[var(--text-color-muted)] mb-6 leading-relaxed">
                {pkg.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-[var(--text-color-muted)] font-mono">NT$</span>
                  <span
                    className={`text-3xl font-bold font-mono ${
                      pkg.popular ? "gradient-text" : "text-[var(--text-color)]"
                    }`}
                  >
                    <AnimatedPrice raw={pkg.price} />
                  </span>
                  <span className="text-sm text-[var(--text-color-muted)]">起</span>
                </div>
                <p className="text-xs text-[var(--text-color-muted)] font-mono mt-1">
                  ⏱ {pkg.timeline}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.07 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckOutlined
                      className={`mt-0.5 shrink-0 ${
                        pkg.popular ? "text-[var(--text-color-primary)]" : "text-[var(--text-color-muted)]"
                      }`}
                    />
                    <span className="text-[var(--text-color-muted)]">{f}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={() => openGmail(pkg.name)}
                className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  pkg.popular
                    ? "btn-primary text-white"
                    : "btn border border-[var(--border-color-light)] hover:border-[var(--text-color-primary)] hover:text-[var(--text-color-primary)]"
                }`}
              >
                詢問此方案
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Price Reference Table */}
        <motion.div
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInItem}
          className="mb-14"
        >
          <div className="card overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center gap-2">
              <span className="text-xs font-mono text-[var(--text-color-muted)] tracking-widest">
                PRICE_REFERENCE.md
              </span>
              <div className="flex gap-1.5 ml-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
            </div>
            <div className="divide-y divide-[var(--border-color)]">
              {priceList.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, ease: "easeOut" }}
                  className="flex items-center justify-between px-4 sm:px-6 py-3 hover:bg-[var(--background-color-primary)] transition-colors group"
                >
                  <span className="text-sm text-[var(--text-color)] font-medium group-hover:text-[var(--text-color-primary)] transition-colors shrink-0 mr-2">
                    {item.name}
                  </span>
                  <div className="flex flex-col items-end sm:flex-row sm:items-center sm:gap-6">
                    <span className="text-sm font-mono text-[var(--text-color-primary)] leading-tight">
                      NT$ {item.price}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-[var(--text-color-muted)] sm:w-16 sm:text-right leading-tight">
                      {item.timeline}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-[var(--border-color)]">
              <p className="text-xs text-[var(--text-color-muted)]">
                * 以上為參考報價，實際費用依需求複雜度調整。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-[var(--border-color-light)]/40 bg-[var(--background-color-primary)] max-w-xl w-full"
          >
            <h3
              className="text-xl font-bold text-[var(--text-color)]"
              style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
            >
              有需求？直接開聊
            </h3>
            <p className="text-[var(--text-color-muted)] text-sm leading-relaxed max-w-sm">
              說說你的想法就好，我來評估可行性、功能範圍與報價。
              通常 24 小時內回覆。
            </p>
            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full flex items-center gap-2 px-8 py-4 text-base font-semibold text-white"
              style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
            >
              <SendOutlined />
              開啟 Gmail 聯繫
            </a>
            <p className="text-xs text-[var(--text-color-muted)] font-mono">
              wulinux42@gmail.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
