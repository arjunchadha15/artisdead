import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, Caveat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "art is dead",
  description: "The process is the point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${spaceGrotesk.variable} ${caveat.variable}`}>
        {children}
        <footer style={{
          backgroundColor: "#FFFFFF",
          padding: "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          borderTop: "1px solid #1C191712",
        }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
            {[["Collection", "/collection"], ["About", "/about"], ["Muses", "/muses"]].map(([label, href]) => (
              <Link key={label} href={href} style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1C191750",
                textDecoration: "none",
              }}>
                {label}
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[["FAQ", "/faq"], ["Returns", "/returns"], ["Privacy", "/privacy"], ["Terms", "/terms"]].map(([label, href]) => (
              <Link key={label} href={href} style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1C191730",
                textDecoration: "none",
              }}>
                {label}
              </Link>
            ))}
          </div>
          <p style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "#1C191725",
            margin: 0,
          }}>
            © {new Date().getFullYear()} Art is Dead
          </p>
        </footer>
      </body>
    </html>
  );
}
