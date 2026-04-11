"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Zap, Globe, Heart, ArrowUpRight, ShoppingBag, Gift } from "lucide-react";
import { articles } from "@/lib/articles";

const marqueeItems = [
  { text: "Histoire Africaine", serif: true },
  { text: "Xam-Xam · Connaissance", serif: false },
  { text: "Élévation Consciente", serif: true },
  { text: "Discipline & Vision", serif: false },
  { text: "Sakku Xam-Xam", serif: true },
  { text: "Reconnexion aux Racines", serif: false },
  { text: "Foi & Force Intérieure", serif: true },
  { text: "Développement Personnel", serif: false },
  { text: "Ibrahima Camara", serif: true },
];

const pillars = [
  {
    icon: Globe,
    title: "Histoire Africaine",
    desc: "Les civilisations, figures et savoirs qui ont façonné l'humanité — sans filtre ni effacement.",
    color: "#D4A84C",
  },
  {
    icon: BookOpen,
    title: "Connaissance de Soi",
    desc: "L'introspection comme premier acte de liberté. Se comprendre avant de prétendre comprendre le monde.",
    color: "#C97A0A",
  },
  {
    icon: Zap,
    title: "Discipline & Vision",
    desc: "Les piliers d'une vie construite avec intention, profondeur et responsabilité.",
    color: "#7C3AED",
  },
  {
    icon: Heart,
    title: "Transmission",
    desc: "Construire une génération plus lucide, plus forte, plus responsable. Transmettre ce qu'on a compris.",
    color: "#10B981",
  },
];

