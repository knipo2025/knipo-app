import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "À propos",
  description: "La vision, la mission et l'histoire derrière KNIPO — Knowledge Is Power.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "10rem", paddingBottom: "6rem", background: "var(--c-bg-dark)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top right, rgba(212,168,76,0.06) 0%, transparent 60%)" }} />
          <div style={{
            position: "absolute", bottom: "-10%", left: "-5%",
            width: "40vw", height: "40vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
          }} />
        </div>
        <div className="container-knipo" style={{ position: "relative", zIndex: 10 }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>À propos de KNIPO</SectionLabel>
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
            Un projet né d&apos;une conviction :{" "}
            <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>le savoir émancipe</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", maxWidth: "40rem", fontWeight: 300 }}>
            KNIPO n&apos;est pas un média de plus. C&apos;est un espace de transmission — profond, sérieux, ancré dans l&apos;élévation des consciences.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Vision */}
      <section className="py-section-lg" style={{ background: "var(--c-bg-main)" }}>
        <div className="container-knipo" style={{ maxWidth: "55rem" }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>La Vision</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
            {[
              <>KNIPO signifie <em style={{ color: "var(--c-text-primary)", fontStyle: "normal", fontWeight: 500 }}>Knowledge Is Power</em>. Pas comme un slogan. Comme une philosophie de vie.</>,
              "Nous vivons dans une époque de bruit, de dispersion et de surface. Les réseaux sociaux offrent de l'information à la pelle, mais rarement de la profondeur. KNIPO est une réponse à cette superficialité.",
              "Ici, on parle d'histoire africaine — pas la version édulcorée, mais la vraie. On parle de connaissance de soi, de foi, de discipline, de vision long terme. On parle de ce qu'il faut comprendre pour construire quelque chose de solide.",
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", fontWeight: 300, lineHeight: 1.75 }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission cards */}
      <section className="py-section" style={{ background: "var(--c-bg-elevated)", borderTop: "1px solid var(--c-border-main)", borderBottom: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "3rem" }}>Ce que nous portons</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="mission-cards">
            {[
              {
                num: "01",
                title: "Éduquer",
                desc: "Proposer des contenus de fond sur l'histoire africaine, le développement personnel et la connaissance de soi.",
              },
              {
                num: "02",
                title: "Inspirer",
                desc: "Montrer que la profondeur et l'élégance ne sont pas incompatibles. Que l'excellence est un choix quotidien.",
              },
              {
                num: "03",
                title: "Transmettre",
                desc: "Construire une ressource durable pour les générations qui veulent comprendre avant d'agir.",
              },
            ].map((item) => (
              <div key={item.num} className="card-dark" style={{ padding: "2rem" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", fontWeight: 300, color: "rgba(212,168,76,0.3)", display: "block", marginBottom: "1rem" }}>
                  {item.num}
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--c-text-primary)", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--c-text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .mission-cards { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* Fondateur */}
      <section className="py-section-lg" style={{ background: "var(--c-bg-main)" }}>
        <div className="container-knipo" style={{ maxWidth: "55rem" }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>Le mot du fondateur</SectionLabel>
          <blockquote style={{ borderLeft: "2px solid var(--c-gold)", paddingLeft: "2rem", marginBottom: "2rem", marginTop: "2rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: "var(--c-text-primary)", fontStyle: "italic", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              &ldquo;Quand tu te rends compte qu&apos;on t&apos;a appris à douter de toi, il est temps de réapprendre à croire en toi.&rdquo;
            </p>
          </blockquote>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              "Je m'appelle Ibrahima Camara. Pendant plus de 15 ans, j'ai vécu en Europe, entre deux mondes, entre deux vérités. Un monde qui semblait avoir toutes les réponses… mais qui ne me voyait pas. Et un autre, celui de mes origines, qu'on m'avait appris à oublier, à négliger, à taire.",
              "KNIPO est né d'une conviction simple : Le savoir libère. Le savoir reconstruit. Le savoir guérit.",
              "Ce projet, c'est l'espace que j'aurais voulu trouver. Un espace où l'histoire africaine est traitée avec la dignité qu'elle mérite. Où le développement personnel n'est pas réduit à des citations creuses. Où la transmission est prise au sérieux.",
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--c-text-secondary)", fontWeight: 300, lineHeight: 1.7 }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section" style={{ background: "var(--c-bg-elevated)", borderTop: "1px solid var(--c-border-main)", borderBottom: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--c-text-primary)", marginBottom: "1.5rem" }}>
            Prêt à aller plus loin ?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} className="apropos-ctas">
            <Link href="/guide" className="btn-primary" style={{ width: "fit-content", margin: "0 auto" }}>
              Découvrir le Guide <ArrowRight size={16} />
            </Link>
            <Link href="/contenus" className="btn-outline" style={{ width: "fit-content", margin: "0 auto" }}>
              Explorer les contenus
            </Link>
          </div>
        </div>

        <style>{`
          @media (min-width: 640px) {
            .apropos-ctas { flex-direction: row !important; }
            .apropos-ctas a { margin: 0 !important; }
          }
        `}</style>
      </section>
    </>
  );
}
