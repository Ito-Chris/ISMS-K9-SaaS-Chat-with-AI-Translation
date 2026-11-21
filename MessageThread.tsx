import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { translate } from "@/lib/translate";
import type { Message } from "@/data/seed";

type Props = {
  messages: Message[];
  language: string;
};

export function MessageThread({ messages, language }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, language]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-sm rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-10 text-center shadow-sm">
          <p className="text-base font-semibold text-slate-800">
            No messages yet
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Start the conversation — say hello to the team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        {messages.map((m) => {
          const translated = translate(m.text, language);
          const showTranslation = language !== "en" && translated !== m.text;
          return (
            <div
              key={m.id}
              className={cn(
                "flex gap-3",
                m.self ? "flex-row-reverse" : "flex-row",
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  m.self
                    ? "bg-teal-600 text-white"
                    : "bg-slate-200 text-slate-700",
                )}
              >
                {m.avatar}
              </span>
              <div
                className={cn(
                  "min-w-0 max-w-xl",
                  m.self ? "items-end text-right" : "items-start",
                )}
              >
                <div
                  className={cn(
                    "flex items-baseline gap-2",
                    m.self ? "justify-end" : "justify-start",
                  )}
                >
                  <span className="text-sm font-semibold text-slate-800">
                    {m.author}
                  </span>
                  <span className="text-xs text-slate-400">{m.time}</span>
                </div>
                <div
                  className={cn(
                    "mt-1 rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
                    m.self
                      ? "bg-teal-600 text-white"
                      : "border border-slate-200 bg-white text-slate-700",
                  )}
                >
                  {translated}
                </div>
                {showTranslation && (
                  <p className="mt-1 text-xs italic text-slate-400">
                    Translated from English
                  </p>
                )}
              </div>
            </div>
          );
        })}
        <div ref={endRef} />
      </div>
    </div>
  );
}