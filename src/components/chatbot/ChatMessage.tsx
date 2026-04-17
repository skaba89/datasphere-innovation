"use client";

import { Sparkles, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  provider?: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex items-start gap-2.5 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      {isAssistant && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-primary/20">
          <Sparkles size={14} className="text-white" />
        </div>
      )}
      <div
        className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
          isAssistant
            ? "bg-secondary/50 backdrop-blur-sm rounded-2xl rounded-tl-sm border border-border/30"
            : "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl rounded-tr-sm shadow-sm shadow-primary/20"
        }`}
      >
        {isAssistant ? (
          <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:mb-2 [&_ol]:mb-2 [&_li]:mb-0.5 [&_strong]:text-foreground">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ) : (
          <p>{message.content}</p>
        )}
        {isAssistant && message.provider && (
          <p className="text-[10px] text-muted-foreground/50 mt-1.5 pt-1 border-t border-border/20">
            via {message.provider === "groq" ? "Groq AI" : message.provider === "openrouter" ? "OpenRouter" : "AI"}
          </p>
        )}
      </div>
      {!isAssistant && (
        <div className="w-8 h-8 rounded-xl bg-secondary/50 border border-border/30 flex items-center justify-center shrink-0 mt-0.5">
          <User size={14} className="text-muted-foreground" />
        </div>
      )}
    </div>
  );
}
