import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Boutique KNIPO",
  description: "Produits numériques KNIPO — le Guide et les ressources pour aller plus loin.",
};

export default function BoutiquePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "10rem", paddingBottom: "6rem", background: "var(--c-bg-dark)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "-15%", right: "-5%",
            width: "45vw", height: "45vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,76,0.09) 0%, transparent 65%)",
          }} />
          <div style={{
            position: "absolute", bottom: "0%", left: "-10%",
            width: "35vw", height: "35vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,122,10,0.06) 0%, transparent 65%)",
          }} />
        </div>
        <div className="container-knipo" style={{ position: "relative", zIndex: 1 }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>Boutique KNIPO</SectionLabel>
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
            Des ressources conçues pour{" "}
            <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>aller plus loin</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--c-text-secondary)", maxWidth: "36rem", fontWeight: 300 }}>
            Le Guide KNIPO et les ressources numériques — pour ceux qui veulent approfondir.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Products */}
      <section className="py-section-lg" style={{ background: "var(--c-bg-main)" }}>
        <div className="container-knipo">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "2rem" }} className="products-grid">
            {/* Le Guide — Featured */}
            <div className="card-dark product-featured" style={{
              padding: "2rem",
              borderColor: "rgba(212,168,76,0.3)",
              backgroundColor: "rgba(212,168,76,0.05)",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <span className="section-label">Phare</span>
                <span className="section-label" style={{ border: "1px solid rgba(212,168,76,0.3)", padding: "0.25rem 0.75rem" }}>Numérique</span>
              </div>

              {/* Book visual mini */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                <div style={{
                  width: "8rem",
                  height: "11rem",
                  backgroundColor: "var(--c-bg-accent)",
                  border: "1px solid rgba(212,168,76,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  position: "relative",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, var(--c-gold), transparent)" }} />
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.875rem", fontWeight: 300, color: "var(--c-gold)" }}>K</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--c-text-primary)", marginTop: "0.25rem" }}>KNIPO</span>
                  <div style={{ height: "1px", width: "2rem", backgroundColor: "rgba(212,168,76,0.5)", margin: "0.5rem 0" }} />
                  <span style={{ fontSize: "10px", letterSpacing: "0.2em", color: "var(--c-text-muted)" }}>LE GUIDE</span>
                </div>
              </div>

              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--c-text-primary)", marginBottom: "1rem" }}>Le Guide KNIPO</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--c-text-secondary)", fontWeight: 300, flex: 1, marginBottom: "2rem" }}>
                Le guide fondamental. Histoire, identité, connaissance de soi, discipline, foi. Six chapitres pour construire des fondations solides.
              </p>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="https://www.etsy.com/fr/listing/4357566512/savoir-est-pouvoir-histoire-africaine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  Acheter sur Etsy <ArrowRight size={16} />
                </a>
                <a
                  href="https://knipo2025.systeme.io/f37fb761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  Recevoir gratuitement par email
                </a>
                <Link href="/guide" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--c-text-muted)",
                  textAlign: "center",
                  textDecoration: "none",
                  paddingTop: "0.25rem",
                }}>
                  En savoir plus sur le guide →
                </Link>
              </div>
            </div>

            {/* Coming soon products */}
            {[
              {
                title: "Pack Ressources Médiathèque",
                desc: "Sélection commentée des meilleures ressources sur l'histoire africaine et le développement personnel.",
                type: "Numérique",
              },
              {
                title: "Carnets de Réflexion KNIPO",
                desc: "Bientôt en version physique — carnets premium pour la pratique quotidienne de l'introspection.",
                type: "Physique (bientôt)",
              },
            ].map((product) => (
              <div key={product.title} className="card-dark" style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                opacity: 0.7,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <Package size={20} style={{ color: "var(--c-text-muted)" }} />
                  <span style={{ fontSize: "0.75rem", color: "var(--c-text-muted)", letterSpacing: "0.1em", border: "1px solid var(--c-border-main)", padding: "0.25rem 0.75rem" }}>
                    {product.type}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", color: "var(--c-text-primary)", marginBottom: "1rem" }}>{product.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--c-text-secondary)", fontWeight: 300, flex: 1, marginBottom: "2rem" }}>
                  {product.desc}
                </p>
                <button
                  className="btn-outline"
                  style={{ width: "100%", justifyContent: "center", opacity: 0.5, cursor: "not-allowed" }}
                  disabled
                >
                  À venir
                </button>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (min-width: 1024px) {
            .products-grid { grid-template-columns: repeat(3, 1fr) !important; }
            .product-featured { grid-column: span 1 !important; }
          }
        `}</style>
      </section>

      {/* Newsletter CTA */}
      <section className="py-section" style={{ background: "var(--c-bg-elevated)", borderTop: "1px solid var(--c-border-main)", borderBottom: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo" style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--c-text-primary)", marginBottom: "1.5rem" }}>
            Soyez notifié des nouveautés.
          </h2>
          <form style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: "28rem", margin: "0 auto" }} className="boutique-form">
            <input
              type="email"
              placeholder="Votre email"
              style={{
                flex: 1,
                backgroundColor: "var(--c-bg-surface)",
                border: "1px solid var(--c-border-main)",
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
                backgroundColor: "var(--c-gold)",
                color: "#0A0A0A",
                padding: "1rem 2rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Rejoindre →
            </button>
          </form>
        </div>

        <style>{`
          @media (min-width: 640px) {
            .boutique-form { flex-direction: row !important; }
          }
        `}</style>
      </section>
    </>
  );
}
