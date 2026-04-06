"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/bibliotheque", label: "Bibliothèque" },
  { href: "/contenus", label: "Contenus" },
  { href: "/mediatheque", label: "Médiathèque" },
  { href: "/guide", label: "Le Guide", highlight: true },
  { href: "/soutenir", label: "Soutenir" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    const handleScroll = () => setScrolled(window.scrollY > 60);

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: "all 0.4s",
      background: scrolled ? "rgba(20,18,25,0.97)" : "rgba(20,18,25,0.5)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid rgba(212,168,76,0.2)" : "1px solid var(--c-border-main)",
    }}>
      <div className="container-knipo" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "4.5rem",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.6rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            color: "#F0ECE4",
          }}>
            KNIPO
          </span>
          <span style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, var(--c-gold), var(--c-amber))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 700,
          }}>
            Knowledge Is Power
          </span>
        </Link>

        {/* Desktop nav — affiché si isDesktop */}
        {isDesktop && (
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.875rem",
                color: link.highlight ? "#D4A84C" : "#C8C3BC",
                textDecoration: "none",
                transition: "color 0.3s",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}>
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* CTA Desktop */}
        {isDesktop && (
          <Link href="/guide" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.65rem 1.4rem",
            background: "linear-gradient(135deg, #D4A84C, #C97A0A)",
            color: "#1C1B22",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.8rem",
            fontWeight: 700,
            textDecoration: "none",
            border: "none",
            transition: "all 0.3s",
            letterSpacing: "0.05em",
          }}>
            Accéder au Guide
          </Link>
        )}

        {/* Mobile toggle */}
        {!isDesktop && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--c-text-primary)",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {!isDesktop && (
        <div style={{
          overflow: "hidden",
          maxHeight: isOpen ? "100vh" : "0",
          transition: "max-height 0.4s ease",
          background: "var(--c-bg-main)",
          borderTop: "1px solid var(--c-border-main)",
        }}>
          <nav style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.75rem",
                fontWeight: 300,
                color: link.highlight ? "var(--c-amber)" : "var(--c-text-primary)",
                textDecoration: "none",
                padding: "0.875rem 0",
                borderBottom: "1px solid var(--c-border-main)",
                display: "block",
              }} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div style={{ paddingTop: "1.25rem" }}>
              <Link href="/guide" style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.875rem",
                background: "linear-gradient(135deg, var(--c-purple-deep), var(--c-purple-mid))",
                color: "var(--c-gold)",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(212,168,76,0.3)",
              }} onClick={() => setIsOpen(false)}>
                Accéder au Guide
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
