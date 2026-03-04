import Link from "next/link";
import Nav from "../components/Nav";

const products = [
  {
    id: 1,
    name: "The Process Tee",
    tagline: "Show up. Every time.",
    description:
      "Most people want the result. Few are willing to fall in love with the process that creates it. This piece is for those who've made peace with the grind — who find something sacred in the repetition, in the hours no one sees, in the work before the work pays off. Wear it as a reminder that showing up is not the obstacle. Showing up is the whole thing.",
    price: "$—",
  },
  {
    id: 2,
    name: "Refusal",
    tagline: "Some paths aren't made. They're chosen.",
    description:
      "There is a quiet rebellion in refusing to take the shortcut. In a world that rewards speed and punishes patience, choosing the harder, slower, more intentional path is its own kind of art. This piece is for the ones who said no to the easy version of themselves. Who understand that what you refuse defines you as much as what you pursue.",
    price: "$—",
  },
  {
    id: 3,
    name: "The Long Game",
    tagline: "Built for those building something real.",
    description:
      "Some things take years. Decades, even. The painter who spent forty years developing a style. The athlete who trained before they were a name. The writer who rewrote the same chapter until it was true. This piece is a nod to the long arc of meaningful work — to building something that outlasts the moment, the trend, the noise.",
    price: "$—",
  },
  {
    id: 4,
    name: "Joy & Creation",
    tagline: "Make things because you have to.",
    description:
      "The root of all great work is joy. Not performance. Not approval. Not even success — just the pure need to make something, to express something, to bring something into existence that wasn't there before. This piece is a reminder to come back to that. To create from a place of overflow, not scarcity. To do it because it fills you, not because it defines you.",
    price: "$—",
  },
  {
    id: 5,
    name: "No Audience Required",
    tagline: "The work matters before anyone sees it.",
    description:
      "In the age of the feed, the like, the view — it's easy to forget that the most important work happens in private. That a painting is already real before anyone looks at it. That a song is already true before anyone hears it. This piece is for those who make things whether or not anyone is watching. Because the work has to exist first.",
    price: "$—",
  },
  {
    id: 6,
    name: "The Discipline",
    tagline: "Freedom lives on the other side of constraint.",
    description:
      "Discipline is often framed as restriction. But the artist knows the opposite is true — that mastery of a practice is what grants freedom within it. Miles Davis understood twelve notes. Kobe understood a basketball. From that mastery came infinite expression. This piece is for those who do the repetitive work long enough to break through to something new.",
    price: "$—",
  },
];

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
              <div key={product.id}>
                {/* Placeholder image */}
                <div
                  style={{
                    aspectRatio: "3/4",
                    backgroundColor: "#E8E0CE",
                    marginBottom: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
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
            ))}
          </div>
        </div>
      </section>

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