const featured = [
  {
    type: "Article",
    typeColor: "#D4A84C",
    title: "L'histoire africaine comme fondation de l'identité",
    excerpt: "Comprendre d'où l'on vient est le premier acte de lucidité.",
    tag: "Histoire",
    href: "/bibliotheque/histoire-africaine-fondation-identite",
  },
  {
    type: "Article",
    typeColor: "#10B981",
    title: "La discipline est une forme de liberté",
    excerpt: "Ceux qui se contraignent volontairement deviennent les plus libres.",
    tag: "Discipline",
    href: "/bibliotheque/discipline-liberte-vraie",
  },
  {
    type: "Article",
    typeColor: "#7C3AED",
    title: "Se connaître soi-même : le premier acte de liberté",
    excerpt: "Avant de changer le monde, il faut comprendre qui on est.",
    tag: "Connaissance de Soi",
    href: "/bibliotheque/connaissance-soi-acte-liberte",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — ARDOISE SOMBRE */}
      <section
        style={{
          background: "var(--c-bg-dark)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
        }}
      >
        {/* Motif de fond subtil */}
        <div
          className="pattern-adinkra"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.35,
            pointerEvents: "none",
          }}
        />
        {/* Gradient overlay doux */}
        <div style={{
          position: "absolute",
          top: 0, right: 0,
          width: "50%", height: "100%",
          background: "linear-gradient(to left, rgba(21,19,24,0) 0%, var(--c-bg-dark) 60%)",
          zIndex: 2,
          pointerEvents: "none",
        }} />

        <div className="container-knipo" style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              minHeight: "calc(100vh - 10rem)",
            }}
          >
            {/* LEFT — Texte */}
            <div>
              {/* Label */}
              <div className="animate-fade-up" style={{ marginBottom: "2rem" }}>
                <span className="label-dark">Knowledge Is Power</span>
              </div>

              {/* Tag Wolof */}
              <div
                className="animate-fade-up anim-delay-1"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "linear-gradient(135deg, var(--c-purple-deep), var(--c-purple-mid))",
                  color: "var(--c-gold)",
                  padding: "0.35rem 1rem",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-dm-sans)",
                  letterSpacing: "0.1em",
                  marginBottom: "1.5rem",
                }}
              >
                ✦ Sakku Xam-Xam — Cherche le Savoir
              </div>

              {/* Heading principal */}
              <h1
                className="animate-fade-up anim-delay-1"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(3rem, 6vw, 6rem)",
                  fontWeight: 300,
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                  color: "var(--c-text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Réveille ta
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  conscience.
                </span>
                <br />
                <span style={{ fontSize: "0.65em", fontStyle: "normal", letterSpacing: "0em" }}>
                  Reconnecte-toi à ton histoire.
                </span>
              </h1>

              {/* Sous-titre */}
              <p
                className="animate-fade-up anim-delay-2"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.1rem",
                  color: "var(--c-text-secondary)",
                  lineHeight: 1.75,
                  maxWidth: "36rem",
                  marginBottom: "2.5rem",
                  fontWeight: 300,
                }}
              >
                KNIPO est une plateforme d&apos;élévation consciente. Histoire africaine, connaissance de soi, discipline, foi — pour ceux qui choisissent de{" "}
                <span style={{ color: "var(--c-text-primary)", fontWeight: 500 }}>comprendre avant d&apos;agir.</span>
              </p>

              {/* CTAs */}
              <div
                className="animate-fade-up anim-delay-3"
                style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}
              >
                <Link href="/guide" className="btn-primary">
                  Découvrir le Guide
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contenus" className="btn-outline-light">
                  Explorer les contenus
                </Link>
              </div>

              {/* Stats */}
              <div
                className="animate-fade-up anim-delay-3"
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid var(--c-border-main)",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { n: "12", label: "Chapitres" },
                  { n: "51", label: "Pages de savoir" },
                  { n: "∞", label: "Raisons de s'élever" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      lineHeight: 1,
                      background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      {s.n}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.7rem",
                      color: "var(--c-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "0.25rem",
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Couverture du Guide */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                {/* Halo derrière le livre */}
                <div
                  className="animate-glow-pulse"
                  style={{
                    position: "absolute",
                    inset: "-3rem",
                    background: "radial-gradient(ellipse, rgba(212,168,76,0.2) 0%, transparent 65%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
                {/* Image couverture */}
                <div style={{
                  width: "320px",
                  height: "460px",
                  position: "relative",
                  boxShadow: "0 40px 100px rgba(21,19,24,0.7), 0 10px 40px rgba(21,19,24,0.4)",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}>
                  <Image
                    src="/images/guide-cover.jpg"
                    alt="Le Guide KNIPO — Savoir, Conscience, Élévation"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  {/* Fallback visible tant que guide-cover.jpg n'est pas placé */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(160deg, #1A0B2E 0%, #3D1A6E 40%, #C97A0A 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "5rem",
                      fontWeight: 300,
                      color: "#D4A84C",
                      lineHeight: 1,
                    }}>K</span>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.2rem",
                      letterSpacing: "0.5em",
                      color: "var(--c-text-primary)",
                      marginTop: "0.5rem",
                    }}>KNIPO</span>
                    <div style={{ width: "3rem", height: "1px", background: "#D4A84C", margin: "1rem 0" }} />
                    <span style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(240,236,228,0.6)",
                      textAlign: "center",
                    }}>
                      Le Guide de<br />l&apos;Élévation Consciente
                    </span>
                  </div>
                </div>

                {/* Badge flottant */}
                <div style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "-2rem",
                  background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                  color: "var(--c-purple-deep)",
                  padding: "0.75rem 1.25rem",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow: "0 8px 24px rgba(212,168,76,0.4)",
                }}>
                  Disponible sur Etsy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE — VIOLET PROFOND */}
      <section
        style={{
          background: "#1A0B2E",
          borderTop: "1px solid var(--c-border-main)",
          borderBottom: "1px solid var(--c-border-main)",
          padding: "1rem 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "0 2rem",
                fontFamily: item.serif ? "var(--font-cormorant)" : "var(--font-dm-sans)",
                fontSize: item.serif ? "1.1rem" : "0.7rem",
                fontStyle: item.serif ? "italic" : "normal",
                color: item.serif ? "var(--c-gold)" : "rgba(212,168,76,0.5)",
                letterSpacing: item.serif ? "0.02em" : "0.12em",
                textTransform: item.serif ? "none" : "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {item.text}
              <span style={{ color: "rgba(212,168,76,0.3)", fontSize: "0.6rem" }}>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* CITATION — ARDOISE PROFONDE */}
      <section
        style={{
          background: "var(--c-bg-dark)",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="pattern-adinkra" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div className="container-knipo" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "4rem",
            color: "var(--c-gold)",
            opacity: 0.3,
            lineHeight: 0.5,
            marginBottom: "2rem",
          }}>&ldquo;</div>
          <blockquote>
            <p style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--c-text-primary)",
              maxWidth: "56rem",
              margin: "0 auto 2rem",
              lineHeight: 1.2,
            }}>
              Un peuple qui ne connaît pas son histoire, son origine et sa culture est comme{" "}
              <span style={{
                background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                un arbre sans racines.
              </span>
            </p>
            <footer>
              <span className="label-dark" style={{ justifyContent: "center" }}>Marcus Garvey</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* MISSION / PILLIERS — ARDOISE ÉLEVÉE */}
      <section style={{ background: "var(--c-bg-elevated)", padding: "6rem 0" }}>
        <div className="container-knipo">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem" }}>
            <span className="label-dark">La mission KNIPO</span>
            <h2 style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--c-text-primary)",
              lineHeight: 1.1,
              maxWidth: "40rem",
            }}>
              Quatre piliers pour une vie{" "}
              <span style={{ fontStyle: "italic", color: "var(--c-amber)" }}>construite avec intention</span>.
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}>
            {pillars.map((p, i) => (
              <div
                key={i}
                className="card-dark"
                style={{ padding: "2.5rem", position: "relative", overflow: "hidden" }}
              >
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  background: p.color,
                  opacity: 0.8,
                }} />
                <p.icon size={24} style={{ color: p.color, marginBottom: "1.25rem" }} />
                <h3 style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--c-text-primary)",
                  marginBottom: "0.75rem",
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  color: "var(--c-text-secondary)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/a-propos" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--c-amber)",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "gap 0.3s",
            }}>
              Découvrir la vision complète <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENUS RÉCENTS — ARDOISE PRINCIPALE */}
      <section
        style={{
          background: "var(--c-bg-main)",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="pattern-adinkra" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
        <div className="container-knipo" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <div>
              <span className="label-dark" style={{ marginBottom: "1rem", display: "flex" }}>Contenus récents</span>
              <h2 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 300,
                color: "var(--c-text-primary)",
                marginTop: "0.75rem",
              }}>
                Articles, vidéos, réflexions
              </h2>
            </div>
            <Link href="/contenus" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--c-gold)",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.875rem",
              textDecoration: "none",
            }}>
              Tout explorer <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {featured.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
                <article
                  className="card-dark"
                  style={{ padding: "2rem", height: "100%", position: "relative", overflow: "hidden", cursor: "pointer" }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(90deg, ${item.typeColor}, transparent)`,
                  }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <span style={{
                      fontSize: "0.65rem",
                      fontFamily: "var(--font-dm-sans)",
                      color: item.typeColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontWeight: 600,
                      background: `${item.typeColor}18`,
                      padding: "0.3rem 0.75rem",
                    }}>{item.type}</span>
                    <span style={{ fontSize: "0.65rem", color: "var(--c-text-muted)", letterSpacing: "0.08em" }}>{item.tag}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "var(--c-text-primary)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.875rem",
                    color: "var(--c-text-secondary)",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}>{item.excerpt}</p>
                  <div style={{
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--c-border-main)",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.8rem", color: item.typeColor }}>
                      Lire <ArrowUpRight size={12} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDE PROMO — ARDOISE ÉLEVÉE */}
      <section style={{ background: "var(--c-bg-elevated)", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div className="pattern-adinkra" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container-knipo" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="guide-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div style={{
                  width: "260px",
                  height: "360px",
                  position: "relative",
                  boxShadow: "0 30px 80px rgba(21,19,24,0.6)",
                  overflow: "hidden",
                }}>
                  <Image
                    src="/images/guide-cover.jpg"
                    alt="Guide KNIPO"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(160deg, #1A0B2E, #3D1A6E 50%, #C97A0A)",
                    zIndex: 1,
                    display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                  }}>
                    <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "5rem", color: "#D4A84C", fontWeight: 300 }}>K</span>
                  </div>
                </div>
                <div style={{
                  position: "absolute",
                  top: "-1rem", left: "-1rem",
                  width: "100%", height: "100%",
                  border: "1px solid var(--c-border-light)",
                  zIndex: -1,
                }} />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="label-dark" style={{ marginBottom: "1.5rem", display: "flex" }}>Le Guide KNIPO</span>
              <h2 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--c-text-primary)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                marginTop: "1rem",
              }}>
                &ldquo;Réveille ta conscience.<br />
                <span style={{ fontStyle: "italic", color: "var(--c-amber)" }}>Deviens inarrêtable.&rdquo;</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                color: "var(--c-text-secondary)",
                lineHeight: 1.75,
                fontWeight: 300,
                maxWidth: "30rem",
                marginBottom: "2.5rem",
              }}>
                51 pages. 12 chapitres. Histoire africaine, connaissance de soi, discipline, foi. Par Ibrahima Camara — le guide que tu aurais voulu avoir plus tôt.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="https://www.etsy.com/fr/listing/4357566512/savoir-est-pouvoir-histoire-africaine" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ShoppingBag size={16} />
                  Obtenir sur Etsy
                </a>
                <Link href="/guide" className="btn-outline-light">
                  <Gift size={16} />
                  Version gratuite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉDIATHÈQUE — VIOLET PROFOND */}
      <section
        style={{
          background: "#1A0B2E",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="pattern-adinkra" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div className="container-knipo" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <span className="label-dark" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>Médiathèque KNIPO</span>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}>
            Une bibliothèque du savoir,{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              organisée et vivante.
            </span>
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1.05rem",
            color: "var(--c-text-secondary)",
            maxWidth: "40rem",
            margin: "0 auto 2.5rem",
            fontWeight: 300,
            lineHeight: 1.75,
          }}>
            Livres, documentaires, podcasts — classés par thème, sélectionnés avec exigence. Et bientôt : des espaces physiques à Dakar, pour les jeunes qui méritent mieux que le vide.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "3rem" }}>
            {["Histoire africaine", "Développement personnel", "Philosophie", "Foi & spiritualité", "Discipline", "Identité"].map((tag, i) => {
              const colors = ["#D4A84C", "#C97A0A", "#7C3AED", "#10B981", "#D4A84C", "#C97A0A"];
              return (
                <span key={tag} style={{
                  padding: "0.4rem 1rem",
                  border: `1px solid ${colors[i]}40`,
                  color: colors[i],
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-dm-sans)",
                  letterSpacing: "0.05em",
                  background: `${colors[i]}10`,
                }}>
                  {tag}
                </span>
              );
            })}
          </div>
          <Link href="/mediatheque" className="btn-gold">
            Explorer la Médiathèque <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* BIBLIOTHÈQUE PREVIEW */}
      <section style={{ background: "var(--c-bg-dark)", padding: "6rem 0", borderTop: "1px solid var(--c-border-main)" }}>
        <div className="container-knipo">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{
                display: "inline-block",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--c-gold)",
                fontFamily: "var(--font-dm-sans)",
                marginBottom: "0.75rem",
              }}>Bibliothèque</span>
              <h2 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "var(--c-text-primary)",
                lineHeight: 1.15,
                margin: 0,
              }}>
                Des textes qui{" "}
                <span style={{ fontStyle: "italic", color: "var(--c-gold)" }}>creusent.</span>
              </h2>
            </div>
            <Link href="/bibliotheque" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.875rem",
              color: "var(--c-gold)",
              textDecoration: "none",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}>
              Tous les articles <ArrowUpRight size={15} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1px", background: "var(--c-border-main)", border: "1px solid var(--c-border-main)" }} className="biblio-preview-grid">
            {articles.slice(0, 4).map((article, i) => {
              const catColors: Record<string, string> = {
                Histoire: "#D4A84C",
                "Figures Historiques": "#C97A0A",
                "Connaissance de Soi": "#7C3AED",
                Discipline: "#10B981",
                "Foi & Spiritualité": "#60a5fa",
                Société: "#f472b6",
                Vision: "#e879f9",
              };
              const color = catColors[article.category] || "#D4A84C";
              return (
                <Link key={article.slug} href={`/bibliotheque/${article.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className="biblio-row"
                    style={{
                      padding: "1.75rem 2rem",
                      background: "var(--c-bg-main)",
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      transition: "background 0.25s",
                      cursor: "pointer",
                      borderLeft: i === 0 ? `3px solid ${color}` : "none",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      color: "var(--c-border-main)",
                      fontWeight: 300,
                      minWidth: "2rem",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.35rem" }}>
                        <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color, fontFamily: "var(--font-dm-sans)" }}>
                          {article.category}
                        </span>
                        <span style={{ fontSize: "0.65rem", color: "var(--c-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="biblio-title" style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 300,
                        fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                        color: "var(--c-text-primary)",
                        lineHeight: 1.3,
                        margin: 0,
                        transition: "color 0.25s",
                      }}>
                        {article.title}
                      </h3>
                    </div>
                    <ArrowUpRight size={18} style={{ color: "var(--c-text-muted)", flexShrink: 0 }} className="biblio-arrow" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/bibliotheque" className="btn-outline-dark">
              Voir les {articles.length} articles <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER — ARDOISE ÉLEVÉE */}
      <section style={{ background: "var(--c-bg-elevated)", padding: "6rem 0" }}>
        <div className="container-knipo" style={{ textAlign: "center", maxWidth: "42rem", margin: "0 auto" }}>
          <span className="label-dark" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>Communauté KNIPO</span>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            marginTop: "1rem",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}>
            Reste dans la profondeur.
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1rem",
            color: "var(--c-text-secondary)",
            marginBottom: "2.5rem",
            fontWeight: 300,
            lineHeight: 1.7,
          }}>
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
                fontFamily: "var(--font-dm-sans)",
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, var(--c-purple-deep), var(--c-purple-mid))",
                color: "var(--c-gold)",
                padding: "1rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans)",
                whiteSpace: "nowrap",
              }}
            >
              Rejoindre →
            </button>
          </form>
          <p style={{ marginTop: "1rem", fontSize: "0.7rem", color: "var(--c-text-muted)", letterSpacing: "0.05em" }}>
            Aucun spam · Désabonnement à tout moment
          </p>
        </div>
      </section>
    </>
  );
}
