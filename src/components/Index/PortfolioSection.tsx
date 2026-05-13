"use client";

import "@/styles/portfolio.css";
import { OutsideLink } from "fanyucomponents";
import { Title } from "../custom/Title";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import Link from "next/link";
import { ArrowRightOutlined, LinkOutlined } from "@ant-design/icons";
import { useRef } from "react";

const T = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=800`;

const preview = [
  {
    url: "https://inventory-e39j.onrender.com/dashboard.php",
    img: "/portfolio/inventory.jpg",
    title: "進銷存管理系統",
    category: "企業系統",
    tags: ["PHP", "MySQL", "Chart.js"],
  },
  {
    url: "https://erp-website-five.vercel.app/",
    img: T("https://erp-website-five.vercel.app/"),
    title: "企業官網",
    category: "品牌官網",
    tags: ["Next.js", "Tailwind"],
  },
  {
    url: "https://erp-eta-six.vercel.app/",
    img: "/portfolio/全端ERP.png",
    title: "全端 ERP 系統",
    category: "企業系統",
    tags: ["React", "Node.js", "PostgreSQL"],
    objectPosition: "75% top",
  },
  {
    url: "https://ai-trader-ten-rose.vercel.app/",
    img: T("https://ai-trader-ten-rose.vercel.app/"),
    title: "AI 交易分析 APP",
    category: "AI 工具",
    tags: ["React", "OpenAI API"],
  },
  {
    url: "https://ai-math-seven.vercel.app/",
    img: "/portfolio/AI math.png",
    title: "AI 數學學習平台",
    category: "AI 工具",
    tags: ["Next.js", "OpenAI API"],
  },
  {
    url: "https://esim-orpin.vercel.app/",
    img: T("https://esim-orpin.vercel.app/"),
    title: "eSIM 電商平台",
    category: "電商平台",
    tags: ["Next.js", "Supabase"],
  },
];

/* ── 3-D Tilt Wrapper ── */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [9, -9]);

  if (reduced) return <div>{children}</div>;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
    >
      {children}
    </motion.div>
  );
};

export const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
        >
          <p className="section-label mb-4">02 // PORTFOLIO</p>
          <Title>作品集</Title>
          <p className="text-[var(--text-color-muted)] text-lg max-w-xl mx-auto mt-2">
            部分實際交付的專案，涵蓋企業系統、AI 工具與品牌官網
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {preview.map((item, index) => (
            <motion.div key={index} variants={fadeInItem}>
              <TiltCard>
                <article className="flex flex-col rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--background-color-tertiary)] hover:border-[rgba(99,102,241,0.45)] transition-all duration-300 hover:shadow-[0_0_2.5rem_rgba(99,102,241,0.18)] group">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--background-color-secondary)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={`${item.title} 預覽`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: item.objectPosition ?? "center top" }}
                      loading="lazy"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.style.display = "none";
                        const p = t.parentElement;
                        if (p && !p.querySelector(".img-fallback")) {
                          const fb = document.createElement("div");
                          fb.className = "img-fallback absolute inset-0 flex flex-col items-center justify-center gap-2";
                          fb.style.cssText = "background:linear-gradient(135deg,#0f0f1a,#1a1a35)";
                          fb.innerHTML = `<span style="font-family:monospace;font-size:10px;color:#818cf8;letter-spacing:2px;opacity:.7">${item.category.toUpperCase()}</span><span style="font-size:12px;font-weight:600;color:#f1f1f8;padding:0 1rem;text-align:center">${item.title}</span>`;
                          p.appendChild(fb);
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
                    {/* Category */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-[var(--background-color)]/80 border border-[rgba(99,102,241,0.3)] text-[var(--text-color-primary)] tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-4 py-3 flex items-center justify-between">
                    <span
                      className="text-sm font-semibold text-[var(--text-color)]"
                      style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
                    >
                      {item.title}
                    </span>
                    <div className="flex gap-1">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.18)] text-[var(--text-color-primary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
          className="text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#pricing"
            className="btn-primary rounded-full inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white"
            style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
          >
            查看報價方案
            <ArrowRightOutlined />
          </Link>
          <Link
            href="/portfolio"
            className="btn rounded-full inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold hover:border-[var(--text-color-primary)] hover:text-[var(--text-color-primary)] transition-all"
          >
            看更多作品
            <ArrowRightOutlined />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
