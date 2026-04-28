"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "../components/Nav";

/* ─── interactive phrase ─────────────────────────────────── */

type TooltipKey = "muses" | null;

const tooltipContent = {
  muses: {
    text: "Kobe. Frida. Miles. Tubman. People who gave everything to what they loved.",
    href: "/muses",
  },
};

function InteractivePhrase({
  id,
  active,
  onEnter,
  onLeave,
  children,
}: {
  id: "muses";
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
          color: isActive ? "#B91C1C" : "#C0524A",
          textDecoration: "none",
          borderBottom: `1px dotted ${isActive ? "#B91C1C" : "#C0524A90"}`,
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

/* ─── close-your-eyes phrase ─────────────────────────────── */

function CloseYourEyes({
  onActivate,
  children,
}: {
  onActivate: (origin: { x: number; y: number }) => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    onActivate({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };

  return (
    <span
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "#B91C1C" : "#C0524A",
        textDecoration: "none",
        borderBottom: `1px dotted ${hovered ? "#B91C1C" : "#C0524A90"}`,
        transition: "color 0.2s, border-color 0.2s",
        cursor: "pointer",
        display: "inline",
      }}
    >
      {children}
    </span>
  );
}

/* ─── star overlay ───────────────────────────────────────── */

interface StarParticle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  twinkle: number;
  drift: number;
  driftPhase: number;
}

type Phase = "exploding" | "floating" | "imploding";

function StarOverlay({
  origin,
  onClose,
}: {
  origin: { x: number; y: number };
  onClose: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgOpacity = useRef(0);
  const phase = useRef<Phase>("exploding");
  const implodeStart = useRef(0);
  const rafRef = useRef(0);
  const stars = useRef<StarParticle[]>([]);
  const t = useRef(0);
  const closed = useRef(false);
  const bgRef = useRef<HTMLDivElement>(null);

  const startClose = useCallback(() => {
    if (phase.current === "imploding") return;
    phase.current = "imploding";
    implodeStart.current = t.current;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = canvas.width;
    const H = canvas.height;
    const N = 280;
    const list: StarParticle[] = [];

    for (let i = 0; i < N; i++) {
      // Spread stars to reach every corner — pick a random final destination
      // across the full viewport, then compute direction + enough speed to get there
      const destX = Math.random() * W;
      const destY = Math.random() * H;
      const dx = destX - origin.x;
      const dy = destY - origin.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      // velocity that will place star near dest after ~90 frames with 0.93 friction
      // sum of geometric series: v * (1 - 0.93^90) / (1-0.93) ≈ v * 13.7
      const v = dist / 13.7;
      list.push({
        x: origin.x,
        y: origin.y,
        vx: (dx / dist) * v * (0.8 + Math.random() * 0.4),
        vy: (dy / dist) * v * (0.8 + Math.random() * 0.4),
        size: 0.5 + Math.random() * 2.4,
        opacity: 0,
        maxOpacity: 0.3 + Math.random() * 0.7,
        twinkle: Math.random() * Math.PI * 2,
        drift: 0.08 + Math.random() * 0.22,
        driftPhase: Math.random() * Math.PI * 2,
      });
    }
    stars.current = list;

    const animate = () => {
      t.current++;
      const ti = t.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (phase.current === "exploding") {
        bgOpacity.current = Math.min(1, bgOpacity.current + 0.045);
        for (const s of list) {
          s.x += s.vx;
          s.y += s.vy;
          s.vx *= 0.93;
          s.vy *= 0.93;
          s.opacity = Math.min(s.maxOpacity, s.opacity + 0.02);
        }
        if (ti > 110) phase.current = "floating";
      } else if (phase.current === "floating") {
        for (const s of list) {
          s.x += Math.cos(ti * s.drift * 0.01 + s.driftPhase) * 0.3;
          s.y += Math.sin(ti * s.drift * 0.008 + s.driftPhase * 1.4) * 0.3;
          s.opacity = s.maxOpacity * (0.55 + 0.45 * Math.sin(ti * 0.035 + s.twinkle));
        }
      } else if (phase.current === "imploding") {
        const elapsed = ti - implodeStart.current;
        const pull = 0.05 + elapsed * 0.002;
        bgOpacity.current = Math.max(0, bgOpacity.current - 0.04);
        let allClose = true;
        for (const s of list) {
          const dx = origin.x - s.x;
          const dy = origin.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          s.x += dx * pull;
          s.y += dy * pull;
          s.opacity = Math.max(0, s.opacity - 0.018);
          if (dist > 8) allClose = false;
        }
        if (allClose || bgOpacity.current <= 0) {
          if (!closed.current) {
            closed.current = true;
            cancelAnimationFrame(rafRef.current);
            onClose();
          }
          return;
        }
      }

      // origin glow burst
      if (phase.current === "exploding" && ti < 50) {
        const glow = ctx.createRadialGradient(origin.x, origin.y, 0, origin.x, origin.y, 120);
        const a = (1 - ti / 50) * 0.55;
        glow.addColorStop(0, `rgba(255,210,160,${a})`);
        glow.addColorStop(1, "rgba(255,210,160,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      for (const s of list) {
        if (s.opacity <= 0) continue;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,250,235,${s.opacity})`;
        ctx.fill();
        if (s.size > 1.6) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,245,220,${s.opacity * 0.1})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [origin, onClose]);

  // sync bg color from ref
  useEffect(() => {
    let r = 0;
    const tick = () => {
      if (bgRef.current) bgRef.current.style.backgroundColor = `rgba(4,4,20,${bgOpacity.current})`;
      r = requestAnimationFrame(tick);
    };
    r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, []);

  return (
    <div
      ref={bgRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        backgroundColor: "rgba(4,4,20,0)",
        overflowY: "auto",
      }}
    >
      {/* stars canvas — fixed so it stays behind content while scrolling */}
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", inset: 0, display: "block", pointerEvents: "none" }}
      />

      {/* practice content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "600px",
          margin: "0 auto",
          padding: "15vh 2rem 15vh",
          display: "flex",
          flexDirection: "column",
          gap: "8vh",
        }}
      >
        <div>
          <p style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F4EFE430",
            margin: "0 0 2rem",
          }}>
            A practice
          </p>
          <h1 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            color: "#F4EFE4",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            margin: 0,
          }}>
            Close your eyes.
          </h1>
        </div>

        <p style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          lineHeight: 1.7,
          color: "#F4EFE460",
          margin: 0,
        }}>
          Find somewhere quiet. Give yourself two minutes. This only works if
          you actually do it.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {[
            "You are fifteen years from now. You are older. The world kept moving and you moved with it. But somewhere along the way, you stopped. The thing you wanted to do, the thing you kept thinking about late at night, the thing that felt too risky, too unrealistic, too inconvenient, you let it go.",
            "Not in one moment. Slowly. The way you let most things go.",
          ].map((text, i) => (
            <p key={i} style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#F4EFE470",
              margin: 0,
            }}>{text}</p>
          ))}
        </div>

        <div style={{ width: "30px", height: "1px", backgroundColor: "#B91C1C" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {[
            "Think about what that thing was. Think about all the small moments you chose against it. The times you told yourself later. The times the fear was louder than the want.",
            "You knew what you should have been doing. You just didn't.",
          ].map((text, i) => (
            <p key={i} style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#F4EFE470",
              margin: 0,
            }}>{text}</p>
          ))}
        </div>

        <p style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
          lineHeight: 1.6,
          color: "#F4EFE4",
          margin: 0,
        }}>
          Sit with that. The quiet guilt of it. The hollow feeling of knowing.
        </p>

        <p style={{
          fontFamily: "var(--font-space)",
          fontSize: "0.9rem",
          lineHeight: 2,
          color: "#F4EFE470",
          margin: 0,
        }}>
          This isn&rsquo;t punishment. This is information.
        </p>

        <div style={{ width: "30px", height: "1px", backgroundColor: "#B91C1C" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            lineHeight: 1.5,
            color: "#F4EFE4",
            margin: 0,
          }}>
            Now come back. You are here. Right now.
          </p>
          <p style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.9rem",
            lineHeight: 2,
            color: "#F4EFE470",
            margin: 0,
          }}>
            The fifteen years haven&rsquo;t happened yet. Every single thing
            you just grieved is still available to you. The choice
            hasn&rsquo;t been made. You are still here, and you still have time.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.9rem",
            lineHeight: 2,
            color: "#F4EFE470",
            margin: 0,
          }}>
            That feeling you just had? That&rsquo;s why Art is Dead exists.
            Not to remind you of what you might lose. To remind you that you
            still have the chance to do the thing you actually love. Not for
            money. Not for an audience. Because it&rsquo;s yours.
          </p>
          <p style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            lineHeight: 1.4,
            color: "#F4EFE4",
            margin: 0,
          }}>
            Go do it.
          </p>
        </div>

        <button
          onClick={startClose}
          style={{
            marginTop: "6vh",
            background: "none",
            border: "none",
            fontFamily: "var(--font-space)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,248,230,0.3)",
            cursor: "pointer",
            padding: 0,
            textAlign: "left",
          }}
        >
          ← open your eyes
        </button>
      </div>
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────── */

export default function About() {
  const [active, setActive] = useState<TooltipKey>(null);
  const [starOrigin, setStarOrigin] = useState<{ x: number; y: number } | null>(null);

  return (
    <>
      <Nav />

      {starOrigin && (
        <StarOverlay origin={starOrigin} onClose={() => setStarOrigin(null)} />
      )}

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
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
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
            Somewhere along the way, the things we chase stopped being things
            we chose.
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
              We live in a world that has gotten very good at making decisions
              for you. Not by force. By design. What you see, what you want,
              what success looks like, what a good life means. These ideas
              arrive already formed. Algorithms shape them. Money reinforces
              them. And the longer you move inside that system without
              questioning it, the more those ideas start to feel like your own.
            </p>

            <p style={{ margin: 0 }}>
              The cost is subtle. You don&rsquo;t feel it in one moment. You
              feel it in the slow accumulation of choices made from fear instead
              of love. The career that made sense on paper. The things you keep
              buying that never quite fill the feeling. The thing you used to do
              when you were younger, before you started worrying about what it
              looked like to other people, that you haven&rsquo;t touched in
              years.
            </p>

            <p style={{ margin: 0 }}>
              {" "}
              <InteractivePhrase
                id="muses"
                active={active}
                onEnter={() => setActive("muses")}
                onLeave={() => setActive(null)}
              >
                The people who have moved the world
              </InteractivePhrase>
              {" "}were not operating from fear of what they might lose. They
              were operating from gratitude for what they already had and love
              for what they were building. That is a different way of moving
              through life. Most people never try it.
            </p>

            <p style={{ margin: 0 }}>
              Art is Dead exists to invite people back to that. To choose what
              you actually love, not what you were sold. To make things from
              your own deep, original perspective, for people you love, or
              because you believe the world needs to see it. To{" "}
              <CloseYourEyes onActivate={setStarOrigin}>
                close your eyes
              </CloseYourEyes>
              {" "}and get honest about the version of your life you are
              actually living versus the one you would choose if you were
              starting from a place of abundance instead of fear.
            </p>

            <p style={{ margin: 0 }}>
              That is what it means to live like an artist. Not to be a painter.
              Not to have a following. To move through the world as someone who
              chooses what they consume, creates what only they could make, and
              does it from a place of genuine love rather than performance.
              That life is available to anyone. It just requires deciding to
              live it.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
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
              Enter the story →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
