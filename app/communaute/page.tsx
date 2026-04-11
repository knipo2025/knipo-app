import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart, BookOpen } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Communauté KNIPO — Rejoindre le mouvement",
  description:
    "Rejoins la communauté KNIPO sur YouTube, TikTok et Telegram. Accède aux ressources, soutiens le projet et reste connecté à l'élévation.",
};

const socials = [
  {
    name: "YouTube",
    handle: "@knipo2025",
    description:
      "Vidéos sur l'histoire africaine, la connaissance de soi et la discipline. Des contenus pensés pour aller en profondeur.",
    cta: "S'abonner",
    href: "https://youtube.com/@knipo2025",
    color: "#ff4444",
    bg: "rgba(255,68,68,0.06)",
    border: "rgba(255,68,68,0.2)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@knipo.ibrahim",
    description:
      "Formats courts, réflexions quotidiennes, extraits du guide. Pour ceux qui veulent de la densité en quelques secondes.",
    cta: "Suivre",
    href: "https://www.tiktok.com/@knipo.ibrahim",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    handle: "Groupe KNIPO",
    description:
      "L'espace d'échange de la communauté. Discussions, partages de ressources, questions, réflexions collectives.",
    cta: "Rejoindre le groupe",
    href: "https://t.me/+xGJa6BKvhRE5MjJk",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.06)",
    border: "rgba(96,165,250,0.2)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function CommunautePage() {
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
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top center, rgba(124,58,237,0.08) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,76,0.06) 0%, transparent 65%)" }} />
        </div>

        <div className="container-knipo" style={{ position: "relative", zIndex: 10 }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>Communauté</SectionLabel>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "var(--c-text-primary)", maxWidth: "44rem", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Rejoins le{" "}
            <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>mouvement.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", maxWidth: "38rem", fontWeight: 300, lineHeight: 1.7, marginBottom: "3rem" }}>
            KNIPO n&apos;est pas qu&apos;un site. C&apos;est une communauté de personnes qui ont choisi de se reconstruire sur des bases solides. Rejoins-nous là où tu préfères.
          </p>

          {/* Stats rapides */}
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {[
              { value: "YouTube", label: "@knipo2025" },
              { value: "TikTok", label: "@knipo.ibrahim" },
              { value: "Telegram", label: "Groupe actif" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 400, color: "var(--c-gold)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--c-text-muted)", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Réseaux sociaux */}
      <section style={{ padding: "6rem 0", background: "var(--c-bg-main)" }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "3rem" }}>Nos plateformes</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="socials-grid">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{
                  textDecoration: "none",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "2rem 2.5rem",
                  background: s.bg,
                  border: `1px solid ${s.border}`,
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
              >
                <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", color: "var(--c-text-primary)", fontWeight: 300 }}>{s.name}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--c-text-muted)", letterSpacing: "0.1em" }}>{s.handle}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--c-text-secondary)", lineHeight: 1.6, margin: 0 }}>{s.description}</p>
                </div>
                <div
                  className="social-cta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: s.color,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    opacity: 0.7,
                    transition: "opacity 0.3s",
                  }}
                >
                  {s.cta} <ArrowUpRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          .social-card:hover { transform: translateX(4px); }
          .social-card:hover .social-cta { opacity: 1 !important; }
          @media (max-width: 640px) {
            .social-card { grid-template-columns: auto 1fr !important; }
            .social-cta { display: none !important; }
          }
        `}</style>
      </section>

      {/* Médiathèque preview */}
      <section style={{ padding: "6rem 0", background: "var(--c-bg-surface)", borderTop: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="media-preview-grid">
            <div>
              <SectionLabel style={{ marginBottom: "1.5rem" }}>Médiathèque</SectionLabel>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "var(--c-text-primary)", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Des ressources sélectionnées{" "}
                <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>avec exigence.</span>
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--c-text-secondary)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "36rem", fontWeight: 300 }}>
                Livres, documentaires, podcasts — classés par thème sur l&apos;histoire africaine, la connaissance de soi et la discipline. Et bientôt, des espaces physiques à Dakar.
              </p>
              <Link href="/mediatheque" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Explorer la Médiathèque <ArrowUpRight size={15} />
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--c-border-main)", border: "1px solid var(--c-border-main)" }}>
              {[
                { label: "Livres essentiels", count: "12", color: "#D4A84C" },
                { label: "Documentaires", count: "8", color: "#60a5fa" },
                { label: "Podcasts", count: "15", color: "#c084fc" },
                { label: "Articles de fond", count: "17", color: "#4ade80" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1.5rem", background: "var(--c-bg-main)" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 300, color: item.color, lineHeight: 1 }}>{item.count}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--c-text-muted)", marginTop: "0.4rem", letterSpacing: "0.05em" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .media-preview-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* Soutenir */}
      <section style={{ padding: "6rem 0", background: "linear-gradient(135deg, #1A0B2E, #2D1054)", position: "relative", overflow: "hidden" }}>
        <div className="pattern-adinkra" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div className="container-knipo" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="support-grid">
            <div>
              <SectionLabel style={{ marginBottom: "1.5rem" }}>Soutenir</SectionLabel>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F0ECE4", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Soutenir KNIPO,{" "}
                <span style={{ fontStyle: "italic", color: "#D4A84C" }}>c&apos;est investir dans une conscience.</span>
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#B0A8C0", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "36rem", fontWeight: 300 }}>
                En achetant le Guide sur Etsy, en partageant les articles ou en rejoignant la communauté — chaque geste compte pour faire grandir ce projet.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://www.etsy.com/fr/listing/4357566512/savoir-est-pouvoir-histoire-africaine"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.875rem 1.75rem",
                    background: "linear-gradient(135deg, #D4A84C, #C97A0A)",
                    color: "#080808",
                    fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 700,
                    textDecoration: "none", letterSpacing: "0.05em",
                  }}
                >
                  <Heart size={15} /> Acheter le Guide
                </a>
                <a
                  href="https://knipo2025.systeme.io/f37fb761"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.875rem 1.75rem",
                    background: "transparent",
                    color: "#D4A84C",
                    fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600,
                    textDecoration: "none", letterSpacing: "0.05em",
                    border: "1px solid rgba(212,168,76,0.4)",
                  }}
                >
                  <BookOpen size={15} /> Recevoir gratuitement
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "📖", title: "Achète le Guide", desc: "Soutiens directement le projet sur Etsy" },
                { icon: "🔁", title: "Partage un article", desc: "Envoie un texte à quelqu'un qui en a besoin" },
                { icon: "💬", title: "Rejoins Telegram", desc: "Participe aux discussions de la communauté" },
                { icon: "🔔", title: "Abonne-toi sur YouTube", desc: "Aide l'algorithme à diffuser le contenu" },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem 1.25rem", border: "1px solid rgba(212,168,76,0.15)", background: "rgba(255,255,255,0.03)" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#F0ECE4", margin: "0 0 0.2rem" }}>{item.title}</p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "#B0A8C0", margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .support-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* Newsletter */}
      <section style={{ padding: "6rem 0", background: "var(--c-bg-elevated)", borderTop: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo" style={{ textAlign: "center", maxWidth: "42rem", margin: "0 auto" }}>
          <SectionLabel style={{ marginBottom: "1.5rem", justifyContent: "center" }}>Newsletter</SectionLabel>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--c-text-primary)", marginBottom: "1rem", lineHeight: 1.1 }}>
            Reste dans la profondeur.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--c-text-secondary)", marginBottom: "2.5rem", fontWeight: 300, lineHeight: 1.7 }}>
            Nouveaux articles, réflexions, ressources — directement dans ta boîte mail. Pas de bruit. Que de la valeur.
          </p>
          <form
            action="https://knipo2025.systeme.io/f37fb761"
            method="GET"
            target="_blank"
            style={{ display: "flex", maxWidth: "30rem", margin: "0 auto" }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Ton adresse email"
              style={{
                flex: 1,
                background: "var(--c-bg-surface)",
                border: "1px solid var(--c-border-main)",
                borderRight: "none",
                padding: "1rem 1.5rem",
                fontSize: "0.875rem",
                color: "var(--c-text-primary)",
                outline: "none",
                fontFamily: "var(--font-sans)",
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #D4A84C, #C97A0A)",
                color: "#080808",
                padding: "1rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                whiteSpace: "nowrap",
              }}
            >
              Rejoindre →
            </button>
          </form>
          <p style={{ marginTop: "1rem", fontSize: "0.7rem", color: "var(--c-text-muted)", letterSpacing: "0.05em" }}>
            Via Systeme.io · Aucun spam · Désabonnement à tout moment
          </p>
        </div>
      </section>
    </>
  );
}
