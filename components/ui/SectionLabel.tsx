import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  center?: boolean;
}

export default function SectionLabel({ children, className = "", style, center = false }: SectionLabelProps) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "0.75rem", ...(center ? { justifyContent: "center" } : {}), ...style }}
      className={className}
    >
      <span style={{ display: "block", width: "2rem", height: "1px", background: "var(--c-gold)", flexShrink: 0 }} />
      <span style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: "0.7rem",
        color: "var(--c-gold)",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        fontWeight: 500,
      }}>
        {children}
      </span>
    </div>
  );
}
