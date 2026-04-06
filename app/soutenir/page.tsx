import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Share2, BookOpen } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Soutenir KNIPO",
  description: "Soutenez le projet KNIPO et contribuez à l'élévation des consciences.",
};

const ways = [
  {
    iconName: "Heart",
    title: "Contribution financière",
    description: "Soutenez directement la production de contenu, le développement de la médiathèque et la croissance du projet.",
    cta: "Soutenir →",
    href: "#don",
    featured: true,
  },
  {
    iconName: "Share2",
    title: "Partager le projet",
    description: "La meilleure façon de soutenir KNIPO ? En parler autour de vous. Partager un article, recommander la plateforme.",
    cta: "Partager KNIPO →",
    href: "#partager",
    featured: false,
  },
  {
    iconName: "BookOpen",
    title: "Acquérir le Guide",
    description: "En obtenant le Guide KNIPO, vous accédez à un contenu de fond ET vous contribuez directement au projet.",
    cta: "Obtenir le Guide →",
    href: "/guide",
    featured: false,
  },
];

const IconMap: Record<string, React.ComponentType<{ size: number; style?: React.CSSProperties }>> = {
  Heart,
  Share2,
  BookOpen,
};

export default function SoutenirPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "10rem", paddingBottom: "6rem", background: "var(--c-bg-dark)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(212,168,76,0.07) 0%, transparent 70%)" }} />
          <div style={{
            position: "absolute", top: "-10%", right: "-5%",
            width: "40vw", height: "40vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,122,10,0.06) 0%, transparent 65%)",
          }} />
        </div>
        <div className="container-knipo" style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "48rem", margin: "0 auto" }}>
          <SectionLabel style={{ marginBottom: "2rem", justifyContent: "center" }}>Soutenir KNIPO</SectionLabel>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            lineHeight: 1.1,
            marginBottom: "2rem",
            marginTop: "2rem",
          }}>
            Un projet qui dépend de{" "}
            <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>ceux qui y croient</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", fontWeight: 300 }}>
            KNIPO est construit avec conviction et indépendance. Aucun algorithme, aucun sponsor, aucune compromission. Juste la profondeur. Votre soutien permet au projet d&apos;exister et de grandir.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Pourquoi soutenir */}
      <section className="py-section" style={{ background: "var(--c-bg-elevated)", borderBottom: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo" style={{ maxWidth: "55rem" }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>Pourquoi soutenir ?</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "2rem" }}>
            {[
              "KNIPO est un projet indépendant. Cela signifie liberté éditoriale totale — et responsabilité financière réelle.",
              "Chaque contribution permet de produire plus de contenus de fond, de développer la médiathèque, d'améliorer la plateforme et de garantir que KNIPO reste un espace de qualité, sans compromis.",
              "Soutenir KNIPO, c'est investir dans un projet de transmission — pour vous, et pour ceux qui viendront après.",
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", fontWeight: 300, lineHeight: 1.75 }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to support */}
      <section className="py-section-lg" style={{ background: "var(--c-bg-main)" }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "3rem" }}>Comment soutenir</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="ways-grid">
            {ways.map((way) => {
              const Icon = IconMap[way.iconName];
              return (
                <div
                  key={way.title}
                  className="card-dark"
                  style={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    borderColor: way.featured ? "rgba(212,168,76,0.3)" : "var(--c-border-main)",
                    backgroundColor: way.featured ? "rgba(212,168,76,0.05)" : "var(--c-bg-accent)",
                  }}
                >
                  <Icon
                    size={28}
                    style={{ marginBottom: "1rem", color: way.featured ? "var(--c-gold)" : "var(--c-text-muted)" }}
                  />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", color: "var(--c-text-primary)", marginBottom: "1rem" }}>{way.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--c-text-secondary)", fontWeight: 300, flex: 1, marginBottom: "2rem" }}>
                    {way.description}
                  </p>
                  <Link
                    href={way.href}
                    className={way.featured ? "btn-primary" : "btn-outline"}
                  >
                    {way.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .ways-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* Don section */}
      <section id="don" className="py-section" style={{ background: "var(--c-bg-elevated)", borderTop: "1px solid var(--c-border-main)", borderBottom: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo" style={{ maxWidth: "55rem", textAlign: "center" }}>
          <SectionLabel style={{ marginBottom: "1.5rem", justifyContent: "center" }}>Contribution directe</SectionLabel>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginBottom: "1.5rem",
            marginTop: "1.5rem",
          }}>
            Soutenir le projet
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", marginBottom: "2.5rem", fontWeight: 300 }}>
            Le système de paiement sécurisé arrive bientôt. En attendant, contactez-nous directement pour toute contribution.
          </p>
          <div className="card-dark" style={{ padding: "2rem", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--c-text-primary)", fontStyle: "italic", marginBottom: "1rem" }}>
              &ldquo;Le meilleur investissement est celui qui élève une conscience.&rdquo;
            </p>
            <p className="section-label">KNIPO</p>
          </div>
        </div>
      </section>
    </>
  );
}
