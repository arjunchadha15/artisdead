import Nav from "../components/Nav";

export default function Returns() {
  return (
    <>
      <Nav />

      <section
        style={{
          backgroundColor: "#FFFFFF",
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
            Returns &amp; Exchanges
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
            Return Policy.
          </h1>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "5rem 2rem 8rem",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            fontFamily: "var(--font-space)",
            fontSize: "0.875rem",
            lineHeight: 1.9,
            color: "#1C191770",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#1C1917",
                margin: "0 0 1rem",
              }}
            >
              Our approach
            </p>
            <p style={{ margin: 0 }}>
              We stand behind everything we make. If something arrives damaged,
              defective, or not what you ordered, we'll make it right — no
              friction. If you changed your mind, we ask that you reach out
              within 14 days of delivery.
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#1C1917",
                margin: "0 0 1rem",
              }}
            >
              What qualifies
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Items returned within 14 days of delivery</li>
              <li>Unworn, unwashed, and in original condition</li>
              <li>Tags still attached</li>
              <li>Accompanied by your order number</li>
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#1C1917",
                margin: "0 0 1rem",
              }}
            >
              What doesn&rsquo;t qualify
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Items returned after 14 days</li>
              <li>Items that have been worn or washed</li>
              <li>Final sale items</li>
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#1C1917",
                margin: "0 0 1rem",
              }}
            >
              How to start a return
            </p>
            <p style={{ margin: "0 0 1.5rem" }}>
              Email us at{" "}
              <a
                href="mailto:artisdead941@gmail.com"
                style={{ color: "#B91C1C", textDecoration: "none" }}
              >
                artisdead941@gmail.com
              </a>{" "}
              with your order number and reason for return. We'll respond within
              2 business days with instructions.
            </p>
            <p style={{ margin: 0 }}>
              Return shipping costs are the responsibility of the customer
              unless the item was damaged or incorrect.
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#1C1917",
                margin: "0 0 1rem",
              }}
            >
              Refunds
            </p>
            <p style={{ margin: 0 }}>
              Once we receive and inspect your return, we'll process your refund
              to the original payment method within 5–10 business days. You'll
              receive a confirmation email when it's done.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
