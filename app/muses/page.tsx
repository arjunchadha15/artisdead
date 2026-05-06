"use client";

import { useEffect, useRef } from "react";
import Nav from "../components/Nav";

const muses = [
  { name: "Kobe Bryant", discipline: "Basketball", quote: "Rest at the end, not in the middle." },
  { name: "Harriet Tubman", discipline: "Abolitionist", quote: "I never ran my train off the track and I never lost a passenger." },
  { name: "Pablo Picasso", discipline: "Painting", quote: "The meaning of life is to find your gift. The purpose of life is to give it away." },
  { name: "Nina Simone", discipline: "Music", quote: "I never had nothin' and I never will. But I have always had my music." },
  { name: "Jean-Michel Basquiat", discipline: "Art", quote: "I don't think about art when I'm working. I think about life." },
  { name: "MLK", discipline: "Civil Rights", quote: "If you can't fly then run. If you can't run then walk. If you can't walk then crawl." },
  { name: "Frida Kahlo", discipline: "Painting", quote: "I never painted dreams. I painted my own reality." },
  { name: "Bruce Lee", discipline: "Martial Arts", quote: "I fear not the man who practiced 10,000 kicks once, but the man who practiced one kick 10,000 times." },
  { name: "Toni Morrison", discipline: "Literature", quote: "If you have some power, then your job is to empower somebody else." },
  { name: "Gandhi", discipline: "Independence", quote: "The spinning wheel is not just for spinning thread. It is the symbol of nonviolent resistance." },
  { name: "Miles Davis", discipline: "Music", quote: "Don't play what's there. Play what's not there." },
  { name: "Serena Williams", discipline: "Tennis", quote: "A champion is defined not by their wins but by how they recover when they fall." },
  { name: "Stanley Kubrick", discipline: "Film", quote: "However vast the darkness, we must supply our own light." },
  { name: "David Bowie", discipline: "Music", quote: "I don't know where I'm going from here, but I promise it won't be boring." },
  { name: "Beyoncé", discipline: "Music", quote: "Power is not given to you. You have to take it." },
  { name: "Muhammad Ali", discipline: "Boxing", quote: "Don't count the days. Make the days count." },
  { name: "Leonardo da Vinci", discipline: "Art & Science", quote: "Knowing is not enough. We must apply. Being willing is not enough. We must do." },
  { name: "Jimi Hendrix", discipline: "Music", quote: "Knowledge speaks, but wisdom listens." },
  { name: "Pharrell Williams", discipline: "Music", quote: "The thing I'm most proud of is my curiosity." },
  { name: "Kanye West", discipline: "Music", quote: "My greatest pain in life is that I will never be able to see myself perform live." },
  { name: "Michael Jackson", discipline: "Music", quote: "In a world filled with hate, we must still dare to hope." },
  { name: "Kyrie Irving", discipline: "Basketball", quote: "I'm just trying to be the best version of myself every single day." },
  { name: "Coco Chanel", discipline: "Fashion", quote: "In order to be irreplaceable, one must always be different." },
  { name: "Donald Glover", discipline: "Art", quote: "Everything I do, I want it to feel necessary." },
  { name: "Steve Jobs", discipline: "Technology", quote: "The people crazy enough to think they can change the world are the ones who do." },
  { name: "Kendrick Lamar", discipline: "Music", quote: "I got so much to say, I talk to myself while I'm listening." },
  { name: "Maya Angelou", discipline: "Literature", quote: "You can't use up creativity. The more you use, the more you have." },
  { name: "Prince", discipline: "Music", quote: "A strong spirit transcends rules." },
  { name: "Nikola Tesla", discipline: "Science", quote: "The present is theirs. The future, for which I really worked, is mine." },
  { name: "Wes Anderson", discipline: "Film", quote: "I have a way of filming things and staging them and designing sets. There's something called the Wes Anderson style." },
];

