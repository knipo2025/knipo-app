import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: `${article.title} — KNIPO`,
    description: article.excerpt,
  };
}

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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const catColor = categoryColors[article.category] || "#D4A84C";
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Article */}
      <section
        style={{
          position: "relative",
          paddingTop: "9rem",
          paddingBottom: "5rem",
          background: "var(--c-bg-dark)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at top left, ${catColor}0D 0%, transparent 55%)`,
            }}
          />
        </div>

        <div
          className="container-knipo"
          style={{ position: "relative", zIndex: 10, maxWidth: "52rem" }}
        >
          {/* Back link */}
          <Link
            href="/bibliotheque"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "var(--c-text-muted)",
              textDecoration: "none",
              marginBottom: "2.5rem",
              transition: "color 0.2s",
            }}
            className="back-link"
          >
            <ArrowLeft size={16} />
            Retour à la bibliothèque
          </Link>

          {/* Category */}
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.3rem 1rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
                color: catColor,
                border: `1px solid ${catColor}40`,
                backgroundColor: `${catColor}12`,
              }}
            >
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--c-text-primary)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            {article.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "var(--c-text-secondary)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              fontStyle: "italic",
            }}
          >
            {article.excerpt}
          </p>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--c-border-main)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                color: "var(--c-text-muted)",
              }}
            >
              <Clock size={13} />
              {article.readTime} de lecture
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                color: "var(--c-text-muted)",
              }}
            >
              <Calendar size={13} />
              {article.date}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                color: "var(--c-text-muted)",
              }}
            >
              <Tag size={13} />
              Ibrahima Camara
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Article Content */}
      <section
        style={{
          padding: "5rem 0",
          background: "var(--c-bg-main)",
        }}
      >
        <div
          className="container-knipo"
          style={{ maxWidth: "52rem" }}
        >
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--c-border-main)",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-sans)",
                color: "var(--c-text-muted)",
                marginRight: "0.5rem",
              }}
            >
              Tags :
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "0.25rem 0.875rem",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.08em",
                  color: "var(--c-text-muted)",
                  border: "1px solid var(--c-border-main)",
                  backgroundColor: "var(--c-bg-surface)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author block */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "var(--c-bg-elevated)",
              border: "1px solid var(--c-border-main)",
              borderLeft: `3px solid ${catColor}`,
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${catColor}, #7C3AED)`,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                color: "white",
                fontWeight: 300,
              }}
            >
              I
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--c-text-primary)",
                  marginBottom: "0.4rem",
                }}
              >
                Ibrahima Camara
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--c-text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Fondateur de KNIPO. 15 ans entre l&apos;Afrique et l&apos;Europe. Auteur du Guide KNIPO —
                Savoir, Conscience, Élévation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation entre articles */}
      {(prevArticle || nextArticle) && (
        <section
          style={{
            padding: "4rem 0",
            background: "var(--c-bg-surface)",
            borderTop: "1px solid var(--c-border-main)",
          }}
        >
          <div className="container-knipo">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
              className="nav-articles"
            >
              <div>
                {prevArticle && (
                  <Link
                    href={`/bibliotheque/${prevArticle.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="nav-card"
                      style={{
                        padding: "1.5rem",
                        background: "var(--c-bg-main)",
                        border: "1px solid var(--c-border-main)",
                        transition: "all 0.3s",
                        cursor: "pointer",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--c-text-muted)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        ← Article précédent
                      </p>
                      <p
                        className="nav-title"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 300,
                          fontSize: "1.1rem",
                          color: "var(--c-text-primary)",
                          lineHeight: 1.3,
                          transition: "color 0.3s",
                        }}
                      >
                        {prevArticle.title}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
              <div>
                {nextArticle && (
                  <Link
                    href={`/bibliotheque/${nextArticle.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="nav-card"
                      style={{
                        padding: "1.5rem",
                        background: "var(--c-bg-main)",
                        border: "1px solid var(--c-border-main)",
                        transition: "all 0.3s",
                        cursor: "pointer",
                        textAlign: "right",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--c-text-muted)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Article suivant →
                      </p>
                      <p
                        className="nav-title"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 300,
                          fontSize: "1.1rem",
                          color: "var(--c-text-primary)",
                          lineHeight: 1.3,
                          transition: "color 0.3s",
                        }}
                      >
                        {nextArticle.title}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        style={{
          padding: "5rem 0",
          background: "var(--c-bg-elevated)",
          borderTop: "1px solid var(--c-border-main)",
          textAlign: "center",
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
              marginBottom: "1rem",
            }}
          >
            Continue à apprendre
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              color: "var(--c-text-primary)",
              marginBottom: "1rem",
            }}
          >
            D&apos;autres articles t&apos;attendent.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--c-text-secondary)",
              marginBottom: "2rem",
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            {articles.length} articles gratuits sur l&apos;histoire africaine, la connaissance de soi, la discipline et la foi.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/bibliotheque" className="btn-primary">
              Tous les articles →
            </Link>
            <Link href="/guide" className="btn-outline-dark">
              Le Guide KNIPO
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .article-content p {
          font-family: var(--font-sans);
          font-size: 1.0625rem;
          color: var(--c-text-secondary);
          line-height: 1.85;
          margin-bottom: 1.5rem;
        }
        .article-content h3 {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: clamp(1.3rem, 2.5vw, 1.75rem);
          color: var(--c-text-primary);
          margin-top: 3rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .article-content strong {
          color: var(--c-text-primary);
          font-weight: 600;
        }
        .article-content p:first-child {
          font-size: 1.125rem;
          color: var(--c-text-primary);
          font-style: italic;
        }
        .back-link:hover { color: var(--c-gold) !important; }
        .nav-card:hover { border-color: rgba(212,168,76,0.3) !important; background: var(--c-bg-elevated) !important; }
        .nav-card:hover .nav-title { color: var(--c-gold) !important; }
        @media (max-width: 640px) {
          .nav-articles { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
