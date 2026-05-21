"use client";

import { useState, type ReactNode } from "react";

const PRIMARY = "#0EA5E9";

export function GuideAccordionItem({
  num,
  title,
  badgeColor,
  children,
}: {
  num: number | string;
  title: string;
  badgeColor?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const color = badgeColor ?? PRIMARY;

  return (
    <div style={{ marginBottom: 8, border: "1px solid #dde1e4", borderRadius: 12, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "16px 20px",
          background: open ? "#f8fafb" : "#fff",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            background: color,
            color: "#fff",
            fontWeight: 800,
            fontSize: 14,
            width: 28,
            height: 28,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            {num}
          </span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#111" }}>{title}</span>
        </span>
        <span style={{
          color: PRIMARY,
          fontSize: 20,
          flexShrink: 0,
          transform: open ? "rotate(45deg)" : "none",
          transition: "transform .2s",
          display: "inline-block",
        }}>
          ＋
        </span>
      </button>
      {open && (
        <div style={{ padding: "20px 24px 28px", borderTop: "1px solid #dde1e4" }}>
          {children}
        </div>
      )}
    </div>
  );
}
