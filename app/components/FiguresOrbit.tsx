"use client";

import { useEffect, useRef, useState } from "react";

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
  "Kanye West",
  "Michael Jackson",
  "Rafael Nadal",
  "Novak Djokovic",
  "Kyrie Irving",
  "Coco Chanel",
  "Beyoncé",
  "Muhammad Ali",
  "Leonardo da Vinci",
  "Jimi Hendrix",
  "Pharrell Williams",
  "David Bowie",
  "Pink Floyd",
  "The Beatles",
  "Madonna",
  "Donald Glover",
];

function sr(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const POINTS = NAMES.map((_, i) => {
  const phi = Math.acos(1 - (2 * (i + 0.5)) / NAMES.length);
  const theta = Math.PI * (1 + Math.sqrt(5)) * i;
  const r = 340 + sr(i * 3) * 130;
  return {
    x: r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.sin(phi) * Math.sin(theta),
    z: r * Math.cos(phi),
    tilt: sr(i * 7) * 50 - 25,
    size: 0.9 + sr(i * 5) * 0.9,
    opacity: 0.45 + sr(i * 11) * 0.45,
  };
});

interface FiguresOrbitProps {
  expanded?: boolean;
  onEnter?: () => void;
}

export default function FiguresOrbit({ expanded = false, onEnter }: FiguresOrbitProps) {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const flyRef = useRef<HTMLDivElement>(null);
  const flyFrontRef = useRef<HTMLDivElement>(null);
  const backStageRef = useRef<HTMLDivElement>(null);
  const frontStageRef = useRef<HTMLDivElement>(null);
  const backNameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frontNameRefs = useRef<(HTMLDivElement | null)[]>([]);

  const expandedRef = useRef(expanded);
  useEffect(() => { expandedRef.current = expanded; }, [expanded]);

  useEffect(() => {
    let scrollY = 0;
    let rotY = 0;
    let rafId = 0;
    let lastT = 0;
    let posScale = 1;

    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = (t: number) => {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;

      rotY += 12 * dt;
      const rotYRad = (rotY * Math.PI) / 180;

      // Lerp orbit radius outward when expanded
      const targetScale = expandedRef.current ? 1.6 : 1;
      posScale += (targetScale - posScale) * 0.03;

      // Update each name's 3D position and opacity
      const targetOpacity = expandedRef.current ? 0.28 : null;
      NAMES.forEach((_, i) => {
        const p = POINTS[i];
        const x = p.x * posScale;
        const y = p.y * posScale;
        const z = p.z * posScale;
        const transform = `translate3d(${x}px, ${y}px, ${z}px) rotate(${p.tilt}deg)`;
        const opacity = String(targetOpacity ?? p.opacity);

        const effectiveZ = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
        const inFront = effectiveZ > 0;

        if (backNameRefs.current[i]) {
          backNameRefs.current[i]!.style.transform = transform;
          backNameRefs.current[i]!.style.opacity = opacity;
          backNameRefs.current[i]!.style.visibility = inFront ? "hidden" : "visible";
        }
        if (frontNameRefs.current[i]) {
          frontNameRefs.current[i]!.style.transform = transform;
          frontNameRefs.current[i]!.style.opacity = opacity;
          frontNameRefs.current[i]!.style.visibility = inFront ? "visible" : "hidden";
        }
      });

      if (flyRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const offset = Math.max(0, scrollY - sectionTop);
        const translateY = `translateY(${offset * -0.6}px)`;
        flyRef.current.style.transform = translateY;
        if (flyFrontRef.current) flyFrontRef.current.style.transform = translateY;
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
        height: expanded ? "100vh" : "100vh",
        backgroundColor: "#F4EFE4",
        position: expanded ? "fixed" : "relative",
        inset: expanded ? 0 : undefined,
        zIndex: expanded ? 20 : undefined,
        overflow: "visible",
        transition: "opacity 0.4s ease",
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
          zIndex: 200,
          overflow: "visible",
          pointerEvents: "none",
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
          opacity: expanded ? 0 : 1,
          transition: "opacity 0.5s ease",
          zIndex: 300,
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
          zIndex: 200,
          overflow: "visible",
        }}
      >
        <div
          ref={flyFrontRef}
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
        opacity: expanded ? 0 : 1,
        transition: "opacity 0.4s ease",
      }} />

      {/* CTA */}
      <div style={{
        position: "absolute", bottom: "3rem", left: "50%",
        transform: "translateX(-50%)", zIndex: 400, textAlign: "center",
        opacity: expanded ? 0 : 1,
        pointerEvents: expanded ? "none" : "auto",
        transition: "opacity 0.3s ease",
      }}>
        <button
          onClick={onEnter}
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1C1917",
            background: "none",
            border: "none",
            borderBottom: "1px solid #1C191740",
            paddingBottom: "2px",
            opacity: 0.45,
            cursor: "pointer",
          }}
        >
          Enter the story →
        </button>
      </div>
    </section>
  );
}
