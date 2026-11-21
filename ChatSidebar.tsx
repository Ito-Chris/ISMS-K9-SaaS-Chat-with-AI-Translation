import { Hash, MessageSquare, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Channel } from "@/data/seed";

type Props = {
  channels: Channel[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ChatSidebar({ channels, activeId, onSelect }: Props) {
  const rooms = channels.filter((c) => c.kind === "channel");
  const dms = channels.filter((c) => c.kind === "dm");

  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-200 bg-slate-900 text-slate-300 md:flex">
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 font-bold text-slate-900">
          N
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">Northwind</p>
          <p className="truncate text-xs text-slate-400">Team workspace</p>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-400 ring-1 ring-white/10">
          <Search className="h-4 w-4" />
          <span>Search messages</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        <SectionLabel label="Channels" />
        <ul className="mb-6 space-y-1">
          {rooms.map((c) => (
            <li key={c.id}>
              <SidebarItem
                active={c.id === activeId}
                onClick={() => onSelect(c.id)}
                icon={<Hash className="h-4 w-4" />}
                label={c.name}
                badge={c.unread}
              />
            </li>
          ))}
        </ul>

        <SectionLabel label="Direct messages" />
        <ul className="space-y-1">
          {dms.map((c) => (
            <li key={c.id}>
              <SidebarItem
                active={c.id === activeId}
                onClick={() => onSelect(c.id)}
                icon={
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-[10px] font-semibold text-slate-200">
                    {c.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                }
                label={c.name}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/10 p-4">
        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
          <Plus className="h-4 w-4" />
          Invite teammates
        </button>
      </div>
    </aside>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
      {label}
    </p>
  );
}

function SidebarItem({
  active,
  onClick,
  icon,
  label,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition",
        active
          ? "bg-teal-500/15 text-white ring-1 ring-teal-400/30"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-100",
      )}
    >
      <span className={cn(active ? "text-teal-400" : "text-slate-500")}>
        {icon}
      </span>
      <span className="flex-1 truncate text-left">{label}</span>
      {badge ? (
        <span className="rounded-full bg-teal-500 px-1.5 py-0.5 text-[10px] font-bold text-slate-900">
          {badge}
        </span>
      ) : null}
    </button>
  );
}