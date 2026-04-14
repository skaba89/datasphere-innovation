"use client";

import * as React from "react";
import { X, Bot } from "lucide-react";
import { ChatMessage, type Message } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { CHAT_SUGGESTED_QUESTIONS, CHAT_WELCOME_MESSAGE, CHAT_ERROR_MESSAGE, CHAT_NETWORK_ERROR } from "@/lib/constants";

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
        };
        setMessages((prev) => [...prev, assistantMessage]);
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
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-[520px] shadow-2xl border border-primary/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-heading font-semibold text-white">
              DataSphere AI Assistant
            </h3>
            <p className="text-xs text-white/70">
              En ligne • Réponse en quelques secondes
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X size={16} className="text-white" />
        </button>
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
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
              <Bot size={14} className="text-white" />
            </div>
            <div className="glass-card rounded-xl rounded-tl-sm px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary/50 animate-typing" />
                <span
                  className="w-2 h-2 rounded-full bg-primary/50 animate-typing"
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-primary/50 animate-typing"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Suggested questions (only show at the start) */}
        {messages.length <= 1 && !isLoading && (
          <div className="space-y-2 pt-2">
            <p className="text-xs text-muted-foreground font-medium">
              Questions suggérées :
            </p>
            {CHAT_SUGGESTED_QUESTIONS.map((question) => (
              <button
                key={question}
                onClick={() => sendMessage(question)}
                className="block w-full text-left text-sm px-3 py-2.5 rounded-lg border border-border/50 bg-secondary/30 hover:bg-secondary/60 hover:border-primary/20 transition-all text-muted-foreground hover:text-foreground"
              >
                {question}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}
