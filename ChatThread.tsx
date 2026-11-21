import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { Channel } from "@/data/seed";
import { translate } from "@/lib/translate";

type Props = {
  channel: Channel;
  language: string;
};

export function ChatThread({ channel, language }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [channel.messages.length, channel.id, language]);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 px-6 py-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">
            Welcome to {channel.kind === "channel" ? "#" : ""}
            {channel.name}
          </p>
          <p className="mt-1 text-sm text-slate-500">{channel.topic}</p>
        </div>

        {channel.messages.map((m) => {
          const translated = translate(m.text, language);
          const showTranslation = language !== "en" && translated !== m.text;
          return (
            <div key={m.id} className="flex gap-3">
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  m.self
                    ? "bg-teal-600 text-white"
                    : "bg-slate-200 text-slate-700",
                )}
              >
                {m.avatar}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    {m.author}
                  </span>
                  <span className="text-xs text-slate-400">{m.time}</span>
                </div>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
                  {m.text}
                </p>
                {showTranslation && (
                  <p className="mt-1.5 rounded-lg border-l-2 border-teal-400 bg-teal-50 px-3 py-1.5 text-sm italic text-teal-900">
                    {translated}
                  </p>
                )}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}