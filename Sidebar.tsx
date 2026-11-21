import { Hash, MessageSquare, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Channel } from "@/data/seed";

type Props = {
  channels: Channel[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function Sidebar({ channels, activeId, onSelect }: Props) {
  const channelList = channels.filter((c) => c.kind === "channel");
  const dmList = channels.filter((c) => c.kind === "dm");

  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-800 bg-slate-900 text-slate-300 md:flex">
      <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-slate-900">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">ISMS K9</p>
          <p className="truncate text-xs text-slate-400">Secure team workspace</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Channels
        </p>
        <ul className="space-y-1">
          {channelList.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onSelect(c.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  activeId === c.id
                    ? "bg-teal-500 font-semibold text-slate-900"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white",
                )}
              >
                <Hash className="h-4 w-4 shrink-0 opacity-80" />
                <span className="truncate">{c.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <p className="px-2 pb-2 pt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Direct messages
        </p>
        <ul className="space-y-1">
          {dmList.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onSelect(c.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  activeId === c.id
                    ? "bg-teal-500 font-semibold text-slate-900"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                    activeId === c.id
                      ? "bg-slate-900 text-teal-400"
                      : "bg-slate-700 text-slate-200",
                  )}
                >
                  {c.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <span className="truncate">{c.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-slate-800 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-slate-900">
            YO
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">You</p>
            <p className="truncate text-xs text-slate-400">Online</p>
          </div>
          <MessageSquare className="ml-auto h-4 w-4 text-slate-500" />
        </div>
      </div>
    </aside>
  );
}