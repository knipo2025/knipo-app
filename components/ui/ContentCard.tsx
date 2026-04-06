import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ContentCardProps {
  type: "article" | "video" | "podcast" | "citation";
  title: string;
  excerpt?: string;
  category?: string;
  date?: string;
  href: string;
  featured?: boolean;
}

const typeConfig = {
  article: { label: "Article", color: "#C9A84C" },
  video: { label: "Vidéo", color: "#60a5fa" },
  podcast: { label: "Podcast", color: "#c084fc" },
  citation: { label: "Citation", color: "#4ade80" },
};

export default function ContentCard({
  type,
  title,
  excerpt,
  category,
  date,
  href,
  featured = false,
}: ContentCardProps) {
  const config = typeConfig[type];

  return (
    <Link href={href} style={{ display: "block", textDecoration: "none" }}>
      <article
        className="card-surface content-card"
        style={{
          padding: featured ? "2rem" : "1.5rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em", color: config.color, textTransform: "uppercase" }}>
            {config.label}
          </span>
          {category && (
            <span style={{ fontSize: "0.75rem", color: "var(--c-text-muted)", letterSpacing: "0.1em" }}>{category}</span>
          )}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginBottom: "0.75rem",
            fontSize: featured ? "clamp(1.75rem, 3vw, 2.5rem)" : "clamp(1.25rem, 2vw, 1.5rem)",
            lineHeight: featured ? 1.2 : 1.3,
            transition: "color 0.3s",
          }}
          className="card-title"
        >
          {title}
        </h3>

        {excerpt && (
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            color: "var(--c-text-secondary)",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {excerpt}
          </p>
        )}

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: "1rem",
          borderTop: "1px solid var(--c-border-main)",
        }}>
          {date && (
            <span style={{ fontSize: "0.75rem", color: "var(--c-text-muted)", letterSpacing: "0.1em" }}>{date}</span>
          )}
          <span className="card-arrow" style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            fontSize: "0.875rem",
            color: "#C9A84C",
            opacity: 0,
            transition: "opacity 0.3s",
            marginLeft: "auto",
          }}>
            Lire <ArrowUpRight size={14} />
          </span>
        </div>
      </article>

      <style>{`
        .content-card:hover {
          border-color: rgba(212,168,76,0.3) !important;
          background-color: var(--c-bg-elevated) !important;
        }
        .content-card:hover .card-title {
          color: var(--c-gold) !important;
        }
        .content-card:hover .card-arrow {
          opacity: 1 !important;
        }
      `}</style>
    </Link>
  );
}
