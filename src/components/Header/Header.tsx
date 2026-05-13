"use client";
import Link from "next/link";
import { useState } from "react";
import { Collapse } from "fanyucomponents";
import { routes } from "./routes";
import { BurgerMenu } from "./BurgerMenu";

const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&to=wulinux42%40gmail.com&su=%E6%8E%A5%E6%A1%88%E8%A9%A2%E5%95%8F";

export const Header = () => {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-[1080] w-full bg-[var(--background-color)]/85 backdrop-blur-xl border-b border-[var(--border-color)]">
      <nav className="flex flex-col" role="navigation" aria-label="主導航">
        <div className="container flex items-center justify-between flex-nowrap w-full py-3">
          <Link
            href="/"
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity shrink-0"
            style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
          >
            Charlie<span className="text-[var(--text-color-muted)]">.</span>
          </Link>

          <div className="text-2xl lg:hidden">
            <BurgerMenu
              checked={menuShow}
              onChange={() => setMenuShow((prev) => !prev)}
              aria-label={menuShow ? "關閉選單" : "開啟選單"}
              aria-expanded={menuShow}
              aria-controls="mobile-nav"
            />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {routes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--text-color-muted)] hover:text-[var(--text-color)] transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full px-5 py-2 text-sm font-semibold text-white whitespace-nowrap"
            >
              立即詢問
            </a>
          </div>
        </div>

        <Collapse
          state={menuShow}
          className="slide-collapse lg:hidden"
          id="mobile-nav"
        >
          <div className="flex flex-col w-full border-t border-[var(--border-color)]">
            {routes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 text-center text-sm font-medium text-[var(--text-color-muted)] hover:text-[var(--text-color)] hover:bg-[var(--background-color-primary)] transition-colors"
                onClick={() => setMenuShow(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="p-4">
              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full flex items-center justify-center px-6 py-3 text-sm font-semibold text-white w-full"
                onClick={() => setMenuShow(false)}
              >
                立即詢問
              </a>
            </div>
          </div>
        </Collapse>
      </nav>
    </header>
  );
};
