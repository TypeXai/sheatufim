"use client";

import React from "react";

interface PDFButtonProps {
  className?: string;
  size?: "sm" | "default";
}

export function PDFButton({ className, size = "default" }: PDFButtonProps) {
  return (
    <button onClick={() => window.print()} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size === "sm" ? "14" : "16"}
        height={size === "sm" ? "14" : "16"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9 L6 2 L18 2 L18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </svg>
      {size === "sm" ? "PDF" : "שמירה כ-PDF"}
    </button>
  );
}
