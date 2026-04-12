"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "../components/Nav";

type TooltipKey = "muses" | "practice" | null;

const tooltipContent: Record<Exclude<TooltipKey, null>, { text: string; href: string }> = {
  muses: {
    text: "Kobe. Frida. Miles. Tubman. People who gave everything to what they loved.",
    href: "/muses",
  },
  practice: {
    text: "A practice. Fifteen years from now. What did you walk away from?",
    href: "/practice",
  },
};

function InteractivePhrase({
  id,
  active,
  onEnter,
  onLeave,
  children,
}: {
  id: Exclude<TooltipKey, null>;
  active: TooltipKey;
  onEnter: () => void;
  onLeave: () => void;
  children: ReactNode;
}) {
  const tooltip = tooltipContent[id];
  const isActive = active === id;

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <Link
        href={tooltip.href}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          color: isActive ? "#B91C1C" : "inherit",
          textDecoration: "none",
          borderBottom: `1px dotted ${isActive ? "#B91C1C" : "#1C191745"}`,
          transition: "color 0.2s, border-color 0.2s",
          cursor: "pointer",
        }}
      >
        {children}
      </Link>
      {isActive && (
        <span
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#1C1917",
            color: "#F4EFE4",
            padding: "0.85rem 1.1rem",
            width: "210px",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.5,
            pointerEvents: "none",
            zIndex: 10,
            whiteSpace: "normal",
          }}
        >
          {tooltip.text}
        </span>
      )}
    </span>
  );
}

export default function About() {
  const [active, setActive] = useState<TooltipKey>(null);

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          minHeight: "55vh",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "120px",
          paddingBottom: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#B91C1C",
              marginBottom: "1.5rem",
            }}
          >
            About
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 700,
              color: "#1C1917",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            Art is Dead.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          padding: "7rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {/* Pull quote */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#1C1917",
              margin: "0 0 4rem",
              borderLeft: "2px solid #B91C1C",
              paddingLeft: "2rem",
            }}
          >
            The art of things is slowly dying. Not because people have stopped
            making, but because we&rsquo;ve stopped believing the making is
            the point.
          </p>

          <div
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#1C191785",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <p style={{ margin: 0 }}>
              We live in a world that is really good at making you feel like
              your dreams aren&rsquo;t realistic. Algorithms decide what you
              see. Fear gets clicks. And slowly, without realizing it, people
              stop chasing the things they actually care about.
            </p>

            <p style={{ margin: 0 }}>
              Art is Dead came from a simple belief: that life is yours to
              direct, and{" "}
              <InteractivePhrase
                id="muses"
                active={active}
                onEnter={() => setActive("muses")}
                onLeave={() => setActive(null)}
              >
                the people who have changed the world
              </InteractivePhrase>
              {" "}were not special. They just decided to show up for what they
              loved and believed their actions could mean something. That&rsquo;s it.
            </p>

            <p style={{ margin: 0 }}>
              Art is Dead exists to remind you of that. Because if you{" "}
              <InteractivePhrase
                id="practice"
                active={active}
                onEnter={() => setActive("practice")}
                onLeave={() => setActive(null)}
              >
                close your eyes
              </InteractivePhrase>
              {" "}and picture yourself 15 years from now, having walked away
              from every dream that actually mattered to you, feeling the
              regret of knowing what you should have done and not doing it,
              and then you come back to right now, something shifts.
            </p>

            <p style={{ margin: 0 }}>
              You still have time. You still have the choice. Everyone has
              something they love doing. Not for money, not for an audience,
              just because it feels right. A kid who wants to play basketball
              isn&rsquo;t thinking about a contract. They just love playing.
              Art is Dead is here to remind you of yours. Go do it.
            </p>
          </div>

          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "#B91C1C",
              marginTop: "4rem",
              marginBottom: "4rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "#1C191760",
              marginBottom: "2rem",
            }}
          >
            Still with us? Keep going.
          </p>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F4EFE4",
              textDecoration: "none",
              backgroundColor: "#B91C1C",
              padding: "1rem 2.5rem",
              display: "inline-block",
            }}
          >
            Talk to the brand →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          padding: "7rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "#F4EFE460",
            marginBottom: "1rem",
          }}
        >
          Wear the work.
        </p>
        <Link
          href="/collection"
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F4EFE4",
            textDecoration: "none",
            border: "1px solid #F4EFE440",
            padding: "1rem 2.5rem",
            display: "inline-block",
          }}
        >
          View the collection →
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#F4EFE4",
          padding: "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Home", "/"], ["Collection", "/collection"]].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#F4EFE450",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
