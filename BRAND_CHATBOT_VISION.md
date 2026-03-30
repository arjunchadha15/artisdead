# Art is Dead — Brand AI Chatbot Vision

## The Concept

Instead of a traditional "About" page or FAQ, Art is Dead features a conversational AI that *is* the brand. The user doesn't read about the brand — they have a dialogue with it. The brand has a voice, a philosophy, a personality, and the user discovers it through conversation in their own unique way.

This inverts the typical brand-to-consumer relationship: rather than broadcasting a fixed narrative, the brand meets each person where they are.

---

## Why This Is Compelling

### For the Brand
- Art is Dead is built around the idea that the process, the showing up, the discipline matters more than the final product or the audience. A chatbot that *embodies* that philosophy — that engages in real dialogue, that pushes back, that challenges you — IS the brand in action. It's not describing the idea. It's living it.
- The brand's muses (Kobe, Frida, Basquiat, etc.) all had obsessive, singular voices. The chatbot can carry that same energy — opinionated, direct, philosophical.
- It turns passive browsing into an active experience. Someone could spend 20 minutes talking to the brand and come away feeling like they actually understand it — not because they read copy, but because they had a conversation.

### For the Industry
- This pushes the definition of what a brand website can be. It's not a brochure. It's not a store. It's an encounter.
- The combination of a strong aesthetic (existing cream/charcoal/red design language) with a deeply voiced AI creates a cohesive world — the design *is* the costume, and the chatbot *is* the character.
- It's shareable in a way a static site isn't: "I had a wild conversation with this clothing brand's AI and it told me..."

---

## The Voice

The brand AI should NOT sound like a customer service bot. It should sound like the brand — which means:

- **Philosophical but not pretentious** — talks about process, discipline, art, creation with conviction but no condescension
- **Direct** — doesn't hedge, doesn't give corporate non-answers
- **Curious** — asks the user questions back, wants to understand them
- **Opinionated** — has a real worldview (process > outcome, show up before you're ready, create without needing an audience)
- **Grounded in the muses** — can reference Kobe's obsession, Basquiat's rawness, Nina Simone's refusal to compromise
- **Not a salesperson** — never pushes products, never says "check out our collection" — products are incidental, the conversation is the point. If someone asks about a shirt, great. But the bot doesn't steer there.
- **Occasionally asks something unexpected** — "What's the last thing you made that no one saw?" — because that's what the brand is about

---

## Technical Implementation Plan

### Stack
- **Model:** Claude API (claude-sonnet-4-6 or claude-opus-4-6 for higher quality) via Anthropic SDK
- **Frontend:** Floating chat interface embedded in the existing Next.js site
- **Backend:** Next.js API route (`/api/chat`) as a thin proxy — keeps API key server-side
- **Storage:** Optional — can store conversation in browser localStorage for session continuity; no user accounts needed initially

### System Prompt Architecture
The entire brand voice lives in a carefully crafted system prompt. This is the core creative work. Structure:

```
You are the voice of Art is Dead — a clothing brand built around the belief that
the process of creating is more valuable than any finished product...

[Brand philosophy in depth]
[The muses and what they represent]
[How to engage — curious, direct, philosophical]
[What to avoid — salesy, corporate, generic AI vibes]
[Product awareness — you know the 6 items exist but don't push them]
```

### UI Concept
Two possible placements:
1. **Floating button** (bottom-right corner, across all pages) — low friction, available everywhere
2. **Dedicated `/talk` page** — full-screen immersive conversation experience that fits the brand aesthetic better

Option 2 is more on-brand. A full-screen dark or cream background, minimal UI, large text, the conversation feeling like a journal entry or late-night dialogue. Could include the subtle grain texture from the existing design.

### API Route (`/api/chat`)
```typescript
// app/api/chat/route.ts
import Anthropic from "@anthropic-ai/sdk"

const client = new Anthropic()
const SYSTEM_PROMPT = `...` // brand voice definition

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 500, // keep responses tight, not walls of text
    system: SYSTEM_PROMPT,
    messages,
  })

  return Response.json({
    content: response.content[0].text
  })
}
```

### Cost Estimate
- claude-sonnet-4-6: ~$3 per 1M input tokens / $15 per 1M output tokens
- Average conversation: ~2,000 tokens total
- 1,000 conversations/month ≈ $6-30 depending on depth
- Very affordable for early-stage brand

---

## What This Unlocks Long-Term

- **Personalized product recommendations** — after learning about someone through conversation, the bot can say "The Process Tee sounds like it's for you" with actual context behind it
- **Brand lore expansion** — the AI can be a storytelling vehicle for drops, new muses, limited releases
- **Community building** — users who have "talked to the brand" feel invested in a way passive browsers don't
- **Data** — (with consent) conversation themes reveal what resonates, what confuses, what the community cares about
- **Voice/audio** — future: give the brand a literal voice using text-to-speech (ElevenLabs, OpenAI TTS)

---

## The Thesis

Most brand websites are monologues. This makes Art is Dead a dialogue.

The brand is named after the idea that art — as a precious, finished, audience-dependent thing — is dead. What's alive is the act of making. A chatbot that actually talks with someone, that meets them in their own context, that doesn't perform a pre-written script — that IS the brand philosophy, running live.

---

## Next Steps to Implement

1. Write the system prompt (brand voice doc — this is the creative core)
2. Build `/api/chat` route with Anthropic SDK
3. Design the `/talk` page UI (full-screen, on-brand)
4. Add subtle entry points across site ("talk to us →" or similar)
5. Iterate on system prompt based on real conversations

---

*Captured: 2026-03-29*
