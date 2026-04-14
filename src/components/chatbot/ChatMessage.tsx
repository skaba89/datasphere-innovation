"use client";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex items-start gap-2 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      {isAssistant && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold font-heading">D</span>
        </div>
      )}
      <div
        className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed ${
          isAssistant
            ? "glass-card rounded-xl rounded-tl-sm"
            : "bg-primary text-primary-foreground rounded-xl rounded-tr-sm"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
