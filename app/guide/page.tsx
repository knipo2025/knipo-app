import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Gift } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Le Guide KNIPO – Savoir, Conscience, Élévation",
  description: "51 pages pour retrouver ta puissance intérieure. Histoire africaine, connaissance de soi, discipline, foi. Par Ibrahima Camara.",
};

const chapters = [
  { num: "01", title: "Pourquoi tu stagnes… sans savoir pourquoi", desc: "Avant la discipline, il faut une direction. Avant l'action, il faut un sens." },
  { num: "02", title: "L'Afrique, berceau de l'humanité… mais oubliée", desc: "L'histoire qu'on ne t'a jamais apprise, et pourquoi elle change tout." },
  { num: "03", title: "Se reconnecter à ses racines : un acte de puissance", desc: "L'initiation africaine, l'identité comme boussole, reprendre le contrôle." },
  { num: "04", title: "L'Afrique a résisté", desc: "Soundiata, Nzinga, Samory Touré... Une résistance militaire, spirituelle, culturelle." },
  { num: "05", title: "Ta vie ne commence pas à zéro", desc: "Tu portes un héritage. Il est temps de le reconnaître." },
  { num: "06", title: "L'éducation : entre héritage et avenir", desc: "Ce que l'école ne t'a pas dit. Ce que tu dois maintenant apprendre seul." },
  { num: "07", title: "La jeunesse face au vide : quête de sens et d'identité", desc: "Comprendre pourquoi tant de jeunes se cherchent, et comment retrouver le fil." },
  { num: "08", title: "Le miroir brisé : comment l'Afrique a été défigurée", desc: "Les mécanismes de l'effacement identitaire. Voir clair pour avancer libre." },
  { num: "09", title: "Foi et force intérieure : s'élever par la spiritualité", desc: "La foi comme ancrage. L'élévation intérieure comme pratique quotidienne." },
  { num: "10", title: "L'action éclairée : vers une vie de contribution", desc: "Du savoir à l'acte. Comment transformer la connaissance en impact réel." },
  { num: "11", title: "Tu es responsable de ta flamme", desc: "Personne ne viendra allumer ton feu à ta place. C'est ta responsabilité." },
  { num: "12", title: "L'élan : garder le feu, faire rayonner ton impact", desc: "La constance comme discipline. Le rayonnement comme mission." },
];

const bonuses = [
  "Routine KNIPO : Discipline · Foi · Connaissance · Action",
  "Les pièges à éviter sur le chemin",
  "L'importance du sport dans l'élévation",
  "La fraternité africaine — pourquoi elle compte",
  "Figures historiques africaines à (re)découvrir",
  "Lexique KNIPO — Les mots qui élèvent",
  "10 citations puissantes à méditer",
];

