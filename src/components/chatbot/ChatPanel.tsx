"use client";

import * as React from "react";
import { X, Bot, Sparkles, ArrowRight, ExternalLink, Phone } from "lucide-react";
import { ChatMessage, type Message } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { CHAT_SUGGESTED_QUESTIONS, CHAT_WELCOME_MESSAGE, CHAT_ERROR_MESSAGE, CHAT_NETWORK_ERROR, COMPANY } from "@/lib/constants";

interface ChatPanelProps {
  onClose: () => void;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: CHAT_WELCOME_MESSAGE,
};

export function ChatPanel({ onClose }: ChatPanelProps) {
  const [messages, setMessages] = React.useState<Message[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [provider, setProvider] = React.useState<string>("");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = React.useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: content.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const apiMessages = [...messages, userMessage]
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (data.error) {
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: CHAT_ERROR_MESSAGE,
        };
        setMessages((prev) => [...prev, errorMessage]);
      } else {
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.message,
          provider: data.provider,
        };
        setMessages((prev) => [...prev, assistantMessage]);
        if (data.provider) setProvider(data.provider);
      }
    } catch {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content: CHAT_NETWORK_ERROR,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col h-[560px] shadow-2xl border border-primary/10 bg-background/98 backdrop-blur-2xl">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary via-primary/90 to-accent px-5 py-4 flex items-center justify-between shrink-0 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/20 -translate-x-8 -translate-y-8" />
          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/15 translate-x-4 translate-y-4" />
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-heading font-bold text-white tracking-tight">
              DataSphere AI Assistant
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-xs text-white/80 font-medium">
                En ligne {provider && `• ${provider === "groq" ? "Groq AI" : provider === "openrouter" ? "OpenRouter AI" : "AI"}`}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 relative z-10">
          <a
            href={COMPANY.phoneHref}
            className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Appeler"
          >
            <Phone size={14} className="text-white" />
          </a>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
              <Sparkles size={14} className="text-white" />
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3 border border-border/30">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span className="text-xs text-muted-foreground ml-1">Analyse en cours...</span>
              </div>
            </div>
          </div>
        )}

        {/* Suggested questions */}
        {messages.length <= 1 && !isLoading && (
          <div className="space-y-2 pt-2">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Questions fréquentes
            </p>
            {CHAT_SUGGESTED_QUESTIONS.map((question, i) => (
              <button
                key={question}
                onClick={() => sendMessage(question)}
                className="flex items-center gap-3 w-full text-left text-sm px-4 py-3 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/20 hover:shadow-sm transition-all text-muted-foreground hover:text-foreground group/q"
              >
                <span className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary text-xs font-bold group-hover/q:bg-primary/20 transition-colors">
                  {i + 1}
                </span>
                {question}
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover/q:opacity-100 transition-opacity text-primary" />
              </button>
            ))}
          </div>
        )}

        {/* Contact CTA after several messages */}
        {messages.length >= 4 && !isLoading && (
          <div className="mt-2 p-3 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xs text-muted-foreground mb-2">
              Besoin d&apos;un expert ? Parlons de votre projet !
            </p>
            <a
              href="/#contact"
              onClick={() => onClose()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Contacter un expert <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}
