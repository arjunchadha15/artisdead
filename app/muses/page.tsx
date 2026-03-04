import Link from "next/link";
import Nav from "../components/Nav";

const muses = [
  {
    name: "Kobe Bryant",
    discipline: "Basketball",
    body: [
      "Kobe called it the Mamba Mentality. It wasn't a slogan. It was a way of existing in relation to your craft — showing up before everyone else arrived, staying after everyone left, studying the game with the obsession of someone who couldn't imagine doing anything else.",
      "He wasn't trying to be the greatest. He was trying to understand basketball completely. The greatness was a side effect. At 3am in an empty gym, there was no crowd, no legacy, no brand — just a man and the work he loved. That's the part that matters. That's what we carry.",
    ],
  },
  {
    name: "Harriet Tubman",
    discipline: "Abolitionist",
    body: [
      "She went back nineteen times. Once would have been extraordinary. Nineteen times was a philosophy. A declaration that the work is never finished, that the risk of doing it is always worth more than the safety of not.",
      "Tubman understood something most people never do: that the process of liberation is itself liberating. Every return trip was a choice to keep going — not because it was easy or safe, but because the work demanded it. She didn't wait for conditions to be perfect. She moved.",
    ],
  },
  {
    name: "Pablo Picasso",
    discipline: "Painting",
    body: [
      "Picasso made over twenty thousand works. Not because he was prolific by accident, but because he couldn't stop seeing. Every style he exhausted became a doorway into the next. He didn't protect his earlier work by staying in it — he abandoned it, again and again, in pursuit of what he hadn't yet understood.",
      "The lesson isn't volume. It's commitment to exploration over comfort. He could have stayed in his Blue Period and been celebrated forever. He chose to keep going instead. That restlessness is the thing.",
    ],
  },
  {
    name: "Nina Simone",
    discipline: "Music",
    body: [
      "Nina Simone said the artist's duty is to reflect the times. She didn't separate her music from her politics, her life from her art. Every performance was whole — technically immaculate and emotionally unguarded at once. She gave everything, every night.",
      "She was denied entry to classical training because of who she was, and responded by building something more powerful than what they'd kept from her. She turned the wound into the work. That's not just talent. That's devotion at a level most people never find.",
    ],
  },
  {
    name: "Jean-Michel Basquiat",
    discipline: "Art",
    body: [
      "Basquiat made art the way some people breathe — because stopping wasn't a real option. He painted on doors, refrigerators, found wood, walls. When he had no canvas he made one. The urgency of his output wasn't anxiety. It was the natural result of having something to say and not being willing to wait.",
      "He brought the streets into the galleries and refused to clean them up on the way in. His work was autobiography, history, anger, and beauty at the same time. He showed that you don't have to choose between rawness and craft. The two can be the same thing.",
    ],
  },
  {
    name: "MLK",
    discipline: "Civil Rights",
    body: [
      "The Letter from Birmingham Jail was written on newspaper margins and scraps of paper while Dr. King was in a cell. It became one of the most important documents in American history. The conditions were impossible. He wrote anyway.",
      "His speeches were not improvised. They were the product of years of study — theology, philosophy, rhetoric, the Bible, Thoreau, Gandhi. The soaring language came from relentless preparation. When the moment came, he was ready because he had done the work long before anyone was watching.",
    ],
  },
  {
    name: "Frida Kahlo",
    discipline: "Painting",
    body: [
      "Frida Kahlo spent extended periods of her life immobile, in a full body cast, in chronic pain. She painted anyway. She had a special easel built for her bed and a mirror mounted overhead so she could use herself as subject when she couldn't move.",
      "She never painted dreams, she said. She painted her reality. That reality was hard and strange and alive. Her work is proof that the right response to suffering is not silence. It's making something from it — something that other people can look at and feel less alone.",
    ],
  },
  {
    name: "Bruce Lee",
    discipline: "Martial Arts",
    body: [
      "Bruce Lee was a philosopher as much as a fighter. He understood that mastery isn't about learning more techniques — it's about simplifying, distilling, cutting away everything that isn't essential. He built Jeet Kune Do from scratch because existing forms weren't honest enough.",
      "He practiced a single kick ten thousand times before he'd call it learned. Not the kick — one kick. That specificity is the whole lesson. Go deep before you go wide. The quality of your repetitions determines everything.",
    ],
  },
  {
    name: "Toni Morrison",
    discipline: "Literature",
    body: [
      "Toni Morrison wrote Beloved, Song of Solomon, and Sula — among the most important novels ever written in the English language — while raising two children alone and working as an editor. She wrote early in the morning before anyone else was awake, before the day had a chance to take it from her.",
      "She said she wrote the books she wanted to read but couldn't find. That's the whole thing. The work she gave the world came from an honest assessment of what was missing. She made what the world needed because she needed it too.",
    ],
  },
  {
    name: "Gandhi",
    discipline: "Independence",
    body: [
      "Gandhi chose the spinning wheel as the symbol of Indian independence — a simple, daily, practical act of making as resistance. Not rhetoric alone. The physical practice of creating, repeated every day, as a form of declaration.",
      "He understood that lasting change comes from the accumulation of daily choices, not single heroic moments. The spinning wheel wasn't metaphor. It was instruction: show up, do the work, make the thing with your hands, keep going.",
    ],
  },
  {
    name: "Miles Davis",
    discipline: "Music",
    body: [
      "Miles Davis reinvented jazz multiple times over the course of one career. Every time he had mastered something, he moved. Cool jazz, modal jazz, fusion — each transition confused and alienated audiences who had just learned to love the previous version of him. He didn't care.",
      "He said don't play what's there — play what's not there. That's an instruction for living, not just for music. The most interesting thing is always the space you haven't explored yet. Miles kept moving into it until the end.",
    ],
  },
  {
    name: "Serena Williams",
    discipline: "Tennis",
    body: [
      "Serena Williams won 23 Grand Slams across three decades, came back from life-threatening illness, from childbirth complications, from every kind of setback that would have ended careers. She defined herself not by what she won but by what she survived and returned from.",
      "She said a champion is defined not by their wins but by how they recover when they fall. That's not a consolation — it's a blueprint. The capacity to rebuild yourself, to relearn, to start again with everything on the line, is the thing that actually lasts.",
    ],
  },
  {
    name: "Stanley Kubrick",
    discipline: "Film",
    body: [
      "Kubrick spent more time preparing for a film than most directors spend making one. He read everything about the subject, photographed locations himself, interviewed experts obsessively, and didn't shoot until he understood every detail. He made thirteen films in fifty years and every one of them is alive.",
      "He said however vast the darkness, we must supply our own light. That wasn't poetry for its own sake. It was a working principle. The darkness of not-knowing, of starting from nothing, of trying to make something true — you bring the light yourself. You don't wait for it.",
    ],
  },
];

export default function Muses() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "#1C1917",
          minHeight: "45vh",
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
            Those who understood.
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 700,
              color: "#F4EFE4",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            Muses.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "#F4EFE460",
              marginTop: "2rem",
              marginBottom: 0,
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            Thirteen people who gave themselves fully to their work. Not for
            fame. Not for the outcome. Because the process demanded everything,
            and they gave it.
          </p>
        </div>
      </section>

      {/* Muses list */}
      <section
        style={{
          backgroundColor: "#F4EFE4",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {muses.map((muse, i) => (
            <div
              key={muse.name}
              style={{
                paddingBottom: "6rem",
                marginBottom: "6rem",
                borderBottom: i < muses.length - 1 ? "1px solid #1C191715" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#B91C1C",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                {muse.discipline}
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 700,
                  color: "#1C1917",
                  margin: "0 0 2.5rem",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                }}
              >
                {muse.name}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {muse.body.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "var(--font-space)",
                      fontSize: "0.9rem",
                      lineHeight: 2,
                      color: "#1C191780",
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1C1917",
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Home", "/"], ["Collection", "/collection"], ["About", "/about"]].map(([label, href]) => (
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
