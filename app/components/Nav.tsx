"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const leftLinks = [
  ["Collection", "/collection"],
  ["About", "/about"],
];

const rightLinks = [
  ["Muses", "/muses"],
];

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-space)",
  fontSize: "0.75rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#1C1917",
  textDecoration: "none",
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onStory = (e: Event) => setStoryOpen((e as CustomEvent).detail.open);
    window.addEventListener("storymode", onStory);
    return () => window.removeEventListener("storymode", onStory);
  }, []);

  const showLogo = !isHome || storyOpen;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#F4EFE4",
        borderBottom: "1px solid transparent",
        transition: "border-color 0.3s ease",
        padding: "0 2rem",
        height: "88px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {showLogo ? (
          leftLinks.map(([label, href]) => (
            <Link key={label} href={href} style={linkStyle}>{label}</Link>
          ))
        ) : null}
      </div>

      {/* Center */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {showLogo ? (
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => window.dispatchEvent(new CustomEvent("closestory"))}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="art is dead"
              style={{ height: "64px", width: "auto", mixBlendMode: "multiply" }}
            />
          </Link>
        ) : null}
      </div>

      {/* Right */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", justifyContent: "flex-end" }}>
        {showLogo ? (
          rightLinks.map(([label, href]) => (
            <Link key={label} href={href} style={linkStyle}>{label}</Link>
          ))
        ) : (
          [...leftLinks, ...rightLinks].map(([label, href]) => (
            <Link key={label} href={href} style={linkStyle}>{label}</Link>
          ))
        )}
      </div>
    </nav>
  );
}
