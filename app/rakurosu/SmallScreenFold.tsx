"use client";

import { useState, type ReactNode } from "react";

type Props = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export default function SmallScreenFold({ title, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rk-fold">
      <button
        type="button"
        className="rk-fold-head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="rk-fold-title">{title}</span>
        <span className={`rk-fold-icon ${open ? "rk-fold-icon-open" : ""}`} aria-hidden="true">
          ▼
        </span>
      </button>
      <div className={`rk-fold-body ${open ? "rk-fold-body-open" : ""}`}>{children}</div>
    </div>
  );
}
