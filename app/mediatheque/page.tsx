import type { Metadata } from "next";
import { ArrowRight, BookOpen, Video, Headphones, FileText, Globe } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Médiathèque",
  description: "La médiathèque KNIPO — ressources classées par thème pour approfondir votre connaissance.",
};

const categories = [
  {
    iconName: "BookOpen",
    title: "Livres essentiels",
    count: "12 ressources",
    description: "Les ouvrages fondamentaux sur l'histoire africaine, la philosophie et le développement de soi.",
    color: "#D4A84C",
    bg: "rgba(212,168,76,0.05)",
  },
  {
    iconName: "Video",
    title: "Documentaires",
    count: "8 ressources",
    description: "Films et documentaires sélectionnés pour leur profondeur et leur rigueur.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.05)",
  },
  {
    iconName: "Headphones",
    title: "Podcasts & audio",
    count: "15 ressources",
    description: "Les meilleures émissions et podcasts sur les thèmes KNIPO.",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.05)",
  },
  {
    iconName: "FileText",
    title: "Articles de fond",
    count: "20 ressources",
    description: "Analyses, essais et réflexions approfondies. La lecture longue comme pratique.",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.05)",
  },
  {
    iconName: "Globe",
    title: "Ressources en ligne",
    count: "10 ressources",
    description: "Sites, bases de données et archives numériques de référence.",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.05)",
  },
];

const IconMap: Record<string, React.ComponentType<{ size: number; style?: React.CSSProperties }>> = {
  BookOpen,
  Video,
  Headphones,
  FileText,
  Globe,
};

const themes = [
  "Histoire africaine", "Développement personnel", "Philosophie", "Foi & spiritualité",
  "Discipline & mentalité", "Identité", "Leadership", "Famille & transmission",
];

