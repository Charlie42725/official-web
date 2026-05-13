"use client";

import { fadeInItem, staggerContainer } from "@/libs/motion";
import { cn } from "@/utils/className";
import { MailOutlined, SendOutlined, GithubOutlined } from "@ant-design/icons";
import { OutsideLink } from "fanyucomponents";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Title } from "../custom/Title";

const email = "wulinux42@gmail.com";

const contactInfo = [
  {
    icon: MailOutlined,
    label: "Email",
    value: email,
    link: `mailto:${email}`,
    description: "直接寄信，通常 24 小時內回覆",
  },
  {
    icon: GithubOutlined,
    label: "GitHub",
    value: "Charlie42725",
    link: "https://github.com/Charlie42725",
    description: "查看部分開源專案",
  },
];

type FormField = "name" | "email" | "message";

const formFields: Array<{
  name: FormField;
  label: string;
  placeholder: string;
  required?: boolean;
  tag: "input" | "textarea";
  className?: string;
}> = [
  {
    name: "name",
    label: "您的姓名",
    placeholder: "請輸入您的名字",
    required: true,
    tag: "input",
    className: "text-base",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "請輸入您的 Email",
    required: true,
    tag: "input",
    className: "text-base",
  },
  {
    name: "message",
    label: "需求說明",
    placeholder: "請簡單描述您的專案需求、預算範圍或想討論的內容...",
    required: true,
    tag: "textarea",
    className: "text-base",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState<Record<FormField, string>>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent(`接案詢問：${formData.name}`);
      const body = encodeURIComponent(
        `姓名：${formData.name}\nEmail：${formData.email}\n\n需求說明：\n${formData.message}`
      );
      window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    },
    [formData]
  );

  return (
    <section id="contact">
      <div className="container mb-12">
        <motion.div
          variants={fadeInItem}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <Title>聯繫合作</Title>
          <p className="text-lg text-[var(--text-color-muted)] mt-2 max-w-2xl mx-auto">
            有需求歡迎直接聯繫，說說您的想法，我們來討論可行方案。
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16"
        >
          {/* 左側 - 聯繫資訊 */}
          <motion.div variants={fadeInItem} className="space-y-8">
            <div>
              <h2
                className="text-2xl font-bold text-[var(--text-color)] mb-4"
                style={{
                  fontFamily: "var(--font-heading), system-ui, sans-serif",
                }}
              >
                開始一次合作
              </h2>
              <p className="text-[var(--text-color-muted)] text-base leading-relaxed">
                可單次合作，也可長期維護與技術支援。不論是全新專案、既有系統優化，或只是想聊聊技術可行性，都歡迎聯繫。
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="card flex items-center gap-4 p-4 cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--text-color-secondary)] to-[var(--text-color-tertiary)] flex items-center justify-center text-white flex-shrink-0">
                      <IconComponent className="text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[var(--text-color)] text-sm">
                        {contact.label}
                      </p>
                      <OutsideLink
                        href={contact.link}
                        className="text-[var(--text-color-primary)] hover:opacity-80 transition-opacity text-sm font-medium truncate block"
                      >
                        {contact.value}
                      </OutsideLink>
                      <p className="text-xs text-[var(--text-color-muted)] mt-0.5">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="card p-5 border-[var(--border-color-light)]/30">
              <p className="text-sm font-semibold text-[var(--text-color-primary)] mb-2">
                技術方向
              </p>
              <p className="text-xs text-[var(--text-color-muted)] leading-relaxed">
                Frontend：React / Next.js / Tailwind
                <br />
                Backend：Node.js / PHP / Supabase / PostgreSQL
                <br />
                其他：REST API · Docker · Firebase · Webhook · 自動化流程
              </p>
            </div>
          </motion.div>

          {/* 右側 - 聯繫表單 */}
          <motion.div variants={fadeInItem}>
            <div className="card p-8">
              <h3
                className="text-xl font-bold text-[var(--text-color)] mb-6"
                style={{
                  fontFamily: "var(--font-heading), system-ui, sans-serif",
                }}
              >
                傳送訊息
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-[var(--text-color)] mb-1.5"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-indigo-400 ml-1">*</span>
                      )}
                    </label>
                    <field.tag
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      rows={field.tag === "textarea" ? 4 : undefined}
                      className={cn(
                        "w-full px-4 py-3 bg-[var(--background-color-secondary)] border border-[var(--border-color)] rounded-xl placeholder-[var(--text-color-muted)] focus:border-[var(--text-color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color-primary)]/20 transition-all resize-none",
                        field.className
                      )}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white",
                    "btn-primary"
                  )}
                >
                  <SendOutlined />
                  送出訊息
                </button>
              </form>

              <p className="text-xs text-[var(--text-color-muted)] mt-4 text-center">
                按下送出後會開啟您的郵件客戶端，通常 24 小時內回覆。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
