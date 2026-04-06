import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { articles, categories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Bibliothèque KNIPO — Articles & Ressources",
  description:
    "Tous les articles KNIPO sur l'histoire africaine, la connaissance de soi, la discipline, la foi et la transmission. Des contenus en profondeur pour ceux qui cherchent vraiment.",
};

const categoryColors: Record<string, string> = {
  Histoire: "#D4A84C",
  "Figures Historiques": "#C97A0A",
  "Connaissance de Soi": "#7C3AED",
  Discipline: "#10B981",
  "Foi & Spiritualité": "#60a5fa",
  Société: "#f472b6",
  Éducation: "#fbbf24",
  Action: "#34d399",
  Diaspora: "#a78bfa",
  Transmission: "#fb923c",
  Pratiques: "#22d3ee",
  Vision: "#e879f9",
};

export default function BibliothequeePage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          paddingTop: "10rem",
          paddingBottom: "6rem",
          background: "var(--c-bg-dark)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at top left, rgba(212,168,76,0.07) 0%, transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              right: "-5%",
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="container-knipo" style={{ position: "relative", zIndex: 10 }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>Bibliothèque</SectionLabel>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "var(--c-text-primary)",
              maxWidth: "48rem",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Des articles qui{" "}
            <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>
              dérangent les certitudes.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "var(--c-text-secondary)",
              maxWidth: "40rem",
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            {articles.length} articles sur l&apos;histoire africaine, la connaissance de soi, la
            discipline, la foi et la transmission. Pas de bruit — de la profondeur.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {[
              { value: `${articles.length}`, label: "Articles" },
              { value: `${categories.length - 1}`, label: "Thèmes" },
              { value: "100%", label: "Gratuit" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "var(--c-gold)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "var(--c-text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Category Filter */}
      <div
        style={{
          position: "sticky",
          top: "5rem",
          zIndex: 40,
          backgroundColor: "rgba(21,19,24,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--c-border-main)",
        }}
      >
        <div
          className="container-knipo"
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {["Tout", "Histoire", "Figures Historiques", "Connaissance de Soi", "Discipline", "Foi & Spiritualité", "Société", "Diaspora"].map(
              (cat, i) => (
                <span
                  key={cat}
                  style={{
                    padding: "0.4rem 1.1rem",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-sans)",
                    whiteSpace: "nowrap",
                    border: i === 0 ? "none" : "1px solid var(--c-border-main)",
                    backgroundColor:
                      i === 0 ? "var(--c-gold)" : "transparent",
                    color:
                      i === 0
                        ? "#0A0A0A"
                        : categoryColors[cat] || "var(--c-text-secondary)",
                    fontWeight: i === 0 ? 600 : 400,
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section
          style={{
            padding: "5rem 0 2rem",
            background: "var(--c-bg-main)",
          }}
        >
          <div className="container-knipo">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--c-gold)",
                marginBottom: "2rem",
              }}
            >
              À la une
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.5rem",
              }}
              className="featured-grid"
            >
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/bibliotheque/${article.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="card-surface featured-article"
                    style={{
                      padding: "2.5rem",
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "1.5rem",
                      transition: "all 0.3s",
                      cursor: "pointer",
                      borderLeft: `3px solid ${categoryColors[article.category] || "var(--c-gold)"}`,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color:
                              categoryColors[article.category] || "var(--c-gold)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {article.category}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--c-text-muted)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {article.readTime} de lecture
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--c-text-muted)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {article.date}
                        </span>
                      </div>
                      <h2
                        className="featured-title"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 300,
                          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                          color: "var(--c-text-primary)",
                          marginBottom: "1rem",
                          lineHeight: 1.2,
                          transition: "color 0.3s",
                        }}
                      >
                        {article.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "1rem",
                          color: "var(--c-text-secondary)",
                          lineHeight: 1.7,
                          marginBottom: "1.5rem",
                          maxWidth: "48rem",
                        }}
                      >
                        {article.excerpt}
                      </p>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "0.2rem 0.75rem",
                              fontSize: "0.7rem",
                              fontFamily: "var(--font-sans)",
                              letterSpacing: "0.08em",
                              color: "var(--c-text-muted)",
                              border: "1px solid var(--c-border-main)",
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <span
                        className="read-link"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--c-gold)",
                          transition: "gap 0.3s",
                        }}
                      >
                        Lire l&apos;article <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section
        style={{
          padding: "3rem 0 8rem",
          background: "var(--c-bg-main)",
        }}
      >
        <div className="container-knipo">
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--c-text-muted)",
              marginBottom: "2rem",
            }}
          >
            Tous les articles — {rest.length} textes
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1px",
              background: "var(--c-border-main)",
              border: "1px solid var(--c-border-main)",
            }}
            className="articles-grid"
          >
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/bibliotheque/${article.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="article-row"
                  style={{
                    padding: "1.75rem 2rem",
                    background: "var(--c-bg-main)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    gap: "1.5rem",
                    transition: "background 0.25s",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color:
                            categoryColors[article.category] || "var(--c-gold)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {article.category}
                      </span>
                      <span
                        style={{
                          width: "3px",
                          height: "3px",
                          borderRadius: "50%",
                          backgroundColor: "var(--c-text-muted)",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--c-text-muted)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {article.readTime}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--c-text-muted)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {article.date}
                      </span>
                    </div>
                    <h3
                      className="article-title"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 300,
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        color: "var(--c-text-primary)",
                        marginBottom: "0.5rem",
                        lineHeight: 1.3,
                        transition: "color 0.25s",
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        color: "var(--c-text-muted)",
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {article.excerpt}
                    </p>
                  </div>
                  <div
                    className="row-arrow"
                    style={{
                      opacity: 0,
                      transition: "opacity 0.25s",
                      color: "var(--c-gold)",
                      flexShrink: 0,
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Guide */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, var(--c-bg-elevated), var(--c-bg-surface))",
          borderTop: "1px solid var(--c-border-main)",
        }}
      >
        <div className="container-knipo" style={{ textAlign: "center" }}>
          <BookOpen
            size={40}
            style={{ color: "var(--c-gold)", marginBottom: "1.5rem" }}
          />
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "var(--c-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Tu veux aller plus loin ?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "var(--c-text-secondary)",
              maxWidth: "36rem",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Le Guide KNIPO rassemble 51 pages, 12 chapitres et 7 bonus pour
            aller au fond de ta reconstruction identitaire.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guide" className="btn-primary">
              Découvrir le Guide →
            </Link>
            <Link href="/guide#gratuit" className="btn-outline-dark">
              Recevoir gratuitement
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .featured-grid { grid-template-columns: 1fr 1fr !important; }
          .articles-grid { grid-template-columns: 1fr 1fr !important; }
          .featured-article { grid-template-columns: 4fr 1fr !important; }
        }
        .featured-article:hover { background-color: var(--c-bg-elevated) !important; }
        .featured-article:hover .featured-title { color: var(--c-gold) !important; }
        .article-row:hover { background: var(--c-bg-elevated) !important; }
        .article-row:hover .article-title { color: var(--c-gold) !important; }
        .article-row:hover .row-arrow { opacity: 1 !important; }
      `}</style>
    </>
  );
}
