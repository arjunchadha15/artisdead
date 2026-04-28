"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_USER_TURNS = 10;
const MAX_INPUT_CHARS = 400;

export default function StoryChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [turnCount, setTurnCount] = useState(0);
  const [conversationEnded, setConversationEnded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // AI opens the conversation on mount
  useEffect(() => {
    const open = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: [], turnCount: 0 }),
        });
        const data = await res.json();
        setMessages([{ role: "assistant", content: data.content }]);
      } catch {
        setMessages([
          {
            role: "assistant",
            content:
              "The story is here. The voice isn't connected yet — add your API key to bring it to life.",
          },
        ]);
      }
      setLoading(false);
    };
    open();
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading || conversationEnded) return;

    const trimmedInput = input.trim().slice(0, MAX_INPUT_CHARS);
    const userMsg: Message = { role: "user", content: trimmedInput };
    const newMessages = [...messages, userMsg];
    const newTurnCount = turnCount + 1;
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setTurnCount(newTurnCount);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, turnCount: newTurnCount }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
      if (data.limitReached || newTurnCount >= MAX_USER_TURNS) {
        setConversationEnded(true);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something broke. Try again.",
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0.2; }
          40%            { opacity: 1; }
        }
        .story-chat {
          position: fixed;
          top: 88px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 50;
          display: flex;
          flex-direction: column;
          background: transparent;
          animation: fadeIn 0.5s ease forwards;
        }
        .story-messages {
          flex: 1;
          overflow-y: auto;
          padding: 2.5rem 2rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          scrollbar-width: none;
          max-width: 680px;
          width: 100%;
          margin: 0 auto;
        }
        .story-messages::-webkit-scrollbar { display: none; }
        .story-input-row {
          max-width: 680px;
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #B91C1C;
          animation: blink 1.4s infinite ease-in-out;
        }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        .story-input::placeholder { color: #1C1917; opacity: 0.5; }
      `}</style>

      <div className="story-chat">
        {/* Messages */}
        <div className="story-messages">
          {messages.map((msg, i) =>
            msg.role === "assistant" ? (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
                  lineHeight: 1.65,
                  color: "#B91C1C",
                  margin: 0,
                }}
              >
                {msg.content}
              </p>
            ) : (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
                  lineHeight: 1.65,
                  color: "#1C1917",
                  margin: 0,
                  alignSelf: "flex-end",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >
                {msg.content}
              </p>
            )
          )}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: "flex", gap: "5px", alignItems: "center", height: "20px" }}>
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="story-input-row">
          <div style={{ height: "1px", backgroundColor: "#1C1917" }} />
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 0 calc(1rem + env(safe-area-inset-bottom))",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_CHARS))}
              className="story-input"
              placeholder={conversationEnded ? "this conversation has found its end." : "say something..."}
              disabled={loading || conversationEnded}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
                color: "#1C1917",
                lineHeight: 1.65,
              }}
            />
            {!conversationEnded && (
              <button
                type="submit"
                disabled={loading || !input.trim()}
                style={{
                  background: "none",
                  border: "none",
                  cursor: loading || !input.trim() ? "default" : "pointer",
                  fontFamily: "var(--font-space)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: loading || !input.trim() ? "#1C191730" : "#B91C1C",
                  transition: "color 0.2s ease",
                  padding: "0.5rem 0",
                  whiteSpace: "nowrap",
                }}
              >
                Send →
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
