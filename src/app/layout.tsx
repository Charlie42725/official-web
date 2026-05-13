import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { MouseFollower } from "@/components/effects/MouseFollower";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Space_Grotesk, DM_Sans } from "next/font/google";
export { metadata } from "./metadata";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} flex flex-col min-h-screen`}
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        <ScrollProgress />
        <MouseFollower />
        <Header />
        <main className="mt-16 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
