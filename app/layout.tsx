import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "KNIPO — Knowledge Is Power",
    template: "%s | KNIPO",
  },
  description:
    "KNIPO est une plateforme éducative et culturelle dédiée à l'élévation des consciences. Histoire africaine, développement personnel, connaissance de soi.",
  keywords: ["connaissance", "histoire africaine", "développement personnel", "éducation", "KNIPO"],
  openGraph: {
    title: "KNIPO — Knowledge Is Power",
    description:
      "Une plateforme dédiée à l'élévation des consciences. Histoire africaine, développement personnel, transmission du savoir.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ backgroundColor: "var(--c-bg-main)", color: "var(--c-text-primary)" }}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