export default function GuidePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          paddingTop: "10rem",
          paddingBottom: "6rem",
          background: "var(--c-bg-dark)",
          overflow: "hidden",
        }}
      >
        {/* Orbes */}
        <div style={{ position: "absolute", inset: 0 }}>
          <div style={{
            position: "absolute", top: "-10%", left: "-5%",
            width: "50vw", height: "50vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,76,0.06) 0%, transparent 65%)",
          }} />
          <div style={{
            position: "absolute", bottom: "0%", right: "-10%",
            width: "40vw", height: "40vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)",
          }} />
        </div>

        <div className="container-knipo" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            {/* Left content */}
            <div>
              <SectionLabel className="animate-fade-up" style={{ marginBottom: "2rem" }}>Le Guide KNIPO</SectionLabel>

              <h1 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--c-text-primary)",
                marginBottom: "1.5rem",
                marginTop: "1.5rem",
              }}>
                Savoir,{" "}
                <span style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Conscience
                </span>
                ,{" "}Élévation.
              </h1>

              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.1rem",
                color: "var(--c-text-secondary)",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "34rem",
                marginBottom: "2.5rem",
              }}>
                51 pages pour retrouver ta puissance intérieure. Histoire africaine, connaissance de soi, discipline, foi, transmission. Par Ibrahima Camara.
              </p>

              {/* Quote */}
              <div style={{
                borderLeft: "2px solid var(--c-gold)",
                paddingLeft: "1.5rem",
                marginBottom: "2.5rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  color: "var(--c-gold)",
                  lineHeight: 1.4,
                }}>
                  "Le savoir est une lumière. À toi de l'allumer."
                </p>
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href="https://www.etsy.com/fr/listing/4357566512/savoir-est-pouvoir-histoire-africaine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <ShoppingBag size={16} />
                  Acheter sur Etsy
                </a>
                <a
                  href="https://knipo2025.systeme.io/f37fb761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  <Gift size={16} />
                  Obtenir le guide gratuit
                </a>
              </div>

              {/* Trust signals */}
              <div style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--c-border-main)",
                flexWrap: "wrap",
              }}>
                {[
                  { value: "51", label: "pages" },
                  { value: "12", label: "chapitres" },
                  { value: "7+", label: "pages bonus" },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}>
                      {item.value}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.7rem",
                      color: "var(--c-text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginTop: "0.25rem",
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book visual */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div
                  className="animate-glow-pulse"
                  style={{
                    position: "absolute", inset: "-2.5rem",
                    background: "radial-gradient(circle, rgba(212,168,76,0.12) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <div style={{
                  width: "260px",
                  height: "360px",
                  position: "relative",
                  boxShadow: "0 30px 80px rgba(21,19,24,0.7), 0 0 60px rgba(212,168,76,0.08)",
                  overflow: "hidden",
                }}>
                  <Image
                    src="/images/guide-cover.jpg"
                    alt="Le Guide KNIPO — Savoir, Conscience, Élévation"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  {/* Fallback si image absente */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(160deg, var(--c-bg-accent) 0%, var(--c-bg-dark) 100%)",
                    border: "1px solid rgba(212,168,76,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: -1,
                  }}>
                    {/* Top gradient line */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                      background: "linear-gradient(90deg, transparent, var(--c-gold), var(--c-amber), transparent)",
                    }} />
                    {/* Left spine accent */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, bottom: 0, width: "4px",
                      background: "linear-gradient(180deg, var(--c-gold), var(--c-amber))",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "6rem",
                      fontWeight: 300,
                      background: "linear-gradient(135deg, var(--c-gold), var(--c-gold-light))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                    }}>K</span>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.2rem",
                      letterSpacing: "0.5em",
                      color: "var(--c-text-primary)",
                      marginTop: "0.5rem",
                    }}>KNIPO</span>
                    <div style={{
                      width: "3.5rem", height: "1px",
                      background: "linear-gradient(90deg, transparent, var(--c-gold), transparent)",
                      margin: "1rem 0",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--c-text-muted)",
                      textAlign: "center",
                      lineHeight: 1.8,
                    }}>
                      Savoir<br />Conscience<br />Élévation
                    </span>
                    {/* Bottom gradient line */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
                      background: "linear-gradient(90deg, transparent, var(--c-amber), var(--c-gold), transparent)",
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider-gold" />

      {/* EXTRAIT */}
      <section
        id="extrait"
        style={{
          padding: "6rem 0",
          background: "var(--c-bg-elevated)",
          borderBottom: "1px solid var(--c-border-main)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: "50%", right: "-5%",
          width: "30vw", height: "30vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }} />
        <div className="container-knipo" style={{ position: "relative", zIndex: 1, maxWidth: "55rem", margin: "0 auto" }}>
          <SectionLabel style={{ marginBottom: "2rem" }}>Extrait — Chapitre 1</SectionLabel>

          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginTop: "1.5rem",
            marginBottom: "2.5rem",
            lineHeight: 1.2,
          }}>
            Pourquoi tu stagnes… sans savoir pourquoi
          </h2>

          <div style={{
            background: "var(--c-bg-surface)",
            border: "1px solid var(--c-border-main)",
            borderLeft: "3px solid var(--c-gold)",
            padding: "2.5rem",
            marginBottom: "2rem",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.05rem",
                color: "var(--c-text-primary)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                Tu avances… mais t&apos;as l&apos;impression de tourner en rond. Tu fais des efforts, mais rien ne bouge vraiment à l&apos;intérieur. Tu bosses, tu t&apos;informes, tu regardes des vidéos, tu suis des comptes de motivation… mais le feu ne prend pas.
              </p>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.05rem",
                color: "var(--c-text-secondary)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                On t&apos;a dit que c&apos;était un problème de discipline. Que c&apos;était une question de productivité, de mindset, de volonté. Et c&apos;est peut-être vrai, en partie. Mais ce qu&apos;on ne t&apos;a jamais dit, c&apos;est qu&apos;avant la discipline… il faut une direction. Avant l&apos;action, il faut un sens.
              </p>
              <p style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                fontStyle: "italic",
                color: "var(--c-gold)",
                lineHeight: 1.4,
              }}>
                "Tu stagnes parce qu&apos;il te manque une pièce centrale : toi-même."
              </p>
            </div>
          </div>

          {/* Get the guide free */}
          <div style={{
            background: "rgba(212,168,76,0.05)",
            border: "1px solid rgba(212,168,76,0.2)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                color: "var(--c-gold)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
                fontWeight: 500,
              }}>
                ✦ Accès gratuit au Guide complet
              </p>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                color: "var(--c-text-primary)",
                lineHeight: 1.6,
              }}>
                Laisse ton email et reçois le Guide KNIPO complet — 51 pages — directement dans ta boîte mail.
              </p>
            </div>
            <form
              action="https://knipo2025.systeme.io/f37fb761"
              method="GET"
              target="_blank"
              style={{ display: "flex", flexWrap: "wrap", gap: "0" }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Ton adresse email"
                style={{
                  flex: 1,
                  minWidth: "200px",
                  background: "var(--c-bg-surface)",
                  border: "1px solid var(--c-border-main)",
                  borderRight: "none",
                  padding: "0.875rem 1.25rem",
                  fontSize: "0.875rem",
                  color: "var(--c-text-primary)",
                  outline: "none",
                  fontFamily: "var(--font-dm-sans)",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                  color: "#080808",
                  padding: "0.875rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-dm-sans)",
                  whiteSpace: "nowrap",
                }}
              >
                Recevoir le Guide →
              </button>
            </form>
            <p style={{
              fontSize: "0.7rem",
              color: "var(--c-text-muted)",
              letterSpacing: "0.04em",
            }}>
              Via Systeme.io · Aucun spam · Désabonnement à tout moment
            </p>
          </div>
        </div>
      </section>

      {/* CHAPITRES */}
      <section style={{ padding: "6rem 0", background: "var(--c-bg-main)" }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "1.5rem" }}>Les 12 chapitres</SectionLabel>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginTop: "1.5rem",
            marginBottom: "3rem",
          }}>
            Un voyage intérieur en 12 étapes.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--c-border-main)",
            border: "1px solid var(--c-border-main)",
          }}>
            {chapters.map((ch, i) => {
              const colors = ["#D4A84C", "#C97A0A", "#7C3AED", "#10B981"];
              const color = colors[i % colors.length];
              return (
                <div
                  key={i}
                  style={{
                    background: "var(--c-bg-surface)",
                    padding: "1.75rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "background 0.3s",
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(90deg, ${color}, transparent)`,
                    opacity: 0.6,
                  }} />
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "2rem",
                      fontWeight: 300,
                      color: color,
                      opacity: 0.5,
                      lineHeight: 1,
                      flexShrink: 0,
                    }}>
                      {ch.num}
                    </span>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.15rem",
                        fontWeight: 400,
                        color: "var(--c-text-primary)",
                        marginBottom: "0.5rem",
                        lineHeight: 1.3,
                      }}>
                        {ch.title}
                      </h3>
                      <p style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.8rem",
                        color: "var(--c-text-secondary)",
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}>
                        {ch.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section style={{
        padding: "5rem 0",
        background: "var(--c-bg-elevated)",
        borderTop: "1px solid var(--c-border-main)",
        borderBottom: "1px solid var(--c-border-main)",
      }}>
        <div className="container-knipo">
          <SectionLabel style={{ marginBottom: "2rem" }}>En bonus</SectionLabel>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginTop: "1.5rem",
            marginBottom: "2.5rem",
          }}>
            7 sections pratiques pour aller plus loin.
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}>
            {bonuses.map((bonus, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "1.25rem",
                background: "var(--c-bg-surface)",
                border: "1px solid var(--c-border-main)",
              }}>
                <span style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#080808",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}>
                  ✓
                </span>
                <span style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  color: "var(--c-text-primary)",
                  lineHeight: 1.5,
                }}>
                  {bonus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: "6rem 0",
        background: "var(--c-bg-dark)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw", height: "40vw",
          background: "radial-gradient(ellipse, rgba(212,168,76,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container-knipo" style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}>
            Prêt à retrouver ta puissance ?
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1.05rem",
            color: "var(--c-text-secondary)",
            maxWidth: "36rem",
            margin: "0 auto 3rem",
            fontWeight: 300,
            lineHeight: 1.75,
          }}>
            Deux façons d&apos;accéder au Guide KNIPO : le recevoir gratuitement par email, ou le soutenir directement sur Etsy.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://knipo2025.systeme.io/f37fb761"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <Gift size={16} />
              Recevoir gratuitement
            </a>
            <a
              href="https://www.etsy.com/fr/listing/4357566512/savoir-est-pouvoir-histoire-africaine"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <ShoppingBag size={16} />
              Acheter sur Etsy
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