function sr(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function tornClipPath(seed: number): string {
  const pts: string[] = [];
  // top edge
  pts.push(`${sr(seed) * 1.5}% ${sr(seed + 1) * 2}%`);
  for (let i = 1; i <= 6; i++) {
    const x = (i / 7) * 100 + (sr(seed + i * 10) * 3 - 1.5);
    const y = sr(seed + i * 11) * 4 - 1;
    pts.push(`${Math.min(99, Math.max(1, x))}% ${Math.max(0, y)}%`);
  }
  pts.push(`${98 + sr(seed + 5) * 2}% ${sr(seed + 6) * 2}%`);
  // right edge
  for (let i = 1; i <= 7; i++) {
    const y = (i / 8) * 100 + (sr(seed + i * 20) * 3 - 1.5);
    const x = 100 - sr(seed + i * 21) * 5;
    pts.push(`${x}% ${Math.min(99, Math.max(1, y))}%`);
  }
  pts.push(`${97 + sr(seed + 7) * 3}% ${98 + sr(seed + 8) * 2}%`);
  // bottom edge - more torn
  for (let i = 6; i >= 1; i--) {
    const x = (i / 7) * 100 + (sr(seed + i * 30) * 4 - 2);
    const y = 100 - sr(seed + i * 31) * 7;
    pts.push(`${Math.min(99, Math.max(1, x))}% ${y}%`);
  }
  pts.push(`${sr(seed + 9) * 2}% ${97 + sr(seed + 10) * 3}%`);
  // left edge
  for (let i = 7; i >= 1; i--) {
    const y = (i / 8) * 100 + (sr(seed + i * 40) * 3 - 1.5);
    const x = sr(seed + i * 41) * 5;
    pts.push(`${x}% ${Math.min(99, Math.max(1, y))}%`);
  }
  return `polygon(${pts.join(", ")})`;
}

function MuseCard({ muse, index }: { muse: typeof muses[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const baseRot = (sr(index * 3 + 1) * 28) - 14;
  const baseX   = (sr(index * 7 + 2) * 36) - 18;
  const baseY   = (sr(index * 5 + 3) * 24) - 12;
  const clip    = tornClipPath(index * 17 + 3);

  // Paper tones — cycle through a few warm hues
  const papers = ["#FFF8EE", "#FEFBF3", "#FFF5E6", "#FFFBF0", "#FFF2E5"];
  const paper  = papers[index % papers.length];

  // Lined paper stripe
  const lineColor = "rgba(28,25,23,0.055)";
  const linesBg   = `repeating-linear-gradient(transparent, transparent 23px, ${lineColor} 23px, ${lineColor} 24px)`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const vcenter = window.innerHeight * 0.48;
      const dist = Math.abs(cardCenter - vcenter);
      const maxDist = window.innerHeight * 0.62;
      const raw = Math.max(0, 1 - dist / maxDist);
      // smoothstep
      const t = raw * raw * (3 - 2 * raw);

      const rot   = baseRot   * (1 - t * 0.88);
      const tx    = baseX     * (1 - t);
      const ty    = baseY     * (1 - t) - t * 10;
      const scale = 1 + t * 0.04;
      const shadowY   = 3  + t * 16;
      const shadowB   = 8  + t * 24;
      const shadowAlp = 0.07 + t * 0.18;

      el.style.transform = `rotate(${rot}deg) translate(${tx}px, ${ty}px) scale(${scale})`;
      el.style.filter    = `drop-shadow(0 ${shadowY}px ${shadowB}px rgba(28,25,23,${shadowAlp}))`;
      el.style.zIndex    = String(Math.round(t * 30 + 1));
      el.style.opacity   = String(0.65 + t * 0.35);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // small delay so initial scroll position is read after layout
    setTimeout(update, 60);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [baseRot, baseX, baseY]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: paper,
        clipPath: clip,
        padding: "2rem 2rem 2.5rem",
        willChange: "transform, filter, opacity",
        transition: "none",
        cursor: "default",
      }}
    >
      {/* lined paper overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: linesBg,
          backgroundSize: "100% 24px",
          backgroundPositionY: "2.5rem",
          pointerEvents: "none",
          opacity: 0.9,
        }}
      />
      {/* slight aging gradient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 80% 90%, rgba(180,130,60,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <span
        style={{
          position: "relative",
          fontFamily: "var(--font-space)",
          fontSize: "0.55rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#B91C1C",
          display: "block",
          marginBottom: "0.55rem",
        }}
      >
        {muse.discipline}
      </span>

      <h2
        style={{
          position: "relative",
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
          fontWeight: 700,
          color: "#1C1917",
          margin: "0 0 1rem",
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        {muse.name}
      </h2>

      <p
        style={{
          position: "relative",
          fontFamily: "var(--font-caveat)",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "#3a3028cc",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        &ldquo;{muse.quote}&rdquo;
      </p>
    </div>
  );
}

export default function Muses() {
  return (
    <>
      <Nav />

      <section
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: "140px",
          paddingBottom: "3rem",
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
            Those who understood.
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
            Muses.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "#1C191760",
              marginTop: "2rem",
              marginBottom: 0,
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            People who gave everything to what they loved. Not for fame. Not for
            the outcome. Because the work demanded it.
          </p>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "2rem 3rem 6rem",
          overflow: "visible",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            columns: "2 300px",
            columnGap: "2rem",
            overflow: "visible",
          }}
        >
          {muses.map((muse, i) => (
            <div
              key={muse.name}
              style={{
                breakInside: "avoid",
                marginBottom: `${1.2 + sr(i * 13) * 1.8}rem`,
                display: "inline-block",
                width: "100%",
                overflow: "visible",
              }}
            >
              <MuseCard muse={muse} index={i} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
