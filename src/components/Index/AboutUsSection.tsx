"use client";

import { motion } from "framer-motion";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import { Title } from "../custom/Title";

const experience = [
  "品牌官網 / Landing Page",
  "電商平台 / CRM / ERP 系統",
  "LINE 點餐與預約系統",
  "AI 問答平台 / 教學系統",
  "數據分析與營運儀表板",
  "自動化通知與資料流程系統",
];

const steps = [
  {
    step: "01",
    title: "討論需求與目標",
    desc: "了解您的商業目標、使用者需求與預算，確認專案方向。",
  },
  {
    step: "02",
    title: "功能規劃與報價",
    desc: "提供詳細的功能清單、時程規劃與透明報價，無隱藏費用。",
  },
  {
    step: "03",
    title: "確認後開始開發",
    desc: "支付訂金後正式啟動，開發期間可持續追蹤進度。",
  },
  {
    step: "04",
    title: "交付與長期維護",
    desc: "完成後提供原始碼與文件，可選擇長期技術支援。",
  },
];

export const AboutUsSection = () => {
  return (
    <section id="aboutUs">
      <div className="container mb-12">
        <motion.div
          className="text-center mb-16"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
        >
          <Title>關於我</Title>
          <p className="text-[var(--text-color-muted)] text-lg max-w-2xl mx-auto mt-2">
            一個人、全端能力、完整交付
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20"
        >
          {/* 左側 - 個人介紹 */}
          <motion.div variants={fadeInItem} className="space-y-6">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] leading-snug"
              style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
            >
              打造可實際落地的
              <span className="gradient-text"> 數位解決方案</span>
            </h2>
            <p className="text-[var(--text-color-muted)] text-lg leading-relaxed">
              就讀台科大資管系，具備完整的全端開發能力。主要協助品牌、店家與團隊從需求分析到上線交付，包含前後端、資料庫、API 串接與自動化流程。
            </p>
            <p className="text-[var(--text-color-muted)] text-lg leading-relaxed">
              可單次合作，也可長期維護與技術支援。合作流程透明，報價清楚，讓您安心開發。
            </p>

            <div>
              <p className="text-sm font-semibold text-[var(--text-color-primary)] mb-3 tracking-wide uppercase">
                過去開發與接觸項目
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.map((item) => (
                  <span key={item} className="service-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 右側 - 合作流程 */}
          <motion.div variants={fadeInItem}>
            <p className="text-sm font-semibold text-[var(--text-color-primary)] mb-6 tracking-wide uppercase">
              合作流程
            </p>
            <div className="space-y-4">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="card p-5 flex items-start gap-4"
                >
                  <div className="step-number">{s.step}</div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-color)] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[var(--text-color-muted)] text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
