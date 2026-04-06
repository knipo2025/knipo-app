import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ContentCard from "@/components/ui/ContentCard";

export const metadata: Metadata = {
  title: "Contenus",
  description: "Articles, vidéos, podcasts et réflexions KNIPO sur l'histoire africaine, le développement personnel et l'élévation.",
};

const allContent = [
  {
    type: "article" as const,
    title: "L'histoire africaine comme fondation de l'identité",
    excerpt: "Comprendre d'où l'on vient est le premier acte de lucidité. L'histoire africaine n'est pas un héritage de défaite — c'est une source de puissance inexploitée.",
    category: "Histoire",
    date: "Mars 2025",
    href: "/bibliotheque/histoire-africaine-fondation-identite",
    featured: true,
  },
  {
    type: "article" as const,
    title: "Développer une vision de long terme dans un monde de l'immédiateté",
    excerpt: "Comment cultiver la patience stratégique quand tout pousse à l'instant ?",
    category: "Vision",
    date: "Fév. 2025",
    href: "/bibliotheque/vision-long-terme-monde-immediatete",
  },
  {
    type: "article" as const,
    title: "La discipline est une forme de liberté",
    excerpt: "Pourquoi ceux qui se contraignent volontairement deviennent les plus libres des hommes.",
    category: "Discipline",
    date: "Fév. 2025",
    href: "/bibliotheque/discipline-liberte-vraie",
  },
  {
    type: "article" as const,
    title: "Se connaître soi-même : le premier acte de liberté",
    excerpt: "L'introspection comme fondation. Se comprendre avant de prétendre comprendre le monde.",
    category: "Connaissance de Soi",
    date: "Jan. 2025",
    href: "/bibliotheque/connaissance-soi-acte-liberte",
  },
  {
    type: "article" as const,
    title: "Mali, Songhaï, Kush — les empires qu'on oublie de mentionner",
    excerpt: "Des civilisations qui ont rayonné pendant des siècles, avant que l'histoire officielle ne les relègue aux notes de bas de page.",
    category: "Histoire",
    date: "Jan. 2025",
    href: "/bibliotheque/empires-africains-meconnus",
  },
  {
    type: "article" as const,
    title: "Soundiata Keïta — le lion qui n'a jamais plié",
    excerpt: "Boiteux dans son enfance, exilé, abandonné — et pourtant fondateur du plus grand empire d'Afrique de l'Ouest.",
    category: "Figures Historiques",
    date: "Déc. 2024",
    href: "/bibliotheque/soundiata-keita-lion-mandingue",
  },
];

const filters = ["Tout", "Articles", "Vidéos", "Podcasts", "Citations"];

export default function ContenusPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "10rem", paddingBottom: "6rem", background: "var(--c-bg-dark)" }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "2rem" }}>Contenus KNIPO</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            maxWidth: "48rem",
            lineHeight: 1.1,
            marginBottom: "2rem",
            marginTop: "2rem",
          }}>
            Articles, vidéos, podcasts.{" "}
            <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>De la profondeur.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", maxWidth: "36rem", fontWeight: 300 }}>
            Des contenus pensés pour ceux qui cherchent à comprendre vraiment. Histoire, développement personnel, foi, discipline, transmission.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Filters */}
      <div style={{
        position: "sticky",
        top: "5rem",
        zIndex: 40,
        backgroundColor: "rgba(28,27,34,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--c-border-main)",
      }}>
        <div className="container-knipo" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto" }}>
            {filters.map((filter, i) => (
              <button
                key={filter}
                style={{
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-sans)",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s",
                  border: i === 0 ? "none" : "1px solid var(--c-border-main)",
                  backgroundColor: i === 0 ? "var(--c-gold)" : "transparent",
                  color: i === 0 ? "#0A0A0A" : "var(--c-text-secondary)",
                  fontWeight: i === 0 ? 500 : 400,
                  cursor: "pointer",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <section className="py-section-lg" style={{ background: "var(--c-bg-main)" }}>
        <div className="container-knipo">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem", marginBottom: "3rem" }} className="contenus-featured">
            <div className="contenus-main">
              <ContentCard {...allContent[0]} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="contenus-side">
              <ContentCard {...allContent[1]} />
              <ContentCard {...allContent[2]} />
            </div>
          </div>
          <div className="grid-editorial">
            {allContent.slice(3).map((content, i) => (
              <ContentCard key={i} {...content} />
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .contenus-featured { grid-template-columns: 3fr 2fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
