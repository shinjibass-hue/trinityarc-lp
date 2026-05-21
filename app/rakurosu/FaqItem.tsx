"use client";

import { useState } from "react";

const PRIMARY = "#0EA5E9";

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #dde1e4" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "18px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: 600,
          color: "#222",
          gap: 12,
        }}
      >
        <span style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{ color: PRIMARY, fontWeight: 700, flexShrink: 0 }}>Q.</span>
          {q}
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
        <div style={{ padding: "0 0 18px 28px", color: "#555", fontSize: 14, lineHeight: 1.8 }}>
          {a}
        </div>
      )}
    </div>
  );
}
