import Link from "next/link";

export default function Practice() {
  return (
    <main style={{ backgroundColor: "#1C1917", minHeight: "100vh" }}>

      {/* Back link */}
      <div
        style={{
          position: "fixed",
          top: "2rem",
          left: "2rem",
          zIndex: 50,
        }}
      >
        <Link
          href="/about"
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#FFFFFF30",
            textDecoration: "none",
          }}
        >
          ← back
        </Link>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "15vh 2rem 15vh",
          display: "flex",
          flexDirection: "column",
          gap: "8vh",
        }}
      >

        {/* Opener */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FFFFFF30",
              margin: "0 0 2rem",
            }}
          >
            A practice
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Close your eyes.
          </h1>
        </div>

        {/* Setup */}
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            lineHeight: 1.7,
            color: "#FFFFFF60",
            margin: 0,
          }}
        >
          Find somewhere quiet. Give yourself two minutes. This only works if
          you actually do it.
        </p>

        {/* The future */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#FFFFFF70",
              margin: 0,
            }}
          >
            You are fifteen years from now. You are older. The world kept
            moving and you moved with it. But somewhere along the way, you
            stopped. The thing you wanted to do — the thing you kept thinking
            about late at night, the thing that felt too risky, too
            unrealistic, too inconvenient — you let it go.
          </p>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#FFFFFF70",
              margin: 0,
            }}
          >
            Not in one moment. Slowly. The way you let most things go.
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: "30px", height: "1px", backgroundColor: "#B91C1C" }} />

        {/* The inventory */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#FFFFFF70",
              margin: 0,
            }}
          >
            Think about what that thing was. Think about all the small moments
            you chose against it. The times you told yourself later. The times
            the fear was louder than the want.
          </p>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#FFFFFF70",
              margin: 0,
            }}
          >
            You knew what you should have been doing. You just didn&rsquo;t.
          </p>
        </div>

        {/* Feel it */}
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
            lineHeight: 1.6,
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Sit with that. The quiet guilt of it. The hollow feeling of knowing.
        </p>

        <p
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "0.9rem",
            lineHeight: 2,
            color: "#FFFFFF70",
            margin: 0,
          }}
        >
          This isn&rsquo;t punishment. This is information.
        </p>

        {/* Divider */}
        <div style={{ width: "30px", height: "1px", backgroundColor: "#B91C1C" }} />

        {/* Come back */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              lineHeight: 1.5,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Now come back. You are here. Right now.
          </p>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#FFFFFF70",
              margin: 0,
            }}
          >
            The fifteen years haven&rsquo;t happened yet. Every single thing
            you just grieved is still available to you. The choice
            hasn&rsquo;t been made. You are still here, and you still have
            time.
          </p>
        </div>

        {/* The invitation */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.9rem",
              lineHeight: 2,
              color: "#FFFFFF70",
              margin: 0,
            }}
          >
            That feeling you just had? That&rsquo;s why Art is Dead exists.
            Not to remind you of what you might lose. To remind you that you
            still have the chance to do the thing you actually love. Not for
            money. Not for an audience. Because it&rsquo;s yours.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              lineHeight: 1.4,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Go do it.
          </p>
        </div>

        {/* Footer link */}
        <div style={{ paddingTop: "6vh" }}>
          <Link
            href="/about"
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FFFFFF30",
              textDecoration: "none",
            }}
          >
            ← back to about
          </Link>
        </div>

      </div>
    </main>
  );
}
