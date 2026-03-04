"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAMES = [
  "Kobe Bryant",
  "Harriet Tubman",
  "Pablo Picasso",
  "Nina Simone",
  "Jean-Michel Basquiat",
  "MLK",
  "Frida Kahlo",
  "Bruce Lee",
  "Toni Morrison",
  "Gandhi",
  "Miles Davis",
  "Serena Williams",
  "Stanley Kubrick",
];

function sr(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const POINTS = NAMES.map((_, i) => {
  const phi = Math.acos(1 - (2 * (i + 0.5)) / NAMES.length);
  const theta = Math.PI * (1 + Math.sqrt(5)) * i;
  const r = 270 + sr(i * 3) * 110;
  return {
    x: r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.sin(phi) * Math.sin(theta),
    z: r * Math.cos(phi),
    tilt: sr(i * 7) * 50 - 25,
    size: 0.9 + sr(i * 5) * 0.9,
    opacity: 0.45 + sr(i * 11) * 0.45,
  };
});

export default function FiguresOrbit() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const flyRef = useRef<HTMLDivElement>(null);
  const backStageRef = useRef<HTMLDivElement>(null);
  const frontStageRef = useRef<HTMLDivElement>(null);
  const backNameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frontNameRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let scrollY = 0;
    let rotY = 0;
    let rafId = 0;
    let lastT = 0;

    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = (t: number) => {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;

      rotY += 12 * dt;

      const rotYRad = (rotY * Math.PI) / 180;

      // Update which names are in front vs behind logo
      NAMES.forEach((_, i) => {
        const p = POINTS[i];
        const effectiveZ = -p.x * Math.sin(rotYRad) + p.z * Math.cos(rotYRad);
        const inFront = effectiveZ > 0;
        if (backNameRefs.current[i]) {
          backNameRefs.current[i]!.style.visibility = inFront ? "hidden" : "visible";
        }
        if (frontNameRefs.current[i]) {
          frontNameRefs.current[i]!.style.visibility = inFront ? "visible" : "hidden";
        }
      });

      if (flyRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const offset = Math.max(0, scrollY - sectionTop);
        flyRef.current.style.transform = `translateY(${offset * -2}px)`;
      }

      const tiltX = 12 + Math.sin(t * 0.00035) * 7;
      const stageTransform = `rotateX(${tiltX}deg) rotateY(${rotY}deg)`;
      if (backStageRef.current) backStageRef.current.style.transform = stageTransform;
      if (frontStageRef.current) frontStageRef.current.style.transform = stageTransform;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => { setMounted(true); }, []);

  const nameStyle = (i: number): React.CSSProperties => ({
    position: "absolute",
    transform: `translate3d(${POINTS[i].x}px, ${POINTS[i].y}px, ${POINTS[i].z}px) rotate(${POINTS[i].tilt}deg)`,
    fontFamily: "var(--font-caveat)",
    fontSize: `${POINTS[i].size}rem`,
    fontWeight: 500,
    color: "#1C1917",
    opacity: POINTS[i].opacity,
    whiteSpace: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
    letterSpacing: "0.02em",
  });

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        backgroundColor: "#F4EFE4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Perspective container — shifted down 30px to account for nav */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
          perspective: "900px",
          perspectiveOrigin: "50% calc(50% + 10px)",
        }}
      >
        <div
          ref={flyRef}
          style={{ position: "relative", width: 0, height: 0, transformStyle: "preserve-3d" }}
        >
          {/* BACK stage — names behind logo */}
          <div ref={backStageRef} style={{ transformStyle: "preserve-3d" }}>
            {mounted && NAMES.map((name, i) => (
              <div
                key={`back-${name}`}
                ref={(el) => { backNameRefs.current[i] = el; }}
                style={nameStyle(i)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo — plain img so mix-blend-mode works cleanly against cream bg */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="art is dead"
        style={{
          position: "absolute",
          top: "calc(50% + 10px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "460px",
          height: "auto",
          mixBlendMode: "multiply",
          pointerEvents: "none",
          display: "block",
        }}
      />

      {/* FRONT stage — names in front of logo, same perspective container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
          perspective: "900px",
          perspectiveOrigin: "50% calc(50% + 10px)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{ position: "relative", width: 0, height: 0, transformStyle: "preserve-3d" }}
        >
          <div ref={frontStageRef} style={{ transformStyle: "preserve-3d" }}>
            {mounted && NAMES.map((name, i) => (
              <div
                key={`front-${name}`}
                ref={(el) => { frontNameRefs.current[i] = el; }}
                style={nameStyle(i)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top + bottom vignette */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "140px",
        background: "linear-gradient(to bottom, #F4EFE4 0%, transparent 100%)",
        pointerEvents: "none", zIndex: 5,
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to top, #F4EFE4 0%, transparent 100%)",
        pointerEvents: "none", zIndex: 5,
      }} />

      {/* CTA */}
      <div style={{
        position: "absolute", bottom: "3rem", left: "50%",
        transform: "translateX(-50%)", zIndex: 10, textAlign: "center",
      }}>
        <Link
          href="/about"
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1C1917",
            textDecoration: "none",
            borderBottom: "1px solid #1C191740",
            paddingBottom: "2px",
            opacity: 0.45,
          }}
        >
          Enter the story →
        </Link>
      </div>
    </section>
  );
}
