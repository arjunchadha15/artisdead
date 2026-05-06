import Nav from "../components/Nav";

export default function Terms() {
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
            Terms of Service.
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
              Using this site
            </p>
            <p style={{ margin: 0 }}>
              By accessing artisdead.co, you agree to these terms. The site and
              its contents are owned by Art is Dead. You may not reproduce,
              distribute, or use our content without written permission.
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
              Orders and payment
            </p>
            <p style={{ margin: 0 }}>
              All prices are in USD and subject to change without notice. We
              reserve the right to cancel orders at our discretion — for
              instance, in cases of pricing errors or suspected fraud. If an
              order is cancelled, you will receive a full refund.
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
              Intellectual property
            </p>
            <p style={{ margin: 0 }}>
              All artwork, photography, copy, and design on this site is the
              intellectual property of Art is Dead. The brand names, graphics,
              and logos may not be used in connection with any product or service
              without prior written consent.
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
              Limitation of liability
            </p>
            <p style={{ margin: 0 }}>
              Art is Dead is not liable for any indirect, incidental, or
              consequential damages arising from the use of this site or
              products purchased here. Our liability is limited to the amount
              paid for the product in question.
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
              Changes to these terms
            </p>
            <p style={{ margin: 0 }}>
              We may update these terms from time to time. Continued use of the
              site after changes constitutes acceptance of the updated terms.
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
              Questions? Email{" "}
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
