import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--c-bg-dark)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "30vw",
            height: "30vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,76,0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "2rem",
          maxWidth: "36rem",
        }}
      >
        {/* 404 number */}
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(6rem, 15vw, 10rem)",
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #D4A84C, rgba(212,168,76,0.3))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* Wolof proverb */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontStyle: "italic",
            color: "var(--c-gold)",
            marginBottom: "0.75rem",
            letterSpacing: "0.03em",
          }}
        >
          &ldquo;Ku xamul dëkk bi, dafa dem ci kanam.&rdquo;
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "var(--c-text-muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}
        >
          Wolof · &ldquo;Celui qui ne connaît pas son chemin avance quand même.&rdquo;
        </p>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "var(--c-text-primary)",
            marginBottom: "1rem",
            lineHeight: 1.3,
          }}
        >
          Cette page n&apos;existe pas (encore).
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "var(--c-text-secondary)",
            marginBottom: "3rem",
            lineHeight: 1.7,
          }}
        >
          Le lien que tu as suivi ne mène nulle part. Mais la bibliothèque et le guide t&apos;attendent.
        </p>

        <div
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/" className="btn-outline-dark" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <ArrowLeft size={15} />
            Accueil
          </Link>
          <Link href="/bibliotheque" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <BookOpen size={15} />
            Bibliothèque
          </Link>
          <Link href="/guide" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Le Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
