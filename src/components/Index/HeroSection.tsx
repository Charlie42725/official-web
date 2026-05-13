"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRightOutlined, MessageOutlined } from "@ant-design/icons";

const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&to=wulinux42%40gmail.com&su=%E6%8E%A5%E6%A1%88%E8%A9%A2%E5%95%8F";

const NAME_CHARS = "Charlie.".split("");

const techStack = [
  { name: "React",       delay: 0   },
  { name: "Next.js",     delay: 0.1 },
  { name: "Node.js",     delay: 0.2 },
  { name: "TypeScript",  delay: 0.3 },
  { name: "PostgreSQL",  delay: 0.15 },
  { name: "Supabase",    delay: 0.25 },
  { name: "Docker",      delay: 0.05 },
  { name: "LINE Bot",    delay: 0.35 },
  { name: "n8n",         delay: 0.2  },
  { name: "AI / LLM",   delay: 0.4  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export const HeroSection = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
    >
      {/* ── Animated background blobs ── */}
      {!reduced && (
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute rounded-full blur-[120px] opacity-30"
            style={{
              width: "45vw", height: "45vw",
              top: "5%", left: "-5%",
              background: "radial-gradient(circle, #4f46e5, transparent 70%)",
              animation: "blob-drift 22s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full blur-[100px] opacity-20"
            style={{
              width: "35vw", height: "35vw",
              bottom: "10%", right: "5%",
              background: "radial-gradient(circle, #7c3aed, transparent 70%)",
              animation: "blob-drift 28s ease-in-out infinite reverse",
              animationDelay: "-8s",
            }}
          />
          <div
            className="absolute rounded-full blur-[140px] opacity-15"
            style={{
              width: "30vw", height: "30vw",
              top: "40%", left: "50%",
              background: "radial-gradient(circle, #6366f1, transparent 70%)",
              animation: "blob-drift 35s ease-in-out infinite",
              animationDelay: "-15s",
            }}
          />
          {/* Scan line */}
          <div
            className="absolute left-0 right-0 h-[1px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.3), transparent)",
              animation: "scan-line 8s linear infinite",
              animationDelay: "-3s",
            }}
          />
        </div>
      )}

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="section-label">台科大資管系 · 個人接案開發者</span>
          </motion.div>

          {/* Title */}
          <div className="mb-5">
            <motion.div {...fadeUp(0.15)}>
              <span
                className="font-bold text-[var(--text-color)]"
                style={{
                  fontFamily: "var(--font-heading), system-ui, sans-serif",
                  fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Hi, I&apos;m{" "}
              </span>
            </motion.div>

            {/* Charlie. — character by character */}
            <div
              className="font-bold"
              style={{
                fontFamily: "var(--font-heading), system-ui, sans-serif",
                fontSize: "clamp(3rem, 10vw, 8rem)",
                lineHeight: 1,
              }}
            >
              {NAME_CHARS.map((char, i) => (
                <span
                  key={i}
                  className="gradient-text inline-block"
                  style={
                    reduced
                      ? {}
                      : {
                          animation: `char-in 0.5s ease forwards`,
                          animationDelay: `${0.35 + i * 0.07}s`,
                          opacity: 0,
                        }
                  }
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.9)}
            className="text-xl sm:text-2xl font-medium text-[var(--text-color-muted)] mb-5"
          >
            全端開發者&nbsp;·&nbsp;系統整合&nbsp;·&nbsp;AI 工具
          </motion.p>

          {/* Description */}
          <motion.p
            {...fadeUp(1.05)}
            className="text-base sm:text-lg text-[var(--text-color-muted)] max-w-2xl leading-relaxed mb-10"
          >
            協助品牌、店家與團隊打造可實際營運的網站、系統與 AI 工具。
            <br className="hidden sm:block" />
            不只做畫面，也包含後台、資料流程、自動化與商業系統整合。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(1.2)}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              href="/portfolio"
              className="group relative overflow-hidden btn-primary rounded-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white whitespace-nowrap"
              style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
            >
              {/* shimmer */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  animation: "shimmer-sweep 3s ease-in-out infinite",
                }}
              />
              查看作品集
              <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold whitespace-nowrap hover:border-[var(--text-color-primary)] hover:text-[var(--text-color-primary)] transition-all"
            >
              立即詢問
              <MessageOutlined />
            </a>
          </motion.div>

          {/* Tech tags — floating with staggered delays */}
          <motion.div {...fadeUp(1.35)} className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="tech-tag"
                style={
                  reduced
                    ? {}
                    : {
                        animation: `float-gentle ${2.8 + tech.delay * 4}s ease-in-out infinite`,
                        animationDelay: `${tech.delay}s`,
                      }
                }
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
