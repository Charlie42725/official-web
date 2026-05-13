"use client";

import { motion } from "framer-motion";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import { Title } from "../custom/Title";
import {
  LaptopOutlined,
  DatabaseOutlined,
  RobotOutlined,
  ThunderboltOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const services = [
  {
    icon: LaptopOutlined,
    title: "網站與平台開發",
    titleEn: "Web & Platform",
    description: "從形象網站到完整平台，打造符合商業目標的數位入口",
    items: [
      "品牌官網 / 形象網站",
      "Landing Page 一頁式",
      "會員 / 預約系統",
      "內容型網站 / CMS 後台",
      "客製化平台開發",
    ],
  },
  {
    icon: DatabaseOutlined,
    title: "企業與商業系統",
    titleEn: "Enterprise System",
    description: "ERP、CRM、金流串接，讓業務流程全面數位化",
    items: [
      "ERP / CRM 系統",
      "進銷存 / 訂單管理",
      "管理後台 / 儀表板",
      "藍新 / 綠界 / Stripe",
      "第三方 API 串接",
    ],
  },
  {
    icon: RobotOutlined,
    title: "LINE 與自動化",
    titleEn: "LINE & Automation",
    description: "機器人客服到自動化流程，省時省力提升效率",
    items: [
      "LINE Bot（客服 / 點餐 / 集點）",
      "n8n / Make 自動化流程",
      "表單與通知自動化",
      "企業流程整合",
    ],
  },
  {
    icon: ThunderboltOutlined,
    title: "AI 工具開發",
    titleEn: "AI Tools",
    description: "為企業打造 AI 問答、分析與生成工具，提升生產力",
    items: [
      "AI 客服 / 問答系統",
      "AI 資料分析工具",
      "AI 內容生成工具",
      "企業內部 AI 助理",
      "AI 工作流程整合",
    ],
    hot: true,
  },
  {
    icon: BarChartOutlined,
    title: "數據分析",
    titleEn: "Data & Analytics",
    description: "數據整理、視覺化呈現，讓決策有充分依據",
    items: [
      "Dashboard 儀表板",
      "營運數據視覺化",
      "報表自動化",
      "Google Sheets / DB 整合",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
        >
          <p className="section-label mb-4">01 // SERVICES</p>
          <Title>服務項目</Title>
          <p className="text-[var(--text-color-muted)] text-lg max-w-xl mx-auto mt-2">
            從單頁網站到完整商業系統，提供一站式全端開發
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInItem}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                className="relative group"
              >
                <div className="card p-5 h-full flex flex-col gap-4 overflow-hidden transition-all duration-300 group-hover:border-[var(--text-color-primary)]/50 group-hover:shadow-[0_0_2rem_rgba(99,102,241,0.15)]">
                  {service.hot && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <motion.span
                        animate={{ boxShadow: ["0 0 8px #6366f1", "0 0 20px #a78bfa", "0 0 8px #6366f1"] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="block bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider"
                      >
                        HOT
                      </motion.span>
                    </div>
                  )}

                  {/* Shimmer sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(129,140,248,0.06) 50%, transparent 60%)",
                      animation: "shimmer-sweep 1.8s ease-in-out infinite",
                    }}
                  />

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 12 }}
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-color-primary)] flex-shrink-0 transition-all duration-300"
                      style={{
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.22)",
                        boxShadow: "0 0 0 rgba(99,102,241,0)",
                      }}
                    >
                      <Icon />
                    </motion.div>
                    <div>
                      <p className="text-[10px] font-mono text-[var(--text-color-muted)] tracking-widest uppercase">
                        {service.titleEn}
                      </p>
                      <h3
                        className="text-base font-semibold text-[var(--text-color)] leading-snug"
                        style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="h-px bg-[var(--border-color)]" />

                  <ul className="space-y-1.5 flex-1">
                    {service.items.map((item, ii) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ii * 0.06 }}
                        className="flex items-center gap-2 text-sm text-[var(--text-color-muted)]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--text-color-primary)]/60 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
