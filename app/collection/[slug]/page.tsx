import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import { products } from "../../lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Nav />

      <main
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "100vh",
          paddingTop: "100px",
        }}
      >
        {/* Back link */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 2rem 0",
          }}
        >
          <Link
            href="/collection"
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1C191760",
              textDecoration: "none",
            }}
          >
            ← Collection
          </Link>
        </div>

        {/* Product layout */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3rem 2rem 7rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — image */}
          <div
            style={{
              position: "sticky",
              top: "120px",
              aspectRatio: "1/1",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {product.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }}
              />
            ) : (
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
            )}
          </div>

          {/* RIGHT — details */}
          <div style={{ paddingTop: "1rem" }}>
            {/* Label */}
            <p
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#B91C1C",
                margin: "0 0 1.25rem",
              }}
            >
              Art Is Dead — SS26
            </p>

            {/* Red rule */}
            <div
              style={{
                width: "32px",
                height: "1px",
                backgroundColor: "#B91C1C",
                marginBottom: "1.25rem",
              }}
            />

            {/* Name */}
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                fontWeight: 600,
                color: "#1C1917",
                lineHeight: 1.05,
                margin: "0 0 0.75rem",
              }}
            >
              {product.name}
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "#B91C1C",
                margin: "0 0 2.5rem",
              }}
            >
              {product.tagline}
            </p>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#1C191715",
                marginBottom: "2.5rem",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.875rem",
                lineHeight: 1.9,
                color: "#1C191785",
                margin: "0 0 3rem",
              }}
            >
              {product.description}
            </p>

            {/* Price + CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#1C1917",
                  letterSpacing: "0.04em",
                }}
              >
                {product.price}
              </span>

              <button
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  backgroundColor: "#1C1917",
                  border: "none",
                  padding: "1rem 2.5rem",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                Add to Cart →
              </button>
            </div>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#1C191715",
                margin: "2.5rem 0",
              }}
            />

            {/* Fine print */}
            <p
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.7rem",
                lineHeight: 1.8,
                color: "#1C191750",
                margin: 0,
              }}
            >
              Limited run. No restocks. Ships when it ships.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1C1917",
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
            color: "#FFFFFF60",
            margin: 0,
          }}
        >
          The process is the point.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Collection", "/collection"], ["About", "/about"]].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#FFFFFF50",
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