export default function MediathequePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "10rem", paddingBottom: "6rem", background: "var(--c-bg-dark)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at bottom right, rgba(212,168,76,0.06) 0%, transparent 60%)" }} />
          <div style={{
            position: "absolute", top: "-10%", left: "-5%",
            width: "45vw", height: "45vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 65%)",
          }} />
        </div>
        <div className="container-knipo" style={{ position: "relative", zIndex: 10 }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>Médiathèque KNIPO</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            maxWidth: "56rem",
            lineHeight: 1.1,
            marginBottom: "2rem",
            marginTop: "2rem",
          }}>
            Une bibliothèque du savoir,{" "}
            <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>organisée pour aller loin</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", maxWidth: "40rem", fontWeight: 400 }}>
            La médiathèque KNIPO rassemble les ressources les plus pertinentes sur nos thèmes de fond. Livres, documentaires, podcasts, articles — sélectionnés avec exigence pour approfondir l&apos;histoire africaine, le développement personnel et l&apos;élévation consciente.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Themes */}
      <section className="py-section" style={{ background: "var(--c-bg-elevated)", borderBottom: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "2rem" }}>Explorer par thème</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
            {themes.map((theme) => (
              <button
                key={theme}
                style={{
                  padding: "0.625rem 1.25rem",
                  border: "1px solid var(--c-border-light)",
                  color: "var(--c-text-secondary)",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-sans)",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-section-lg" style={{ background: "var(--c-bg-main)" }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "3rem" }}>Collections</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="categories-grid">
            {categories.map((cat) => {
              const Icon = IconMap[cat.iconName];
              return (
                <div
                  key={cat.title}
                  className="card-dark"
                  style={{
                    padding: "2rem",
                    backgroundColor: cat.bg,
                    transition: "all 0.3s",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ marginBottom: "1rem" }}>
                    <Icon size={28} style={{ color: cat.color }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", color: "var(--c-text-primary)" }}>{cat.title}</h3>
                    <span style={{ fontSize: "0.75rem", color: "var(--c-text-muted)", letterSpacing: "0.1em", marginTop: "2px" }}>{cat.count}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--c-text-secondary)", fontWeight: 300, marginBottom: "1.5rem", flex: 1 }}>
                    {cat.description}
                  </p>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.875rem", color: cat.color }}>
                    Explorer <ArrowRight size={14} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .categories-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (min-width: 1024px) {
            .categories-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* Projet physique médiathèques — Sénégal & Afrique */}
      <section style={{
        background: "linear-gradient(135deg, #1A0B2E, #2D1054)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(212,168,76,0.2)",
      }}>
        {/* Pattern adinkra en fond */}
        <div className="pattern-adinkra" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

        <div className="container-knipo" style={{ position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <span style={{ width: "2rem", height: "1px", background: "#D4A84C", flexShrink: 0 }} />
            <span style={{ fontSize: "0.7rem", color: "#D4A84C", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, fontFamily: "var(--font-sans)" }}>
              Projet Physique — Sénégal &amp; Afrique
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="mediatheque-physique-grid">

            {/* Texte */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "#F0ECE4",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}>
                Des espaces vivants pour la jeunesse <span style={{ fontStyle: "italic", color: "#D4A84C" }}>africaine.</span>
              </h2>

              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#B0A8C0", lineHeight: 1.75, fontWeight: 300, marginBottom: "1.5rem" }}>
                Le projet est né d&apos;un constat simple : au Sénégal et en Afrique, beaucoup de jeunes ont du temps libre mais peu d&apos;espaces sains, stimulants et utiles pour l&apos;employer de façon constructive.
              </p>

              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#B0A8C0", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
                L&apos;objectif : créer des médiathèques <strong style={{ color: "#F0ECE4" }}>vivantes, modernes et attractives</strong> — pas des bibliothèques froides. Des lieux où les jeunes ont <em>envie d&apos;aller</em>.
              </p>

              {/* Features */}
              {[
                "Lecture, accès au savoir et ressources éducatives",
                "Histoire africaine, identité et développement personnel",
                "Divertissement intelligent — jeux, activités, échanges",
                "Outils pédagogiques et espaces de progression",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{
                    width: "1.25rem", height: "1.25rem",
                    background: "linear-gradient(135deg, #D4A84C, #C97A0A)",
                    color: "#1A0B2E",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.6rem", fontWeight: 700, flexShrink: 0, marginTop: "0.1rem",
                  }}>✓</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#C8C3BC" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Roadmap */}
            <div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                color: "#D4A84C",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}>
                Déploiement prévu
              </p>

              {[
                { phase: "Phase 1", lieu: "Dakar, Sénégal", desc: "Espace pilote — valider le modèle", status: "En cours" },
                { phase: "Phase 2", lieu: "Autres villes du Sénégal", desc: "Extension progressive", status: "Prévu" },
                { phase: "Phase 3", lieu: "Afrique de l'Ouest", desc: "Capitales régionales", status: "Vision" },
                { phase: "Phase 4", lieu: "Afrique continentale", desc: "Partout où la jeunesse a soif de savoir", status: "Vision" },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "1.25rem",
                  background: i === 0 ? "rgba(212,168,76,0.1)" : "rgba(255,255,255,0.03)",
                  border: i === 0 ? "1px solid rgba(212,168,76,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  marginBottom: "0.75rem",
                  position: "relative",
                }}>
                  {i === 0 && (
                    <span style={{
                      position: "absolute", top: "0.75rem", right: "0.75rem",
                      background: "linear-gradient(135deg, #D4A84C, #C97A0A)",
                      color: "#1A0B2E",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.5rem",
                      fontFamily: "var(--font-sans)",
                    }}>
                      {item.status}
                    </span>
                  )}
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.8rem",
                      color: "#D4A84C",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}>
                      {item.phase}
                    </span>
                    <div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#F0ECE4", fontWeight: 500, marginBottom: "0.25rem" }}>
                        {item.lieu}
                      </p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "#8A8494" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: "2rem" }}>
                <a href="/soutenir" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "linear-gradient(135deg, #D4A84C, #C97A0A)",
                  color: "#1A0B2E",
                  padding: "0.875rem 1.75rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}>
                  Soutenir ce projet →
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .mediatheque-physique-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
