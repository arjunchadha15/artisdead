import Link from "next/link";
import Nav from "../components/Nav";

export default function About() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          minHeight: "55vh",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "120px",
          paddingBottom: "5rem",
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
            About
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
            Art is Dead.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          padding: "7rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {/* Pull quote */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#1C1917",
              margin: "0 0 4rem",
              borderLeft: "2px solid #B91C1C",
              paddingLeft: "2rem",
            }}
          >
            The art of things is slowly dying. Not because people have stopped
            making, but because we&rsquo;ve stopped believing the making is
            the point.
          </p>

          <div
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#1C191785",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <p style={{ margin: 0 }}>
              We live in a world engineered for instant gratification. The
              algorithm rewards virality over depth. The market rewards speed
              over craft. Every platform is optimized to make you feel like
              you&rsquo;re behind, like someone else is already where you
              should be, and you need to get there faster.
            </p>

            <p style={{ margin: 0 }}>
              The result is a slow erosion. Not of talent, but of patience. Of
              the willingness to sit with something long enough for it to
              become real. To fail privately, repeatedly, before you succeed in
              public, or not succeed at all, and be okay with that.
            </p>

            <p style={{ margin: 0 }}>
              Art is Dead is a response to that erosion. A clothing brand, yes, but more than that, a stance. Every piece in this collection
              carries an idea. A different aspect of what it means to live and
              work like an artist: with dedication, with intention, with joy in
              the process rather than obsession with the outcome.
            </p>

            <p style={{ margin: 0 }}>
              The people we look to weren&rsquo;t great because they wanted to
              be famous. Kobe was great because he loved the work. Frida was
              great because she had no other choice. Miles was great because he
              kept moving into the unknown. Tubman was great because she kept
              going back. Their greatness was a byproduct of their devotion.
            </p>

            <p style={{ margin: 0 }}>
              That devotion is available to all of us. In whatever we
              make: a business, a painting, a meal, a life. The act of giving
              yourself fully to a process, of caring about something more than
              the reception it gets, is an artistic act. It is the only thing
              that lasts.
            </p>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: "#1C1917",
              }}
            >
              The process is the point.
            </p>
          </div>

          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "#B91C1C",
              marginTop: "4rem",
              marginBottom: "4rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "#1C191760",
              marginBottom: "2rem",
            }}
          >
            Still with us? Keep going.
          </p>
          <Link
            href="/"
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
            Talk to the brand →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          padding: "7rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "#F4EFE460",
            marginBottom: "1rem",
          }}
        >
          Wear the work.
        </p>
        <Link
          href="/collection"
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F4EFE4",
            textDecoration: "none",
            border: "1px solid #F4EFE440",
            padding: "1rem 2.5rem",
            display: "inline-block",
          }}
        >
          View the collection →
        </Link>

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
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Home", "/"], ["Collection", "/collection"]].map(([label, href]) => (
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
