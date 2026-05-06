"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FiguresOrbit from "./FiguresOrbit";
import StoryChat from "./StoryChat";
import { products as allProducts } from "../lib/products";

const products = allProducts.slice(0, 3).map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  image: p.image,
  excerpt: p.description.slice(0, 120) + "…",
}));

export default function HomeClient() {
  const [story, setStory] = useState(false);

  useEffect(() => {
    const onClose = () => setStory(false);
    window.addEventListener("closestory", onClose);
    return () => window.removeEventListener("closestory", onClose);
  }, []);

  // Lock body scroll + notify Nav when in story mode
  useEffect(() => {
    if (story) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.dispatchEvent(new CustomEvent("storymode", { detail: { open: story } }));
    return () => {
      document.body.style.overflow = "";
    };
  }, [story]);

  return (
    <>
      {/* HERO + ORBIT */}
      <FiguresOrbit expanded={story} onEnter={() => setStory(true)} />

      {/* STORY CHAT — rendered on top of orbit when active */}
      {story && <StoryChat />}

      {/* COLLECTION PREVIEW */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "4rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "#1C1917",
                margin: 0,
              }}
            >
              The Work.
            </h2>
            <Link
              href="/collection"
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B91C1C",
                textDecoration: "none",
              }}
            >
              View all →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/collection/${product.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <div
                    style={{
                      aspectRatio: "1/1",
                      backgroundColor: "transparent",
                      marginBottom: "1.25rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {product.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          mixBlendMode: "multiply",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-space)",
                            fontSize: "0.65rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#1C191740",
                          }}
                        >
                          image coming
                        </span>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      width: "24px",
                      height: "1px",
                      backgroundColor: "#B91C1C",
                      marginBottom: "0.75rem",
                    }}
                  />

                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#1C1917",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-space)",
                      fontSize: "0.8rem",
                      lineHeight: 1.7,
                      color: "#1C191780",
                      margin: 0,
                    }}
                  >
                    {product.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
