"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#F4EFE4",
        borderBottom: scrolled ? "1px solid #1C191720" : "1px solid transparent",
        transition: "border-color 0.3s ease",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-space)",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#1C1917",
          textDecoration: "none",
        }}
      >
        Home
      </Link>

      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {[["Collection", "/collection"], ["Muses", "/muses"], ["About", "/about"]].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1C1917",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
