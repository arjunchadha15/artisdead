import Nav from "../components/Nav";
import Link from "next/link";

const faqs = [
  {
    q: "What is Art is Dead?",
    a: "A clothing brand built around a philosophy. Every piece carries an idea — about process, devotion, and what it means to work like an artist. The clothes are real. The meaning is intentional.",
  },
  {
    q: "Where do you ship?",
    a: "Worldwide. Shipping times vary by destination. You'll receive a tracking link once your order is fulfilled.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are typically fulfilled within 3–7 business days. Delivery after fulfillment is usually 5–14 business days depending on your location.",
  },
  {
    q: "What's your sizing like?",
    a: "Our pieces run true to size with a relaxed, intentional fit. Size guides are included on each product page. When in doubt, size up.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Reach out as quickly as possible at artisdead941@gmail.com. Once an order enters fulfillment it can't be modified, but we'll do everything we can.",
  },
  {
    q: "Do you restock sold-out items?",
    a: "Some pieces return. Some don't. Follow us to stay in the loop — or accept the limitation as part of the philosophy.",
  },
  {
    q: "How do I care for my pieces?",
    a: "Cold wash, hang dry. Treat it like something worth keeping.",
  },
];

export default function FAQ() {
  return (
    <>
      <Nav />

      <section
        style={{
          backgroundColor: "#F4EFE4",
          minHeight: "40vh",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "120px",
          paddingBottom: "4rem",
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
            Support
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 700,
              color: "#1C1917",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            Questions.
          </h1>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#F4EFE4",
          padding: "5rem 2rem 8rem",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid #1C191718",
                  padding: "2.5rem 0",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "#1C1917",
                    margin: "0 0 0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-space)",
                    fontSize: "0.875rem",
                    lineHeight: 1.85,
                    color: "#1C191770",
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #1C191718" }} />
          </div>

          <div style={{ marginTop: "5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "#1C191755",
                marginBottom: "1.5rem",
              }}
            >
              Still have a question?
            </p>
            <a
              href="mailto:artisdead941@gmail.com"
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
              artisdead941@gmail.com →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
