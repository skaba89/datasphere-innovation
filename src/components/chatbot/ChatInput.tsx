"use client";

import * as React from "react";
import { Send, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-border/30 p-3 flex items-center gap-2 shrink-0 bg-background/50"
    >
      <div className="flex-1 flex items-center gap-2 bg-secondary/30 rounded-xl px-3 py-2 border border-border/30 focus-within:border-primary/30 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
        <Sparkles size={14} className="text-muted-foreground shrink-0" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question..."
          disabled={isLoading}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60 disabled:opacity-50"
          aria-label="Message"
        />
      </div>
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center hover:shadow-md hover:shadow-primary/25 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none shrink-0"
        aria-label="Envoyer"
      >
        <Send size={14} />
      </button>
    </form>
  );
}
