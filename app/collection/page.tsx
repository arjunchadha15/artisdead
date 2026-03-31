import Link from "next/link";
import Nav from "../components/Nav";
import { products } from "../lib/products";

export default function Collection() {
  return (
    <>
      <Nav />

      {/* Header */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          paddingTop: "140px",
          paddingBottom: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#B91C1C",
            marginBottom: "1rem",
          }}
        >
          The Collection
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 600,
            color: "#1C1917",
            margin: 0,
            lineHeight: 1,
          }}
        >
          The Work.
        </h1>
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "#B91C1C",
            marginTop: "1.5rem",
          }}
        />
      </section>

      {/* Products */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          padding: "0 2rem 7rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem 2.5rem",
            }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/collection/${product.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <div>
                {/* Product image */}
                <div
                  style={{
                    aspectRatio: "1/1",
                    backgroundColor: "#E8E0CE",
                    marginBottom: "1.5rem",
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

                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "#1C1917",
                    margin: "0 0 0.35rem",
                  }}
                >
                  {product.name}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "#B91C1C",
                    margin: "0 0 1rem",
                  }}
                >
                  {product.tagline}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-space)",
                    fontSize: "0.8rem",
                    lineHeight: 1.85,
                    color: "#1C191775",
                    margin: "0 0 1.5rem",
                  }}
                >
                  {product.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-space)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#1C1917",
                    }}
                  >
                    {product.price}
                  </span>

                  <button
                    style={{
                      fontFamily: "var(--font-space)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#F4EFE4",
                      backgroundColor: "#1C1917",
                      border: "none",
                      padding: "0.75rem 1.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Shop →
                  </button>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
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
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "#F4EFE460",
            margin: 0,
          }}
        >
          The process is the point.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Home", "/"], ["About", "/about"]].map(([label, href]) => (
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
