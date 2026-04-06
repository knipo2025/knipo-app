"use client";

import Link from "next/link";

const navLinks = {
  "Explorer": [
    { href: "/a-propos", label: "À propos" },
    { href: "/bibliotheque", label: "Bibliothèque" },
    { href: "/contenus", label: "Contenus" },
    { href: "/mediatheque", label: "Médiathèque" },
    { href: "/guide", label: "Le Guide KNIPO" },
  ],
  "Agir": [
    { href: "/soutenir", label: "Soutenir le projet" },
    { href: "https://www.etsy.com/fr/listing/4357566512/savoir-est-pouvoir-histoire-africaine", label: "Boutique Etsy ↗", external: true },
    { href: "https://t.me/+xGJa6BKvhRE5MjJk", label: "Communauté Telegram ↗", external: true },
  ],
};

const socialLinks = [
  {
    name: "YouTube",
    href: "https://youtube.com/@knipo2025",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@knipo.ibrahim",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/+xGJa6BKvhRE5MjJk",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: "Etsy",
    href: "https://www.etsy.com/fr/listing/4357566512/savoir-est-pouvoir-histoire-africaine",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.194 0C4.747.266 1.306 3.86.792 8.537l-.05.5-.025.5C.25 14.72.25 15.26.25 17.39v1.96c0 2.37.01 2.89.1 3.59.45 3.48 3.14 6.06 6.5 6.06h10.3c3.47 0 6.16-2.58 6.59-6.06.09-.7.1-1.22.1-3.59v-1.96c0-2.13 0-2.67-.47-7.35l-.03-.5-.05-.5C22.78 3.86 19.35.265 14.91 0H9.194zm5.306 6.55c.74 0 1.27.15 1.77.45.5.29.89.69 1.17 1.17.26.46.37.93.37 1.44 0 .98-.37 1.77-1.11 2.38-.73.61-1.72.96-2.94.96h-1.3v.63c.01.42.1.73.24.91.15.18.34.26.57.26.27 0 .52-.13.75-.39l.43-.5 1.35 1.37-.31.4c-.26.33-.61.62-1.05.88-.43.25-.93.38-1.48.38-1 0-1.77-.33-2.32-.98-.55-.65-.83-1.59-.83-2.8V9.1c0-1.28.3-2.23.89-2.84.6-.62 1.41-.92 2.44-.92l1.12.26z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--c-bg-dark)", color: "var(--c-text-primary)" }}>
      <div className="container-knipo" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>

        {/* Grid principal : 4 colonnes sur desktop, 2 sur mobile */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem 4rem",
        }}>
          {/* Colonne 1 — Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", flexDirection: "column", lineHeight: 1, marginBottom: "1.25rem" }}>
              <span style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.75rem",
                fontWeight: 300,
                letterSpacing: "0.3em",
                color: "var(--c-text-light)",
              }}>
                KNIPO
              </span>
              <span style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, var(--c-gold), var(--c-amber))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}>
                Knowledge Is Power
              </span>
            </Link>

            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.9rem",
              color: "#B0A8A0",
              lineHeight: 1.7,
              maxWidth: "22rem",
              fontWeight: 400,
              marginBottom: "1.75rem",
            }}>
              Une plateforme dédiée à l&apos;élévation des consciences. Histoire africaine, connaissance de soi — pour une génération plus lucide, plus forte, plus libre.
            </p>

            {/* Réseaux sociaux */}
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.75rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(212,168,76,0.1)",
                    border: "1px solid rgba(212,168,76,0.3)",
                    color: "#C8C3BC",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,168,76,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#D4A84C";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,168,76,0.6)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,168,76,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C8C3BC";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,168,76,0.3)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter mini */}
            <div>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.6rem",
                color: "var(--c-gold)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
                fontWeight: 600,
              }}>
                Rejoindre la communauté
              </p>
              <form style={{ display: "flex", maxWidth: "22rem" }}>
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--c-dark-border)",
                    borderRight: "none",
                    padding: "0.65rem 1rem",
                    fontSize: "0.8rem",
                    color: "var(--c-text-light)",
                    outline: "none",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, var(--c-gold), var(--c-amber))",
                    color: "var(--c-purple-deep)",
                    padding: "0.65rem 1rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  →
                </button>
              </form>
            </div>
          </div>

          {/* Colonnes liens */}
          {Object.entries(navLinks).map(([section, links]) => (
            <div key={section}>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.6rem",
                color: "var(--c-gold)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}>
                {section}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "0.875rem",
                          color: "#A89F96",
                          textDecoration: "none",
                          transition: "color 0.3s",
                          fontWeight: 400,
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#D4A84C"}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#A89F96"}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "0.875rem",
                          color: "#A89F96",
                          textDecoration: "none",
                          transition: "color 0.3s",
                          fontWeight: 400,
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bas du footer */}
        <div style={{
          marginTop: "3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--c-dark-border)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            color: "var(--c-text-muted-light)",
          }}>
            © {new Date().getFullYear()} KNIPO — Knowledge Is Power. Tous droits réservés.{" "}
            <a href="mailto:contact@knipoorg" style={{ color: "var(--c-gold)", textDecoration: "none" }}>
              contact@knipoorg
            </a>
          </p>
          <p style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.95rem",
            color: "var(--c-gold)",
            fontStyle: "italic",
            opacity: 0.6,
          }}>
            &ldquo;Le savoir est une lumière. À toi de l&apos;allumer.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
