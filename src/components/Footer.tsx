"use client";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--background-color-primary)]">
      <div className="container flex justify-between flex-col md:flex-row gap-4 py-8">
        <div className="flex flex-col gap-2">
          <span
            className="text-xl font-bold gradient-text"
            style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
          >
            Charlie.
          </span>
          <p className="text-sm text-[var(--text-color-muted)]">
            台科大資管系 · 全端開發者 · 個人接案
          </p>
          <p className="text-xs text-[var(--text-color-muted)] mt-1">
            &copy; {year} Charlie. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <p className="text-sm text-[var(--text-color-muted)]">聯繫方式</p>
          <a
            href="mailto:wulinux42@gmail.com"
            className="text-sm text-[var(--text-color-muted)] hover:text-[var(--text-color-primary)] transition-colors"
          >
            wulinux42@gmail.com
          </a>
          <div className="flex gap-4 mt-1">
            <a
              href="https://github.com/Charlie42725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-color-muted)] hover:text-[var(--text-color-primary)] transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/portfolio"
              className="text-sm text-[var(--text-color-muted)] hover:text-[var(--text-color-primary)] transition-colors"
            >
              作品集
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
