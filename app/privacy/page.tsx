import Nav from "../components/Nav";

export default function Privacy() {
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
            Legal
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
            Privacy Policy.
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
          <p style={{ margin: 0, fontStyle: "italic", color: "#1C191750" }}>
            Last updated: March 2026
          </p>

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
              What we collect
            </p>
            <p style={{ margin: 0 }}>
              When you place an order, we collect your name, email address,
              shipping address, and payment information. Payment details are
              processed securely and never stored on our servers. We may also
              collect basic usage data (pages visited, device type) to understand
              how people use the site.
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
              How we use it
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>To fulfill and ship your orders</li>
              <li>To communicate about your order status</li>
              <li>To improve the site and shopping experience</li>
              <li>To send updates if you&rsquo;ve opted in (you can opt out anytime)</li>
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
              Who we share it with
            </p>
            <p style={{ margin: 0 }}>
              We share your information only with the parties necessary to
              fulfill your order — our fulfillment partner and shipping carriers.
              We do not sell your data. We do not share it for advertising
              purposes.
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
              Cookies
            </p>
            <p style={{ margin: 0 }}>
              We use minimal cookies to keep the site functional and understand
              basic traffic patterns. We don&rsquo;t use tracking cookies for
              advertising. You can disable cookies in your browser settings
              without affecting your ability to browse the site.
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
              Your rights
            </p>
            <p style={{ margin: 0 }}>
              You can request access to, correction of, or deletion of your
              personal data at any time. Email us at{" "}
              <a
                href="mailto:artisdead941@gmail.com"
                style={{ color: "#B91C1C", textDecoration: "none" }}
              >
                artisdead941@gmail.com
              </a>
              .
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
              Contact
            </p>
            <p style={{ margin: 0 }}>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:artisdead941@gmail.com"
                style={{ color: "#B91C1C", textDecoration: "none" }}
              >
                artisdead941@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
